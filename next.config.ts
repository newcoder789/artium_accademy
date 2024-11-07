import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains:["images.unsplash.com", "res.cloudinary.com"], 
  },
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
