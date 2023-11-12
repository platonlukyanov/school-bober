/** @type {import('next').NextConfig} */
import nextPWA from 'next-pwa';

const nextConfig = {
    reactStrictMode: true,
}

const withPWA = nextPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

export default withPWA(nextConfig);

