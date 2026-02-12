/** @type {import('next').NextConfig} */
import nextra from 'nextra';

const withNextra = nextra({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.tsx',
	defaultShowCopyCode: true,
	async redirects() {
		return [
			{
				source: '/docs',
				destination: '/docs/getting-started',
				permanent: true,
			},
		];
	},
});

const nextConfig = withNextra({
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'nextjs.org',
			},
			{
				protocol: 'https',
				hostname: 'geminicli.com',
			},
		],
	},
});

export default nextConfig;
