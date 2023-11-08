import { Meta } from "@storybook/react";
import { Position, Status } from "../../interfaces/utilities.type";
import { Lightbulb, Timer } from "@tamagui/lucide-icons";
import Label from "../Label/Label";
import ButtonTooltip from "./ButtonTooltip";

export default {
	title: "utilities/ButtonTooltip",
	component: ButtonTooltip,
	parameters: {
		componentSubtitle: "Button with tooltip onPress where tooltip accepts any children",
	},
	argTypes: {
		disabled: {
			control: "boolean",
			description: "Is it disabled?",
		},
		icon: {
			control: "select",
			options: { Lightbulb: Lightbulb, Timer: Timer },
			description: "Button icon",
		},
		extraIcon: {
			control: "select",
			options: { Lightbulb: Lightbulb, Timer: Timer },
			description: "Extra icon for description",
		},
		status: {
			control: "select",
			options: Status,
			description: "Connection status",
		},
		tooltipPosition: {
			control: "select",
			options: Position,
			description: "Tooltip position",
		},
		tooltipVisible: {
			control: "boolean",
			description: "Is tooltip visible?",
		},
		setTooltipVisible: {
			action: "setTooltipVisible",
		},
		children: {
			control: "select",
			options: ["Label", "Dropdown"],
		},
	},
	args: {},
} satisfies Meta<typeof ButtonTooltip>;

export const Basic = {
	args: {
		status: Status.CONNECTING,
		icon: Lightbulb,
		extraIcon: Timer,
		tooltipPosition: Position.RIGHT,
		children: <Label label="" tagLabel="error" tagIcon="circle" status={Status.ERROR} />,
	},
};
