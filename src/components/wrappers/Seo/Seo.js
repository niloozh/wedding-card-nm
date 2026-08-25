import Head from "next/head";

const Seo = ({
  title = "Saba & Alireza Wedding",
  keywords = "",
  description = ``,
  imagePreview = "/images/favicon/logo.png",
  url = "https://wedding-card-sr.vercel.app/",
  imgAlt = "",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imagePreview} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Saba & Alireza Wedding" />
        <meta name="twitter:card" content={imgAlt || title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imagePreview} />
        <meta name="twitter:url" content={url} />
      </Head>
      {children}
    </>
  );
};

export default Seo;
