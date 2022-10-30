module.exports = {
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
    ];
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
