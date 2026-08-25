module.exports = {
  reactStrictMode: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },

  publicRuntimeConfig: {
    PRODUCTION: false,
  },

  env: {
    APP_DOMAIN: "APP_DOMAIN",
  },

  images: {
    domains: ["localhost", "makeclient.ngrok.io", "picsum.photos"],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/,
      type: "asset/resource",
    });
    return config;
  },
};
