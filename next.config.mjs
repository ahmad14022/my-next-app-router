/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // just change di hostname
                protocol:'https',
                hostname:'static.nike.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
