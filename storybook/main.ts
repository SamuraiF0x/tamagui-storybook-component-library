import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	staticDirs: ["../public"],

	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
		"@storybook/addon-styling",
		"@storybook/addon-a11y",
		"@storybook/addon-storysource",
		"@storybook/addon-docs",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	viteFinal: async (config, { configType }) => {
		const { tamaguiPlugin } = require("@tamagui/vite-plugin");

		config.plugins?.push(
			tamaguiPlugin({
				config: "../tamagui.config.ts",
				components: ["tamagui"],
			})
		);

		return config;
	},
	core: {},
	typescript: {
		reactDocgen: "react-docgen",
	},
	docs: {
		autodocs: true,
		defaultName: "Documentation",
	},
};
export default config;
