import { Meta } from "@storybook/react";
import Title from "./Title";

export default {
	title: "utilities/Title",
	component: Title,
	parameters: {
		componentSubtitle: "Use it for strong component labels",
	},
	argTypes: {
		label: {
			control: "text",
			description: "Label",
		},
		bg: {
			control: "boolean",
			description: "Title can have background color",
		},
	},
	args: {},
} satisfies Meta<typeof Title>;

export const Basic = {
	args: {
		label: "Strong title",
	},
};
