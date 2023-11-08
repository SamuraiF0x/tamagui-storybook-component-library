import { Meta } from "@storybook/react";
import { MeasuringUnit } from "../../interfaces/utilities.type";
import CircularProgress from "./CircularProgress";

export default {
	title: "utilities/CircularProgress",
	component: CircularProgress,
	parameters: {
		componentSubtitle: "Display progress in circular progress",
	},
	argTypes: {
		currentProgressMark: {
			control: "number",
			description: "Current progress value",
		},
		higherProgress: {
			control: "number",
			description: "Higher or default progress value",
		},
		lowerProgress: {
			control: "number",
			description: "Lower progress value",
		},
		progressLabel: {
			control: "number",
			description: "Progress value label",
		},
		measuringUnit: {
			control: "select",
			options: MeasuringUnit,
			description: "Measurement unit for value",
		},
		strokeWidth: {
			control: "number",
			description: "Circular progress stroke thickness",
		},
		markSize: {
			control: "number",
			description: "Size of progress ball",
		},
		hideMark: {
			control: "boolean",
			description: "Hide progress mark",
		},
	},
	args: {
		currentProgressMark: 35,
		strokeWidth: 15,
		measuringUnit: MeasuringUnit.PERCENTAGE,
	},
} satisfies Meta<typeof CircularProgress>;

export const Complete = {
	args: {
		higherProgress: 50,
		lowerProgress: 20,
	},
};

export const Basic = {
	args: {
		higherProgress: 50,
		hideMark: true,
	},
};

export const WithMark = {
	args: {
		currentProgressMark: 55,
		higherProgress: 85,
	},
};
