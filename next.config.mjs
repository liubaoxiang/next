/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3-alpha.figma.com',
                port: '',
                pathname: '/profile/**', // 根据实际的路径模式进行调整
            },
        ],
    },
};

export default nextConfig;
