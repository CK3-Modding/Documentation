module.exports = {
	plugins: {
		'container': {},
		'@vuepress/theme-default': {},
		'@vuepress/active-header-links': {},
		'@vuepress/nprogress': {},
		'@vuepress/register-components': {},
		'@vuepress/search': {}
	},

	themeConfig: {
		sidebar: [
			'/',
			'/introduction/',
			{
				title: 'Introduction',
				path: '/introduction/',
				children: [
					'/',
					'/project-setup'
				]
			}
		]
	}
}
