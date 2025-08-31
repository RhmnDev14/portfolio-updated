import { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Abaikan error ESLint saat build
    ignoreDuringBuilds: true,
  },
  // opsi lain jika ada
};

export default nextConfig;
