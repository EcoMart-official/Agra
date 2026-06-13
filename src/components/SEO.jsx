import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, image, url }) {
  const siteTitle = 'Kidzee Egra | Premium Preschool in Egra';
  const defaultDescription = 'Kidzee Egra is the best preschool in Egra, offering early childhood education with the Pentemind pedagogy. Enroll your child today for a bright future.';
  const defaultKeywords = 'preschool in egra, kidzee egra, play school egra, best preschool egra, early childhood education, kindergarten egra';
  const defaultImage = 'https://i.ibb.co/35pG18YG/Screenshot-20260613-193516.png';
  const siteUrl = 'https://kidzeeegra.netlify.app';

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
      <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url ? `${siteUrl}${url}` : siteUrl} />
      <meta property="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />

      <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />
    </Helmet>
  );
}
