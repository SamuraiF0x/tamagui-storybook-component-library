import { Meta } from "@storybook/react";
import Dropdown from "./Dropdown";

const items = [
	{ name: "Tamagui", icon: "tamagui.svg" },
	{ name: "Vite", icon: "vite.svg" },
	{ name: "React", icon: "react.svg" },
	{ name: "Storybook", icon: "storybook.svg" },
	{ name: "Typescript", icon: "typescript.svg" },
	{ name: "Melon" },
	{ name: "Honeydew" },
	{ name: "Starfruit" },
	{ name: "Blueberry" },
	{ name: "Raspberry" },
	{ name: "Strawberry" },
	{ name: "Mango" },
	{ name: "Pineapple" },
	{ name: "Lime" },
	{ name: "Lemon" },
	{ name: "Coconut" },
	{ name: "Guava" },
	{ name: "Papaya" },
	{ name: "Orange" },
	{ name: "Grape" },
	{ name: "Jackfruit" },
	{ name: "Durian" },
];

export default {
	title: "components/Dropdown",
	component: Dropdown,
	parameters: {
		componentSubtitle: "Dropdown to select items where upon selecting, an action is performed",
	},
	argTypes: {
		label: {
			control: "text",
			description: "Optional label above dropdown",
		},
		tagLabel: {
			control: "text",
			description: "Optional extra label to the right of label",
		},
		triggerLabel: {
			control: "text",
			description: "The title when dropdown is selected, also a placeholder when no item is chosen",
		},
		triggerBg: {
			control: "boolean",
			description: "Add background color to trigger button",
		},
		inputValue: {
			control: "text",
			description: "Default or previously stored value",
		},
		items: {
			control: "select",
			options: { Items: items },
			description: "Array of items to select, containing name and icon (both strings)",
		},

		onSelect: { action: "onSelect", description: "Select handler" },
	},
	args: {
		triggerLabel: "Dropdown",
	},
} satisfies Meta<typeof Dropdown>;

/**
 * Basic dropdown
 */
export const Basic = {
	args: {
		items: items,
	},
};

/**
 * Dropdown with label
 */
export const Label = {
	args: {
		items: items,
		label: "Label",
	},
};

/**
 * Dropdown with extra label
 */
export const ExtraLabel = {
	args: {
		items: items,
		label: "Label",
		tagLabel: "tag label",
	},
};
