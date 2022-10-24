/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "en-US",
  }
}

module.exports = nextConfig
