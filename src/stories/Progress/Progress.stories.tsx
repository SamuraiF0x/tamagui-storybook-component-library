import { Meta } from "@storybook/react";
import { MeasuringUnit, Orientation, Position, Size } from "../../interfaces/utilities.type";
import { percentageMeasures, volumeLevelMeasures } from "./progress.helper";
import Progress from "./Progress";

export default {
	title: "components/Progress",
	component: Progress,
	parameters: {
		componentSubtitle: "Display completion status in percentages or custom values",
	},
	argTypes: {
		size: {
			control: "select",
			options: { Tiny: Size.TINY, Small: Size.SMALL },
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
		measures: {
			control: "select",
			options: { "Volume levels": volumeLevelMeasures, Percentage: percentageMeasures },
			description: "Tag position around label",
		},
		measuringUnit: {
			control: "select",
			options: MeasuringUnit,
			description: "Measurement unit for value",
		},

		progress: {},
	},
	args: {
		size: Size.TINY,
	},
} satisfies Meta<typeof Progress>;

/**
 * Basic
 */
export const Basic = {
	args: {
		progress: 65,
	},
};

/**
 * Basic percentage measures
 */
export const Measures = {
	args: {
		measures: percentageMeasures,
		progress: 65,
	},
};

/**
 * Measures with label
 */
export const VolumeLevels = {
	args: {
		label: "Volume treshold",
		measures: volumeLevelMeasures,
		measuringUnit: MeasuringUnit.VOLUME,
		progress: 0,
	},
};

/**
 * If the progress value is above max value in measure
 */
export const AboveTreshold = {
	args: {
		label: "Volume treshold",
		labelPosition: Position.BOTTOM,
		measures: volumeLevelMeasures,
		measuringUnit: MeasuringUnit.VOLUME,
		progress: 75,
	},
};

/**
 * Basic horizontal progress
 */
export const Horizontal = {
	args: {
		orientation: Orientation.HORIZONTAL,
		progress: 75,
	},
};

/**
 * Horizontal progress with label positioned to the left
 */
export const HorizontalLabel = {
	args: {
		label: "Volume treshold",
		orientation: Orientation.HORIZONTAL,
		labelPosition: Position.LEFT,
		progress: 75,
	},
};

/**
 * Horizontal progress with label positioned above
 */
export const HorizontalTopLabel = {
	args: {
		label: "Volume treshold",
		orientation: Orientation.HORIZONTAL,
		labelPosition: Position.TOP,
		progress: 75,
	},
};
