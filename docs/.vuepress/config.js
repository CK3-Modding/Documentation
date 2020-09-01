module.exports = {
	plugins: [],

	themeConfig: {
		sidebar: [
			{
				title: 'Introduction',
				path: '/introduction/',
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
		]
	}
}
