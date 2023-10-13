/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
          {
            protocol: "http",
            hostname: "**",
          },
        ],
    },
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
}

module.exports = nextConfig
