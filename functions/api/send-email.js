// Cloudflare Pages Function for Resend Email Integration
export async function onRequestPost(context) {
    const { request, env } = context;

    // CORS headers
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    try {
        const { name, phone, businessName, service, message } = await request.json();

        // Validate required fields
        if (!name || !phone || !businessName || !service || !message) {
            return new Response(
                JSON.stringify({ error: 'All fields are required' }),
                { status: 400, headers: corsHeaders }
            );
        }

        // Get Resend API key from environment
        const RESEND_API_KEY = env.RESEND_API_KEY;

        if (!RESEND_API_KEY) {
            console.error('RESEND_API_KEY environment variable is not set');
            return new Response(
                JSON.stringify({ error: 'Email service not configured' }),
                { status: 500, headers: corsHeaders }
            );
        }

        // Create HTML email content
        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #F0C040 0%, #E0A030 100%); padding: 20px; border-radius: 8px 8px 0 0; }
        .header h1 { color: #181410; margin: 0; font-size: 24px; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; font-size: 12px; text-transform: uppercase; }
        .value { font-size: 16px; color: #181410; margin-top: 4px; }
        .message-box { background: #fff; padding: 15px; border-radius: 8px; border: 1px solid #e0e0e0; margin-top: 10px; }
        .footer { text-align: center; padding: 20px; color: #888; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 New Lead from Website</h1>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
            </div>
            <div class="field">
                <div class="label">Phone</div>
                <div class="value">${phone}</div>
            </div>
            <div class="field">
                <div class="label">Business Name</div>
                <div class="value">${businessName}</div>
            </div>
            <div class="field">
                <div class="label">Service Interested In</div>
                <div class="value">${service}</div>
            </div>
            <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
        </div>
        <div class="footer">
            This email was sent from the Webchamp contact form.
        </div>
    </div>
</body>
</html>
        `.trim();

        // Send email using Resend API
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'Webchamp Website <info@webchamp.services>',
                to: ['weare@webchamp.services'],
                subject: `New Lead: ${name} - ${service}`,
                html: htmlContent,
                reply_to: 'info@webchamp.services'
            })
        });

        const result = await response.json();

        if (!response.ok) {
            console.error('Resend API error:', result);
            return new Response(
                JSON.stringify({
                    error: 'Failed to send email',
                    details: result.message || 'Unknown error'
                }),
                { status: 500, headers: corsHeaders }
            );
        }

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Email sent successfully',
                emailId: result.id
            }),
            { status: 200, headers: corsHeaders }
        );

    } catch (error) {
        console.error('Server error:', error);
        return new Response(
            JSON.stringify({
                error: 'Internal server error',
                details: error.message
            }),
            { status: 500, headers: corsHeaders }
        );
    }
}

// Handle CORS preflight
export async function onRequestOptions() {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}
