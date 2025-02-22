import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      // TODO remove domains
      "instagram.com",
      "www.instagram.com",
      "scontent.cdninstagram.com",
      "cdninstagram.com",
      "flowbite.s3.amazonaws.com",
      "images.pexels.com",
    ],
  },
};

export default nextConfig;
