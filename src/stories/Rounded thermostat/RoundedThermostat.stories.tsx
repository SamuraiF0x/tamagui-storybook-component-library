import { Meta } from "@storybook/react";
import { ClimateAction, MeasuringUnit } from "../../interfaces/utilities.type";
import {
	AirVent,
	CloudSnow,
	Flame,
	Snowflake,
	Sun,
	Thermometer,
	ThermometerSnowflake,
	ThermometerSun,
	Waves,
} from "@tamagui/lucide-icons";
import RoundedThermostat from "./RoundedThermostat";

export default {
	title: "components/RoundedThermostat",
	component: RoundedThermostat,
	parameters: {
		componentSubtitle: "Display and control temperature",
	},
	argTypes: {
		minTemp: {
			control: "number",
			description: "Min temperature that can be set",
		},
		maxTemp: {
			control: "number",
			description: "Max temperature that can be set",
		},
		inputTemp: {
			control: "number",
			description: "Current room temperature",
		},
		measuringUnit: {
			control: "select",
			options: { Celsius: MeasuringUnit.CELSIUS, Fahrenheit: MeasuringUnit.FAHRENHEIT },
			description: "Measurement unit for value label",
		},
		inputMeasuringUnit: {
			control: "select",
			options: { Celsius: MeasuringUnit.CELSIUS, Fahrenheit: MeasuringUnit.FAHRENHEIT },
			description: "Measurement unit for input/default value",
		},
		label: {
			control: "text",
			description: "Label for where you want to display and control temperature",
		},
		tagBg: {
			control: "boolean",
			description: "Tag background makes label stand out",
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
		coolingIcon: {
			control: "select",
			options: {
				Snowflake: Snowflake,
				AirVent: AirVent,
				CloudSnow: CloudSnow,
				ThermometerSnowflake: ThermometerSnowflake,
			},
			description: "Change icon (lucide icons pack)",
		},
		heatingIcon: {
			control: "select",
			options: { Flame: Flame, ThermometerSun: ThermometerSun, Sun: Sun },
			description: "Change icon (lucide icons pack)",
		},
		idleIcon: {
			control: "select",
			options: { Waves: Waves, Thermometer: Thermometer },
			description: "Change icon (lucide icons pack)",
		},
		controllable: {
			control: "boolean",
			description: "Can you control thermostat?",
		},
		climateType: {
			control: "select",
			options: ClimateAction,
			description: "In which mode is climate set?",
		},
		rangeSlider: {
			control: "boolean",
			description: "Does thermostat have isIdle range? (climate powers on when outside range)",
		},
		onTemperatureChange: {
			control: "onTemperatureChange",
			description: "Send changed temperature value",
		},
	},
	args: {
		label: "Bedroom",
		tagBg: false,
		minTemp: 15,
		maxTemp: 35,
		strokeWidth: 15,
		hideMark: false,
	},
} satisfies Meta<typeof RoundedThermostat>;

export const Range = {
	args: {
		inputTemp: 22.5,
		rangeSlider: true,
	},
};

export const Cooling = {
	args: {
		inputTemp: 22.5,
		controllable: true,
		climateType: ClimateAction.COOL,
	},
};

export const Heating = {
	args: {
		inputTemp: 18,
		controllable: true,
		climateType: ClimateAction.HEAT,
	},
};

export const Basic = {
	args: {
		tagBg: true,
		inputTemp: 28,
		hideMark: true,
	},
};

export const Fahrenheit = {
	args: {
		inputTemp: 75,
		minTemp: 59,
		maxTemp: 95,
		rangeSlider: true,
		measuringUnit: MeasuringUnit.FAHRENHEIT,
		inputMeasuringUnit: MeasuringUnit.FAHRENHEIT,
	},
};
export const CelsiusToFahrenheit = {
	args: {
		inputTemp: 22.5,
		rangeSlider: true,
		inputMeasuringUnit: MeasuringUnit.CELSIUS,
		measuringUnit: MeasuringUnit.FAHRENHEIT,
	},
};
export const FahrenheitToCelsius = {
	args: {
		inputTemp: 72.5,
		minTemp: 59,
		maxTemp: 95,
		rangeSlider: true,
		inputMeasuringUnit: MeasuringUnit.FAHRENHEIT,
		measuringUnit: MeasuringUnit.CELSIUS,
	},
};
