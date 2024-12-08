module.exports = {
    reactStrictMode: true,
    webpack: (config, { dev }) => {
      if (dev) {
        config.watchOptions = {
          poll: 1000, // Check for changes every second
        };
      }
      return config;
    },
    
  };
  