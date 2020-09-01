module.exports = {
	plugins: [],

	themeConfig: {
		sidebar: [
			{
				title: 'Introduction',
				children: [
					'/introduction/project-setup',
					'/introduction/folder-structure'
				]
			},
			{
				title: 'Tutorials',
				children: [
					'tutorials/basic-alert',
				]
			}
		],

		nav: [
			{text: "Home", link: "/"},
			{text: "Contribute", link: "https://github.com/CK3-Modding/Documentation/"}
		]
	},

	title: "Crusader Kings III - Modding Documentation",
	footer: "[MIT Licensed](https://github.com/CK3-Modding/Documentation/blob/master/LICENSE)"
}
