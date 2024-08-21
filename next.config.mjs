/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '', // Use empty string for default ports (80 for HTTP and 443 for HTTPS)
          pathname: '/**', // This allows any path under the domain
        },
      ],
    },
  };
  
  export default nextConfig;
  