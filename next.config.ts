// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/models/:file*',
        headers: [
          { key: 'Content-Type', value: 'model/gltf-binary' }, // for .glb
        ],
      },
      {
        source: '/models/:file*',
        headers: [
          { key: 'Content-Type', value: 'model/vnd.usdz+zip' }, // for .usdz
        ],
      },
    ];
  },
};

module.exports = nextConfig;
