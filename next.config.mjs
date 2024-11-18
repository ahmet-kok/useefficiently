/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dl.airtable.com",
      },
      {
        protocol: "https",
        hostname: "cdn.useefficiently.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};
export default nextConfig;
