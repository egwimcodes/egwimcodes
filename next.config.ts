import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits a self-contained server bundle so the Docker runtime stage does not
  // need node_modules. See Dockerfile.
  output: "standalone",
};

export default nextConfig;
