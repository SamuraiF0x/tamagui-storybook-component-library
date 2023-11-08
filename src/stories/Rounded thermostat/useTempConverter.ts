import { MeasuringUnit } from "../../interfaces/utilities.type";
import { TempConverterProps } from "./roundedThermostat.type";

export default function useTempConverter({ measuringUnit, inputMeasuringUnit, temp }: TempConverterProps) {
	// convert Celsius to Fahrenheit
	if (measuringUnit === MeasuringUnit.FAHRENHEIT && inputMeasuringUnit === MeasuringUnit.CELSIUS)
		return temp * (9 / 5) + 32;
	// convert Fahrenheit to Celsius
	else if (measuringUnit === MeasuringUnit.CELSIUS && inputMeasuringUnit === MeasuringUnit.FAHRENHEIT)
		return (temp - 32) * (5 / 9);
	// do nothing
	else return temp;
}
