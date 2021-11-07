module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages'],
  },
  webpack: (config, {isServer}) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
