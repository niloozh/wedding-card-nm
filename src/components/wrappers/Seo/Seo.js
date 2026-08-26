import Head from "next/head";

import {
  OG_IMAGE_ALT,
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/constants/siteMeta";

const Seo = ({
  title = SITE_TITLE,
  keywords = SITE_KEYWORDS,
  description = SITE_DESCRIPTION,
  imagePreview = OG_IMAGE_URL,
  url = SITE_URL,
  imgAlt = OG_IMAGE_ALT,
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
        <meta property="og:image:alt" content={imgAlt} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="fa_IR" />
        <meta name="twitter:card" content="summary_large_image" />
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
