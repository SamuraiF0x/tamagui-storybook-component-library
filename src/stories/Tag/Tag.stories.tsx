import { Meta } from "@storybook/react";
import { Status } from "../../interfaces/utilities.type";
import Tag from "./Tag";

export default {
	title: "utilities/Tag",
	component: Tag,
	parameters: {
		componentSubtitle: "Secondary label for extra information and icon if needed",
	},
	argTypes: {
		tagLabel: {
			control: "text",
			description: "Additional (info) content",
		},
		tagIcon: {
			control: "select",
			options: {
				none: "",
				indicator: "circle",
				riveHamburger: "hamburger-menu.riv",
				react: "react.svg",
				storybook: "storybook.svg",
				tamagui: "tamagui.svg",
				typescript: "typescript.svg",
				vite: "vite.svg",
			},
			description: "Label can have icon",
		},
		status: {
			control: "select",
			options: Status,
			description: "Indicator status",
		},
		tagBg: {
			control: "boolean",
			description: "Tag background makes tag label stand out",
		},
	},
	args: {
		tagLabel: "Tag",
	},
} satisfies Meta<typeof Tag>;

/**
 * Fully featured tag
 */
export const FullyFeatured = {
	args: {
		tagLabel: "Tag",
		tagIcon: "tamagui.svg",
		status: Status.SUCCESS,
		tagBg: true,
	},
};

/**
 * Basic tag
 */
export const Basic = {
	args: {
		tagLabel: "Tag",
	},
};
