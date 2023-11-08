import { Meta } from "@storybook/react";
import { Status } from "../../interfaces/utilities.type";
import Icon from "./Icon";

export default {
	title: "utilities/Icon",
	component: Icon,
	parameters: {
		componentSubtitle: "",
	},
	argTypes: {
		icon: {
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
			description: "Button can have icon",
		},
		iconSize: {
			control: "number",
			description: "Is switch checked?",
		},
		status: {
			control: "select",
			options: Status,
			description: "Indicator status",
		},
	},
	args: {
		iconSize: 40,
	},
} satisfies Meta<typeof Icon>;

/**
 * Basic icon
 */
export const Basic = {
	args: {
		icon: "tamagui.svg",
	},
};

/**
 * Basic circle
 */
export const Circle = {
	args: {
		icon: "circle",
		status: Status.IDLE,
	},
};

/**
 * Rive animation
 */
export const Rive = {
	args: {
		icon: "hamburger-menu.riv",
	},
};
