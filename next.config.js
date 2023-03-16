/** @type {import('next').NextConfig} */

const withGoogleFonts = require("next-google-fonts");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...withGoogleFonts({
    googleFonts: {
      fonts: ["Poppins:ital,wght@0,300;0,500;0,600;0,700;1,300&display=swap"],
      display: "swap",
    },
  }),
};

module.exports = nextConfig;
