import { Meta } from "@storybook/react";
import ColorPicker from "./ColorPicker";

export default {
	title: "components/ColorPicker",
	component: ColorPicker,
	parameters: {
		componentSubtitle: "Control light color and brightness",
	},
	argTypes: {
		label: {
			control: "text",
			description: "Label for color picker",
		},
		tagBg: {
			control: "boolean",
			description: "Tag background makes label stand out",
		},
		color: {
			control: "color",
			description: "Starting color on color gradient",
		},
		onBrightness: {
			control: "onBrightness",
			description: "Change the light brightness",
		},
		onColorPicked: {
			control: "onColorPicked",
			description: "Change the light color",
		},
	},
	args: {
		tagBg: false,
	},
} satisfies Meta<typeof ColorPicker>;

export const Basic = {
	args: {
		label: "Night lamp",
	},
};
