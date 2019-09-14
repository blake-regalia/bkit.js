
module.exports = {
	tasks: {
		all: 'build/**',
	},

	outputs: {
		build: {
			'main.js': () => ({
				deps: 'src/main/module.js.jmacs',

				run: /* syntax: bash */ `
					npx jmacs $1 > $@
					npx eslint --fix --color $@
				`,
			}),
		},
	},
};
