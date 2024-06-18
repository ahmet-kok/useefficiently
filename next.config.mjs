import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

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
        hostname: "github.com",
      },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};
/* export default nextConfig;
 */
export default withNextIntl(nextConfig);
