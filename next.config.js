/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/customer/Home",
        permanent: true,
      },
    ];
  },
};

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: "/",
//         destination: "/customer/Home",
//         permanent: true,
//       },
//     ];
//   },
// };

// redirect from root to home url in next js
