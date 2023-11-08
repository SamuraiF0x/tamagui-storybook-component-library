import { Meta } from "@storybook/react";
import { Size } from "../../interfaces/utilities.type";
import { Status } from "../../interfaces/utilities.type";
import Switch from "./Switch";

export default {
	title: "utilities/Switch",
	component: Switch,
	parameters: {
		componentSubtitle: "Control between two states",
	},
	argTypes: {
		size: {
			control: "select",
			options: Size,
			description: "Switch size",
		},
		visible: {
			control: "boolean",
			description: "Is switch visible?",
		},
		disabled: {
			control: "boolean",
			description: "Is switch disabled?",
		},
		checked: {
			control: "boolean",
			description: "Is switch checked?",
		},
		status: {
			control: "select",
			options: Status,
			description: "Indicator status",
		},
	},
	args: {
		size: Size.SMALL,
		disabled: false,
		visible: true,
		checked: true,
		status: Status.IDLE,
	},
} satisfies Meta<typeof Switch>;

/**
 * Basic switch
 */
export const Basic = {
	args: {
		checked: true,
		status: Status.IDLE,
	},
};
