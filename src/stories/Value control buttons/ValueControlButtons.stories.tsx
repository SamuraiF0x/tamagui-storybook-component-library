import { Meta } from "@storybook/react";
import { ValueControlIconType } from "./valueControlButtons.type";
import { Dot, VolumeX } from "@tamagui/lucide-icons";
import ValueControlButtons from "./ValueControlButtons";

export default {
	title: "utilities/ValueControlButtons",
	component: ValueControlButtons,
	parameters: {
		componentSubtitle: "Control slider or progress with control buttons",
	},
	argTypes: {
		label: {
			control: "text",
			description: "Display value",
		},
		maxValue: {
			control: "number",
			description: "Maximum value for the counter (from 0 to maxValue)",
		},
		iconSizedLabel: {
			control: "boolean",
			description: "Hide action button (middle button)",
		},
		iconType: {
			control: "select",
			options: ValueControlIconType,
			description: "Button icon type",
		},
		actionIcon: {
			control: "select",
			options: { VolumeX: VolumeX, Dot: Dot },
			description: "Button icon",
		},
		actionButton: {
			control: "boolean",
			description: "Hide action button (middle button)",
		},
		step: {
			control: "number",
			description: "Change value by this number value",
		},
		delay: {
			control: "number",
			description: "Speed up value change by adjusting delay value",
		},
		storeLastValue: {
			control: "boolean",
			description: "Restorable last state after mute",
		},
		continueFromLastValue: {
			control: "boolean",
			description: "Restorable last state after mute, on value change",
		},
		inputValue: {
			control: "number",
			description: "Volume of audio",
		},
		onValueChange: {
			control: "onValueChange",
			description: "Change value on press",
		},
	},
	args: {},
} satisfies Meta<typeof ValueControlButtons>;

export const Basic = {
	args: {
		step: 5,
		delay: 5,
		inputValue: 75,
	},
};

/**
 * Without action button (middle button)
 */
export const ControlButtons = {
	args: {
		step: 5,
		delay: 5,
		inputValue: 75,
		actionButton: false,
	},
};

/**
 * Show value
 */
export const Value = {
	args: {
		step: 5,
		delay: 5,
		inputValue: 75,
		label: true,
	},
};
