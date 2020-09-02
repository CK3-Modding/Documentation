module.exports = {
	plugins: [
		[
			'vuepress-plugin-clean-urls',
			{
			  normalSuffix: '',
			  indexSuffix: '/',
			  notFoundPath: '/404.html',
			},
		],
	],

	themeConfig: {
		sidebar: [
			{
				title: 'Fundamentals',
				children: [
					'/fundamentals/project-setup',
					'/fundamentals/folder-structure',
				]
			},
			{
				title: 'Scripting Reference',
				children: [
					'/scripting/effects',
					'/scripting/scopes',
					'/scripting/triggers',
				]
			},
			{
				title: 'Tutorials',
				children: [
					'tutorials/decision-creation',
				]
			}
		],

		nav: [
			{text: "Home", link: "/"},
			{text: "Chat", link: "https://discord.gg/glorifiedstudios"},
			{text: "Contribute", link: "https://github.com/CK3-Modding/Documentation/"}
		]
	},

	title: "Crusader Kings III - Modding Documentation",
	footer: "[MIT Licensed](https://github.com/CK3-Modding/Documentation/blob/master/LICENSE)"
}
