
module.exports = {
	tasks: {
		all: 'build/**',
	},

	outputs: {
		build: {
			'main.js': () => ({
				deps: 'src/main/module.js.jmacs',

				run: /* syntax: bash */ `
					jmacs $1 > $@
					eslint --fix --color $@
				`,
			}),
		},
	},
};
