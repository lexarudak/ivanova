/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `@import "src/styles/index.scss";`,
  },
}

module.exports = nextConfig
