import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  styledComponents: true,
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
