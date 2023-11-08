import { Meta } from "@storybook/react";
import { MeasuringUnit, Orientation, Position } from "../../interfaces/utilities.type";
import { Status } from "../../interfaces/utilities.type";
import Slider from "./Slider";

export default {
	title: "components/Slider",
	component: Slider,
	parameters: {
		componentSubtitle: "Control values with slider",
	},
	argTypes: {
		min: {
			control: "number",
			description: "Minimum allowed value",
		},
		max: {
			control: "number",
			description: "Maximum allowed value",
		},
		step: {
			control: "number",
			description: "Step between two values",
		},
		size: {
			control: "number",
			description: "Controls the width (horizontal) or height (vertical) of the slider",
		},
		orientation: {
			control: "select",
			options: Orientation,
			description: "Progress can be vertical (default) or horizontal",
		},
		label: {
			control: "text",
			description: "Label for slider",
		},
		labelPosition: {
			control: "select",
			options: Position,
			description: "Label position around slider track",
		},
		tagPosition: {
			control: "select",
			options: Position,
			description: "Tag position around label",
		},
		tooltipPosition: {
			control: "select",
			options: Position,
			description: "Tooltip position when dragging thumb",
		},
		measuringUnit: {
			control: "select",
			options: MeasuringUnit,
			description: "Measurement unit for value",
		},
		icon: {
			control: "select",
			options: {
				none: "",
				indicator: "circle",
				riveHamburger: "hamburger-menu.riv",
				react: "react.svg",
				storybook: "storybook.svg",
				tamagui: "tamagui.svg",
				typescript: "typescript.svg",
				vite: "vite.svg",
			},
			description: "Thumb can have icon",
		},
		extraThumb: {
			control: "boolean",
			description: "Button can have extra thumb",
		},
		extraIcon: {
			control: "select",
			options: {
				none: "",
				indicator: "circle",
				riveHamburger: "hamburger-menu.riv",
				react: "react.svg",
				storybook: "storybook.svg",
				tamagui: "tamagui.svg",
				typescript: "typescript.svg",
				vite: "vite.svg",
			},
			description: "Button can have icon on extra thumb",
		},
		status: {
			control: "select",
			options: Status,
			description: "If icon is 'circle', change status color",
		},
		inputValue: {
			control: "number",
			description: "Control slider value from outside",
		},
	},
	args: {
		size: 200,
	},
} satisfies Meta<typeof Slider>;

/**
 * Basic
 */
export const Basic = {
	args: {},
};

/**
 * Rive animation with label and tag
 */
export const HorizontalRiveLabels = {
	args: {
		orientation: Orientation.HORIZONTAL,
		icon: "hamburger-menu.riv",
		label: "Temperature",
		labelPosition: Position.LEFT,
		measuringUnit: MeasuringUnit.LIGHT_TEMP,
	},
};

/**
 * Rive animation with label and tag
 */
export const HorizontalTopLabels = {
	args: {
		orientation: Orientation.HORIZONTAL,
		min: 1200,
		max: 6500,
		icon: "tamagui.svg",
		label: "Temperature",
		labelPosition: Position.TOP,
		measuringUnit: MeasuringUnit.LIGHT_TEMP,
	},
};

/**
 * Extra thumb with icons
 */
export const ExtraThumbWithIcons = {
	args: {
		icon: "react.svg",
		extraThumb: true,
		extraIcon: "vite.svg",
		label: "Volume levels",
		labelPosition: Position.TOP,
		measuringUnit: MeasuringUnit.VOLUME,
	},
};

/**
 * Horizontal circle status
 */
export const HorizontalCircle = {
	args: {
		icon: "circle",
		orientation: "horizontal",
		status: Status.IDLE,
	},
};
