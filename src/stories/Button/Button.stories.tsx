import { Meta } from "@storybook/react";
import { Align, Position } from "../../interfaces/utilities.type";
import { Status } from "../../interfaces/utilities.type";
import { Variant } from "./button.type";
import Button from "./Button";

export default {
	title: "components/Button/Button",
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
		selectable: {
			control: "boolean",
			options: Boolean,
			description: "Button can be selectable (except Switch Buttons)",
		},
		onPress: { action: "onPress", description: "Click handler" },
	},
	args: {
		variant: Variant.BASIC,
		label: "Button",
	},
} satisfies Meta<typeof Button>;

/**
 * Simple button with label only
 */
export const Basic = {
	args: {
		variant: Variant.BASIC,
	},
};

/**
 * Pill button with label only
 */
export const Pill = {
	args: {
		variant: Variant.PILL,
	},
};

/**
 * Button with configurable icon
 *
 * - icon position can't be changed
 */
export const Icon = {
	args: {
		variant: Variant.ICON,
		icon: "tamagui.svg",
	},
};

/**
 * Icon position can be left or right
 */
export const Long = {
	args: {
		variant: Variant.LONG,
		icon: "tamagui.svg",
		iconPosition: Position.LEFT,
	},
};

/**
 * Tag Label position can be top or bottom
 */
export const LongInfo = {
	args: {
		variant: Variant.LONG,
		icon: "tamagui.svg",
		iconPosition: Position.LEFT,
		tagLabel: "info",
		tagPosition: Position.BOTTOM,
	},
};

/**
 * Icon position can be top or bottom
 */
export const Square = {
	args: {
		variant: Variant.SQUARE,
		icon: "tamagui.svg",
		iconPosition: Position.TOP,
	},
};

/**
 * Tag Label position can be top or bottom
 */
export const SquareInfo = {
	args: {
		variant: Variant.SQUARE,
		icon: "tamagui.svg",
		iconPosition: Position.TOP,
		tagLabel: "info",
		tagPosition: Position.BOTTOM,
	},
};

/**
 * Icon position can be left or right
 */
export const Card = {
	args: {
		variant: Variant.CARD,
		icon: "tamagui.svg",
		iconPosition: Position.LEFT,
	},
};

/**
 * Tag Label position can be top or bottom
 */
export const CardInfo = {
	args: {
		variant: Variant.CARD,
		icon: "tamagui.svg",
		iconPosition: Position.LEFT,
		tagLabel: "info",
		tagPosition: Position.BOTTOM,
	},
};

/**
 * Icon position can be top or bottom
 */
export const Tall = {
	args: {
		variant: Variant.TALL,
		icon: "tamagui.svg",
		iconPosition: Position.TOP,
	},
};

/**
 * Tag Label position can be top or bottom
 */
export const TallInfo = {
	args: {
		variant: Variant.TALL,
		icon: "tamagui.svg",
		iconPosition: Position.TOP,
		tagLabel: "info",
		tagPosition: Position.BOTTOM,
	},
};
