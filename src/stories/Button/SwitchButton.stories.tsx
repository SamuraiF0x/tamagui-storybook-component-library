import { Meta } from "@storybook/react";
import { Align, Position } from "../../interfaces/utilities.type";
import { Status } from "../../interfaces/utilities.type";
import { Variant } from "./button.type";
import Button from "./Button";

export default {
	title: "components/Button/SwitchButton",
	component: Button,
	parameters: {
		componentSubtitle: "Primary UI component for user interaction",
	},
	argTypes: {
		variant: {
			control: "select",
			options: Variant,
			description: "Button configurations",
		},
		circular: {
			control: "boolean",
			options: Boolean,
			description: "Button can be fully circular if Size is set to TINY",
		},
		icon: {
			control: "select",
			options: {
				none: "",
				riveHamburger: "hamburger-menu.riv",
				react: "react.svg",
				storybook: "storybook.svg",
				tamagui: "tamagui.svg",
				typescript: "typescript.svg",
				vite: "vite.svg",
			},
			description: "Button can have icon",
		},
		iconSize: {
			control: "number",
			description: "Icon has controllable size",
		},
		iconPosition: {
			control: "select",
			options: Position,
			description: "Icon can have different positions",
		},
		label: {
			description: "Button content",
		},
		tagLabel: {
			control: "text",
			description: "Additional (tag) content",
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
		onPress: { action: "onPress", description: "Click handler" },
	},
	args: {
		variant: Variant.BASIC,
		label: "Button",
	},
} satisfies Meta<typeof Button>;

/**
 * Switch Square with Rive icon and label indicator
 */
export const SwitchSquareWithRiveAndIndicator = {
	title: "components/SwitchButton",
	args: {
		variant: Variant.SWITCH_SQUARE,
		icon: "hamburger-menu.riv",
		iconPosition: Position.TOP,
		tagLabel: "tag",
		tagPosition: Position.BOTTOM,
		tagIcon: "circle",
		status: Status.SUCCESS,
	},
};

/**
 * Switch Card with Rive icon and label indicator
 */
export const SwitchCardWithIconAndIndicator = {
	args: {
		variant: Variant.SWITCH_CARD,
		icon: "tamagui.svg",
		label: "Climate",
		tagLabel: "24°C",
		tagIcon: "circle",
		tagBg: true,
		status: Status.ERROR,
	},
};

/**
 * Switch Tall with icon and rive icon
 */
export const SwitchTallWithIconAndRive = {
	args: {
		variant: Variant.SWITCH_TALL,
		icon: "tamagui.svg",
		label: "Label",
		tagLabel: "tag label",
		tagIcon: "vite.svg",
		status: Status.IDLE,
	},
};

/**
 * Switch Tall Card with icon and rive icon
 */
export const SwitchTallCardWithIconAndRive = {
	args: {
		variant: Variant.SWITCH_TALL_CARD,
		icon: "tamagui.svg",
		label: "Label",
		tagLabel: "tag label",
		tagPosition: Position.TOP,
		tagIcon: "hamburger-menu.riv",
		status: Status.WARNING,
	},
};
