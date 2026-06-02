/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Pour déployer sur un sous-dossier GitHub Pages (ex: username.github.io/suzon-paul),
  // définir la variable d'env NEXT_PUBLIC_BASE_PATH=/suzon-paul
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  trailingSlash: true,
};

export default nextConfig;
