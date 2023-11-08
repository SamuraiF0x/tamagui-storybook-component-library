import { useEffect, useState } from "react";
import { ClimateAction } from "../../interfaces/utilities.type";
import { ClimateProps, RoundedThermostatHandlerProps } from "./roundedThermostat.type";
import mapTemperature from "./roundedThermostat.helper";
import useTempConverter from "./useTempConverter";

export default function useRoundedThermostat({
	measuringUnit,
	inputMeasuringUnit,
	minTemp,
	maxTemp,
	inputTemp,
	climateType,
	rangeSlider,
	coolingIcon,
	heatingIcon,
	idleIcon,
}: RoundedThermostatHandlerProps) {
	minTemp = useTempConverter({ measuringUnit, inputMeasuringUnit, temp: minTemp });
	maxTemp = useTempConverter({ measuringUnit, inputMeasuringUnit, temp: maxTemp });
	inputTemp = useTempConverter({ measuringUnit, inputMeasuringUnit, temp: inputTemp });

	const oneTemp = 1;
	const oneTempInPerc = 100 / (maxTemp - minTemp);

	const currentPerc = mapTemperature(inputTemp, minTemp, maxTemp, 0, 100);

	const [higherPerc, setHigherTempPerc] = useState<number>(currentPerc + 2.5 * oneTempInPerc);
	const [lowerPerc, setLowerTempPerc] = useState<number>(currentPerc - 2.5 * oneTempInPerc);

	const higherTemp = mapTemperature(higherPerc, 0, 100, minTemp, maxTemp);
	const lowerTemp = mapTemperature(lowerPerc, 0, 100, minTemp, maxTemp);

	const tooClose = higherTemp - lowerTemp <= oneTemp / 2;
	const maxLimitReached = higherTemp >= maxTemp;
	const minLimitReached = lowerTemp <= minTemp;

	const handleHigherTempChange = (temp: number) => {
		if (tooClose && !minLimitReached && rangeSlider) {
			setLowerTempPerc(temp - oneTempInPerc);
		} else if (minLimitReached && tooClose) {
			setHigherTempPerc(temp + oneTempInPerc);
		} else setHigherTempPerc(temp);
	};

	const handleLowerTempChange = (temp: number) => {
		if (tooClose && !maxLimitReached) {
			setHigherTempPerc(temp + oneTempInPerc);
		} else if (maxLimitReached && tooClose) {
			setLowerTempPerc(temp - oneTempInPerc);
		} else setLowerTempPerc(temp);
	};

	const [startCooling, setStartCooling] = useState<boolean>(false);
	const [startHeating, setStartHeating] = useState<boolean>(false);

	useEffect(() => {
		switch (climateType) {
			case ClimateAction.COOL:
				setStartCooling(currentPerc > higherPerc);
				break;
			case ClimateAction.HEAT:
				if (rangeSlider) setStartHeating(currentPerc < lowerPerc);
				else setStartHeating(currentPerc < higherPerc);
				break;
			case undefined:
				setStartCooling(currentPerc > higherPerc);
				setStartHeating(currentPerc < lowerPerc);
				break;
			default:
				setStartCooling(false);
		}
	}, [climateType, currentPerc, higherPerc, lowerPerc, rangeSlider]);

	const [climate, setClimate] = useState<ClimateProps>({
		action: undefined,
		icon: idleIcon,
		color: "$lavanda",
	});

	useEffect(() => {
		switch (true) {
			case startCooling:
				setClimate({ action: ClimateAction.COOL, icon: coolingIcon, color: "$blue" });
				break;
			case startHeating:
				setClimate({ action: ClimateAction.HEAT, icon: heatingIcon, color: "$red" });
				break;
			default:
				setClimate({ action: undefined, icon: idleIcon, color: "$lavanda" });
		}
	}, [coolingIcon, heatingIcon, idleIcon, startCooling, startHeating]);

	return {
		handleHigherTempChange,
		handleLowerTempChange,
		climate,
		temp: {
			currentTemp: parseFloat(inputTemp.toFixed(1)),
			higherTemp: parseFloat(higherTemp.toFixed(1)),
			lowerTemp: parseFloat(lowerTemp.toFixed(1)),
		},
		perc: { currentPerc, higherPerc, lowerPerc },
	};
}
