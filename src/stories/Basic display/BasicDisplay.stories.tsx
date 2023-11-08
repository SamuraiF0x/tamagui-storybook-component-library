import { Meta } from "@storybook/react";
import { Status } from "../../interfaces/utilities.type";
import BasicDisplay from "./BasicDisplay";

export default {
	title: "components/BasicDisplay",
	component: BasicDisplay,
	parameters: {
		componentSubtitle: "Basic display control with cooldown time when switching",
	},
	argTypes: {
		label: {
			control: "text",
			description: "Label for basic display",
		},
		loadingLabel: {
			control: "text",
			description: "Label for loading spinner",
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
		active: {
			control: "select",
			options: { on: "on", off: "off" },
			description: "Default or previously stored state (`on` or `off`)",
		},
		delay: {
			control: { type: "number", step: 100 },
			description: "Label for basic display",
		},
		lampPollTime: {
			control: { type: "number", step: 60000 },
			description: "Label for basic display",
		},
		onChange: {
			control: "onChange",
			description: "Sends current value to parent",
		},
	},
	args: {
		active: "on",
		label: "Basic display",
		tagBg: false,
		delay: 3000,
	},
} satisfies Meta<typeof BasicDisplay>;

export const Basic = {
	args: {
		status: Status.CONNECTING,
		loadingLabel: "configuring",
	},
};

export const Projector = {
	args: {
		status: Status.SUCCESS,
		loadingLabel: "warming up",
		lampPollTime: 9360000,
	},
};
