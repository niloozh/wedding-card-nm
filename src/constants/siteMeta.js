export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://wedding-card-nm.vercel.app";

export const SITE_NAME = "نازنین و محمد";

export const SITE_TITLE = "دعوتنامه ازدواج نازنین و محمد";

export const SITE_DESCRIPTION =
  "با افتخار از شما دعوت می‌کنیم در جشن پیوند نازنین عادلخانی و محمد حسینی حضور داشته باشید.";

export const SITE_KEYWORDS = "دعوتنامه, ازدواج, نازنین, محمد, wedding invitation";

export const OG_IMAGE_PATH = "/images/og-share.jpg";

export const OG_IMAGE_ALT = "دعوتنامه ازدواج نازنین و محمد";

export const getAbsoluteUrl = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL.replace(/\/$/, "")}${normalizedPath}`;
};

export const OG_IMAGE_URL = getAbsoluteUrl(OG_IMAGE_PATH);
