const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'Vuesax - Blog',
	// dest: './public',
	description: 'Official Vuesax blog',
	docsDir: 'blog',
	base: '/vuesax-blog/',
	themeConfig: {
		repo: 'lusaxweb/vuesax-blog',
		docsRepo: 'lusaxweb/vuesax-blog',
		docsDir: 'blog',
		docsBranch: 'master',
		// repoLabel: 'Repo',
		editLinks: true,
		editLinkText: 'Edit this page on GitHub!',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Articles', link: '/articles/' },
			{ text: 'Archive', link: '/archive/' },
		],
		logo: '/vuesax-logo-vertical.png',
		pageSize: 5,
		startPage: 0
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-122319353-1' // UA-00000000-0
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://vuepressblog.org',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-reading-time',
		'vuepress-plugin-janitor'
	],
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-vuesax.png' }],
		['link', { rel: 'icon', sizes: '32x32', href: '/favicon-vuesax.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
		['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
}
