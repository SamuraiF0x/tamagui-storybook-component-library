import { Meta } from "@storybook/react";
import { Align, Position } from "../../interfaces/utilities.type";
import { Status } from "../../interfaces/utilities.type";
import Label from "./Label";

export default {
	title: "utilities/Label",
	component: Label,
	parameters: {
		componentSubtitle: "Primary label with tag (containing tag label and icon if needed)",
	},
	argTypes: {
		label: {
			description: "Label content",
		},
		tagLabel: {
			control: "text",
			description: "Additional (info) content",
		},
		tagPosition: {
			control: "select",
			options: Position,
			description: "Tag label can have different positions",
		},
		tagAlign: {
			control: "select",
			options: Align,
			description: "Tag label can have different alignments",
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
		label: "Label",
	},
} satisfies Meta<typeof Label>;

/**
 * Fully featured label
 */
export const FullyFeatured = {
	args: {
		label: "Label",
		tagLabel: "tag label",
		tagPosition: Position.BOTTOM,
		tagAlign: Align.START,
		tagIcon: "circle",
		status: Status.SUCCESS,
		tagBg: true,
	},
};

/**
 * Basic label
 */
export const Basic = {
	args: {
		label: "Label",
	},
};
