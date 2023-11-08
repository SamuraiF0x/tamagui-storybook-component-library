import { Meta } from "@storybook/react";
import { Position } from "../../interfaces/utilities.type";
import Label from "../Label/Label";
import Tooltip from "./Tooltip";

export default {
	title: "utilities/Tooltip",
	component: Tooltip,
	parameters: {
		componentSubtitle: "Display extra info by passing component into tooltip",
	},
	argTypes: {
		tooltipVisible: {
			control: "boolean",
			description: "Used for animating tooltip visibility",
		},
		tooltipPosition: {
			control: "select",
			options: Position,
			description: "Position of the tooltip",
		},
		children: { control: "boolean" },
	},
	args: {
		tooltipPosition: Position.LEFT,
	},
} satisfies Meta<typeof Tooltip>;

export const Basic = {
	args: {
		tooltipVisible: true,
		children: <Label label="Tooltip" />,
	},
};
