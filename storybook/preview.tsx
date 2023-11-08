import React from "react";
import type { Preview } from "@storybook/react";
import config from "../tamagui.config";
import { TamaguiProvider, Theme } from "tamagui";

const INITIAL_VIEWPORTS = {
	mobile1: {
		name: "Small mobile",
		styles: {
			height: "568px",
			width: "320px",
		},
		type: "mobile",
	},
	mobile2: {
		name: "Large mobile",
		styles: {
			height: "896px",
			width: "414px",
		},
		type: "mobile",
	},
	tablet: {
		name: "Tablet",
		styles: {
			height: "1112px",
			width: "834px",
		},
		type: "tablet",
	},
	crestron: {
		name: "Crestron",
		styles: {
			height: "360px",
			width: "640px",
		},
		type: "mobile",
	},
};

const preview: Preview = {
	globalTypes: {
		theme: {
			name: "Theme",
			title: "Theme",
			description: "Theme for your components",
			defaultValue: "dark",
			toolbar: {
				icon: "paintbrush",
				dynamicTitle: true,
				items: [
					{ value: "dark", left: "🌙", title: "Dark Mode" },
					{ value: "light", left: "☀️", title: "Light Mode" },
					{ value: "green", left: "🌙", title: "Green Mode" },
					{ value: "blue", left: "☀️", title: "Blue Mode" },
				],
			},
		},
	},
	parameters: {
		layout: "centered",
		backgrounds: {
			default: "Space Blue 2",
			values: [
				{
					name: "dark",
					value: "#333333",
				},
				{
					name: "light",
					value: "#f8f8f8",
				},
				{
					name: "Space Blue",
					value: "#080B1C",
				},
				{
					name: "Space Blue 2",
					value: "#1E132A",
				},
				{
					name: "Cosmic Latte",
					value: "#fff8e7",
				},
			],
		},
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			// expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
	decorators: [
		(Story, { globals }) => {
			return (
				<TamaguiProvider config={config} defaultTheme="dark" {...globals}>
					<Theme name={globals.theme}>
						<Story />
					</Theme>
				</TamaguiProvider>
			);
		},
	],
};

export default preview;
