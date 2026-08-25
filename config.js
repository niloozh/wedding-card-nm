import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const PRODUCTION = publicRuntimeConfig.PRODUCTION;

export const APP_DOMAIN = process.env.APP_DOMAIN;
export const APP_DOMAIN_FOR_SERVER_SIDE_PROPS =
  process.env.APP_DOMAIN === "localhost"
    ? "http://localhost"
    : `https://${process.env.APP_DOMAIN}`;
