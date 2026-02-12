import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import AppOnly from '@/components/apponly';
import PagesOnly from '@/components/pagesonly';
import Cross from '@/components/cross';
import Check from '@/components/check';
import Image from '@/components/externalImage';
import NextImage from 'next/image';

const config: DocsThemeConfig = {
	logo: (
		<span
			className='font-extrabold text-2xl'
			style={{ display: 'flex', gap: '6px', alignItems: 'center' }}
		>
			<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
				<NextImage
					width={25}
					height={52}
					src='https://geminicli.com/_astro/icon.Bo4M5sF3.png'
					alt='Logo'
					priority
				/>
				<span>Gemini CLI </span>
			</div>
			<small className='text-[#AAAAAA] text-sm font-medium'>
				(비공식 한글 문서)
			</small>
		</span>
	),
	project: {
		link: 'https://github.com/Jamkris/gemini-cli-ko',
	},
	docsRepositoryBase: 'https://github.com/Jamkris/gemini-cli-ko',
	useNextSeoProps() {
		const { asPath } = useRouter();
		if (asPath !== '/') {
			return {
				titleTemplate: '%s – Gemini CLI 한글 문서',
			};
		}
	},
	components: {
		Check,
		Cross,
		AppOnly,
		PagesOnly,
		Image,
	},
	editLink: {
		component: null,
	},
	feedback: {
		content: null,
	},
	darkMode: true,
	footer: {
		text: 'Gemini CLI 한글/한국어 문서 번역 (비공식) | Using Nextra Docs Template',
	},
};

export default config;
