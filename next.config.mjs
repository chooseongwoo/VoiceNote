export default {
  async redirects() {
    return [
      {
        source: "/main",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
