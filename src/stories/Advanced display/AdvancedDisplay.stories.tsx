import { Meta } from "@storybook/react";
import { Status } from "../../interfaces/utilities.type";
import { Cloud, HdmiPort, Tv } from "@tamagui/lucide-icons";
import AdvancedDisplay from "./AdvancedDisplay";

const modeIndicator = "Streaming";

const dropdownItems = [
	{ name: "HDMI", icon: HdmiPort },
	{ name: "Channel", icon: Tv },
	{ name: "Netflix", icon: Cloud },
	{ name: "Storybook", icon: "storybook.svg" },
	{ name: "Typescript", icon: "typescript.svg" },
];

export default {
	title: "components/AdvancedDisplay",
	component: AdvancedDisplay,
	parameters: {
		componentSubtitle: "Advanced display control panel",
	},
	argTypes: {
		label: {
			control: "text",
			description: "Label for advanced display",
		},
		tagBg: {
			control: "boolean",
			description: "Tag background makes label stand out",
		},
		status: {
			control: "select",
			options: Status,
			description: "Indicator status",
		},
		modeIndicator: {
			control: "text",
			description:
				"Indicates the current mode of the device (e.g., TV, DVD, streaming), helping users keep track of the active function.",
		},
		inputSource: {
			control: "text",
			description:
				"Displays the current channel or input source, allowing users to see what they are watching or using.",
		},
		dropdownItems: {
			control: "select",
			description: "Dropdown items",
		},
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
		storeLastValue: {
			control: "boolean",
			description: "Restorable last state after mute",
		},
		continueFromLastValue: {
			control: "boolean",
			description: "Restorable last state after mute, on value change",
		},
		onVolume: {
			action: "onVolume",
			description:
				"Control the volume level of the audio output device (e.g., a TV or a smart speaker). Sends current volume (number) to parent",
		},
		onSource: {
			action: "onSource",
			description: "Navigate through TV channels or input sources. Sends current source (string) to parent.",
		},
		onDPadPress: {
			action: "onDPadPress",
			description:
				"These include arrows (up, down, left, right) for navigating menus/content & OK button to confirm selections. Sends current action (Position) to parent",
		},
	},
	args: {
		label: "TV - Mark",
		tagBg: false,
		inputValueX: 50,
		inputValueY: 50,
		step: 2,
		delay: 25,
	},
} satisfies Meta<typeof AdvancedDisplay>;

export const Basic = {
	args: {
		status: Status.CONNECTING,
		modeIndicator: modeIndicator,
		dropdownItems: dropdownItems,
	},
};
