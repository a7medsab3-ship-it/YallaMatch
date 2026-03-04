import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    twitterHandle?: string;
    children?: ReactNode;
}

const SEO: React.FC<SEOProps> = ({
    title = "GoalZone Pro | Book 5-a-side Football Fields in Egypt",
    description = "The premier platform to book high-quality football fields in Egypt. Instant confirmation, secure payments, and premium venues.",
    canonical = "https://goalzone.pro",
    ogType = "website",
    ogImage = "/og-image.jpg",
    twitterHandle = "@GoalZonePro",
    children
}) => {
    const siteName = "GoalZone Pro";
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content={twitterHandle} />

            {/* Language */}
            <html lang="en" />
            <meta name="language" content="English" />
            <meta name="geo.region" content="EG" />

            {children}
        </Helmet>
    );
};

export default SEO;
