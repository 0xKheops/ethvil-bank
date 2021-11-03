console.log("next.config : ", {
  production: process.env.NODE_ENV === "production",
});

module.exports = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/ethvil-bank" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/ethvil-bank" : "",
};
