module.exports = {
	plugins: [
		"@vuepress/plugin-active-header-links"
	],
	// 	: {},
	// 	"@vuepress/plugin-nprogress": {},
	// 	"@vuepress/plugin-register-components": {},
	// 	"@vuepress/plugin-search": {},
	//
	// 	"vuepress-plugin-auto-sidebar": {
	// 		titleMap: {
	// 			"salesforce-for-students": "Salesforce for Students",
	// 			"pd1-guide": "Platform Developer I Certification Guide",
	// 			"admin-guide": "Admin Certification Guide",
	// 			"why-learn-salesforce": "Why Learn Salesforce?",
	// 			misc: "Miscellany"
	// 		}
	// 	},
	// },
	// 	require('vuepress-plugin-container'),
	// 	require('@vuepress/plugin-active-header-links'),
	// 	require('@vuepress/plugin-nprogress'),
	// 	require('@vuepress/plugin-register-components'),
	// 	require('@vuepress/plugin-search'),
	// 	require('@vuepress/theme-default')
	// ],

	themeConfig: {
		sidebar: [
			'/introduction/',
			'/'
		]
	}
}
