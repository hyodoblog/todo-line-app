// /next.config.js

const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

/** @type {import('next/dist/server/config-shared').NextConfig} */
const config = {
  pwa: {
    dest: 'public',
    runtimeCaching
  },

  reactStrictMode: false,

  pageExtensions: ['page.tsx', 'api.ts'],

  trailingSlash: true
}

module.exports = withPWA(config)
