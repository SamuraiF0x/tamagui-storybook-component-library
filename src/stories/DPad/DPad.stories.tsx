import { Meta } from "@storybook/react";
import DPad from "./DPad";

export default {
	title: "components/DPad",
	component: DPad,
	parameters: {
		componentSubtitle:
			"DPad with 'clear' and 'enter' action buttons (optional delete button) & optional secure input",
	},
	argTypes: {
		styled: {
			control: "boolean",
			description: "Controls the style (variant)",
		},
		inputValueX: {
			control: "number",
			description: "Controls the movemement along x-axis",
		},
		inputValueY: {
			control: "number",
			description: "Controls the movemement along y-axis",
		},
		step: {
			control: "number",
			description: "Change value by this number value",
		},
		delay: {
			control: "number",
			description: "Speed up value change by adjusting delay value",
		},
		onDPadPress: {
			control: "onDPadPress",
			description: "Sends pressed pad to parent",
		},
	},
	args: {
		inputValueX: 50,
		inputValueY: 50,
		step: 2,
		delay: 25,
	},
} satisfies Meta<typeof DPad>;

/**
 * Styled DPad
 */
export const Styled = {
	args: {},
};

/**
 * Basic DPad
 */
export const Basic = {
	args: {
		styled: false,
	},
};
