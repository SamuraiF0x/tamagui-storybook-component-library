import { Meta } from "@storybook/react";
import { Status } from "../../interfaces/utilities.type";
import Keypad from "./Keypad";

export default {
	title: "components/Keypad",
	component: Keypad,
	parameters: {
		componentSubtitle:
			"Keypad with 'clear' and 'enter' action buttons (optional delete button) & optional secure input",
	},
	argTypes: {
		circular: {
			control: "boolean",
			description: "Buttons can be circular",
		},
		strongBg: {
			control: "boolean",
			options: Status,
			description: "Add strong color background to action buttons",
		},
		secure: {
			control: "boolean",
			description: "Hide password behind ****",
		},
		deleteEnabled: {
			control: "boolean",
			description: "Adds delete last key button",
		},
		onEnter: {
			control: "onEnter",
			description: "Sends entered keys to parent",
		},
	},
	args: {},
} satisfies Meta<typeof Keypad>;

/**
 * Fully featured keypad
 */
export const FullyFeatured = {
	args: {
		deleteEnabled: true,
	},
};

/**
 * Basic keypad
 */
export const Basic = {
	args: {
		circular: false,
		strongBg: false,
	},
};

/**
 * Circular keypads with strong color background action buttons
 */
export const StrongCircular = {
	args: {},
};

/**
 * Circular keypads with secure displayed keys
 */
export const SecureCircular = {
	args: {
		secure: true,
		strongBg: false,
	},
};
