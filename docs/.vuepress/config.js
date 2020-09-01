module.exports = {
	plugins: [],

	themeConfig: {
		sidebar: [
			{
				title: 'Introduction',
				path: '/introduction/',
				children: [
					'/introduction/folder-structure',
					'/introduction/project-setup'
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
