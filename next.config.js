module.exports = {
  experimental: {
    nextScriptWorkers: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/drumset",
        destination: "/projects/drumset",
        permanent: true,
      },
      // {
      //   source: "/handwriting",
      //   destination: "/surveys/handwriting",
      //   permanent: true,
      // },
      {
        source: "/surveys",
        destination: "/projects",
        permanent: false,
      },
      {
        source: "/surveys/handwriting",
        destination: "/projects",
        permanent: false,
      },
    ];
  },
};
