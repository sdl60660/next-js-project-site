module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/projects",
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
