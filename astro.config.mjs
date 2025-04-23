// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Upstate Coders League',
			lastUpdated: true,
			tableOfContents: false,
			pagination: false,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/uclsc' }],
			sidebar: [
				{
					label: 'Meetups',
					slug: 'meetups',
				},
				{
					label: 'Library',
					autogenerate: { directory: 'library' },
				},
			],
		}),
	],
});
