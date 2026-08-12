import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    // Adds a bucket close to the logo's 2x retina width (215 * 2 = 430) so
    // Next doesn't jump straight to the 640px device-size bucket for it.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 432],
  },
};

export default nextConfig;
