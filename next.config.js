/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  // Static export: the whole app renders to plain HTML/CSS/JS in `out/`,
  // which is what GitHub Pages serves.
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    // No image optimisation server on GitHub Pages.
    unoptimized: true
  }
};

module.exports = nextConfig;
