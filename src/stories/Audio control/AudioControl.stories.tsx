import { Meta } from "@storybook/react";
import { ValueControlIconType } from "../Value control buttons/valueControlButtons.type";
import { volumeLevelMeasures } from "../Progress/progress.helper";
import AudioControl from "./AudioControl";

export default {
	title: "components/AudioControl",
	component: AudioControl,
	parameters: {
		componentSubtitle: "Control audio volume and show current volume levels in dB",
	},
	argTypes: {
		label: {
			control: "text",
			description: "Label for audio control element",
		},
		tagBg: {
			control: "boolean",
			description: "Tag background makes label stand out",
		},
		iconType: {
			control: "select",
			options: ValueControlIconType,
			description: "Button icon type",
		},
		step: {
			control: "number",
			description: "Change volume by this number value",
		},
		delay: {
			control: "number",
			description: "Speed up volume change by adjusting delay value",
		},
		volumeMeasures: {
			control: "boolean",
			description: "Show volume measures (percentage)",
		},
		audioLevel: {
			control: "number",
			description: "Realtime audio level indicator value",
		},
		audioLevelMeasures: {
			control: "select",
			options: { "Volume Level": volumeLevelMeasures },
			description: "Volume level can have custom measures",
		},
		inputValue: {
			control: "number",
			description: "Volume of audio",
		},
		storeLastValue: {
			control: "boolean",
			description: "Restorable last state after mute",
		},
		continueFromLastValue: {
			control: "boolean",
			description: "Restorable last state after mute, on value change",
		},
	},
	args: {
		tagBg: false,
		iconType: ValueControlIconType.POSITION,
	},
} satisfies Meta<typeof AudioControl>;

/**
 * Fully featured audio control
 */
export const FullyFeatured = {
	args: {
		label: "Soundbar",
		step: 5,
		delay: 5,
		volumeMeasures: true,
		audioLevel: -25,
		inputValue: 75,
	},
};

/**
 * Volume meter when over the treshold
 */
export const OverTreshold = {
	args: {
		step: 5,
		volumeMeasures: false,
		audioLevel: 75,
		inputValue: 100,
		iconType: ValueControlIconType.ADDITION,
	},
};

/**
 * Simple volume control without volume meter
 */
export const WithoutVolumeMeter = {
	args: {
		step: 5,
		volumeMeasures: false,
		tagBg: true,
	},
};

/**
 * Simple volume control with volume measures
 */
export const VolumeMeasures = {
	args: {
		step: 5,
		volumeMeasures: true,
		iconType: ValueControlIconType.SOUND,
	},
};
