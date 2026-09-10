import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Unoptimized: this dev machine's Node process can't verify Unsplash's
    // TLS cert (corporate proxy/AV interception), so the optimizer's
    // server-side fetch fails. Browsers trust it fine. Once real, self-hosted
    // images replace these Unsplash placeholders, this can be removed.
    unoptimized: true,
  },
};

export default nextConfig;
