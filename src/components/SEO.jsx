import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Web Development & Digital Marketing Agency India | Webchamp.services",
    description = "Professional web development, SEO optimization & digital marketing solutions. Helping businesses grow online in India.",
    keywords = "web development, website design, SEO services, digital marketing, India",
    image = "https://webchamp.services/logo.png",
    url = "https://webchamp.services"
}) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="canonical" href={url} />
    </Helmet>
);

export default SEO;
