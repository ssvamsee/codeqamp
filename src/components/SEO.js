import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonicalUrl }) => {
  const defaultTitle = 'CodeQamp | Medical Coding Training Institute in Hyderabad';
  const defaultDescription = 
    'CodeQamp is a premier medical coding training institute in Hyderabad offering professional certification courses like CPC and CIC. Join us to launch your career in medical coding.';
  const defaultKeywords = 
    'medical coding, coding training, CPC certification, CIC certification, medical coding institute, coding classes in Hyderabad, healthcare coding, Ameerpet, medical coding course, medical coding institute in Hyderabad, medical coding in ameerpet';
  
  const siteUrl = 'https://codeqamp.com';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title || defaultTitle}</title>
      <meta name="title" content={title || defaultTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || siteUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={`${siteUrl}/logo512.png`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl || siteUrl} />
      <meta property="twitter:title" content={title || defaultTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={`${siteUrl}/logo512.png`} />
      
      {/* Additional SEO tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="CodeQamp Institute" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
    </Helmet>
  );
};

export default SEO; 