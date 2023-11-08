import { useEffect } from "react";
import { MeasuringUnit } from "../../interfaces/utilities.type";
import { RoundedThermostatProps } from "./roundedThermostat.type";
import { Flame, Snowflake, Waves } from "@tamagui/lucide-icons";
import { Button, Stack, XStack, YStack } from "tamagui";
import useRoundedThermostat from "./useRoundedThermostat";
import CircularProgress from "../Circular progress/CircularProgress";
import Title from "../Title/Title";
import ValueControlButtons from "../Value control buttons/ValueControlButtons";

/**
 * *Defaults:*
 *
 * `measuringUnit` = `MeasuringUnit.CELSIUS`
 *
 * `inputMeasuringUnit` = `MeasuringUnit.CELSIUS`
 */
export default function RoundedThermostat({
	label,
	measuringUnit = MeasuringUnit.CELSIUS,
	inputMeasuringUnit = MeasuringUnit.CELSIUS,
	tagBg,
	minTemp = inputMeasuringUnit === MeasuringUnit.CELSIUS ? 15 : 59,
	maxTemp = inputMeasuringUnit === MeasuringUnit.CELSIUS ? 35 : 95,
	inputTemp = inputMeasuringUnit === MeasuringUnit.CELSIUS ? 22 : 72.5,
	strokeWidth = 15,
	markSize = strokeWidth + 10,
	coolingIcon = Snowflake,
	heatingIcon = Flame,
	idleIcon = Waves,
	controllable,
	rangeSlider,
	hideMark = controllable || rangeSlider ? false : true,
	climateType,
	onTemperatureChange,
}: RoundedThermostatProps) {
	const {
		handleHigherTempChange,
		handleLowerTempChange,
		climate: { action, icon, color },
		temp: { currentTemp, higherTemp, lowerTemp },
		perc: { currentPerc, higherPerc, lowerPerc },
	} = useRoundedThermostat({
		inputMeasuringUnit,
		measuringUnit,
		minTemp,
		maxTemp,
		inputTemp,
		climateType,
		rangeSlider,
		coolingIcon,
		heatingIcon,
		idleIcon,
	});

	useEffect(() => {
		onTemperatureChange(action);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [action]);

	return (
		<YStack ai="center" jc="center" px="$6" py="$5" gap="$3" br="$10" bg="$background">
			{label && <Title label={label} tagBg={tagBg} />}

			<XStack ai="center" jc="center" gap="$5">
				{rangeSlider && (
					<ValueControlButtons
						label={lowerTemp.toString() + measuringUnit}
						step={2.5}
						delay={50}
						inputValue={lowerPerc}
						onValueChange={(temp: number) => handleLowerTempChange(temp)}
					/>
				)}

				<Stack ai="center" jc="center">
					<CircularProgress
						currentProgressMark={currentPerc}
						higherProgress={hideMark ? currentPerc : higherPerc}
						lowerProgress={rangeSlider ? lowerPerc : undefined}
						progressLabel={currentTemp}
						measuringUnit={measuringUnit}
						strokeWidth={strokeWidth}
						markSize={markSize}
						hideMark={hideMark}
					/>

					<Button
						disabled
						icon={icon}
						scaleIcon={2}
						color={color}
						mb="$6"
						style={{ position: "absolute" }}
					/>
				</Stack>

				{(controllable || rangeSlider) && (
					<ValueControlButtons
						label={higherTemp.toString() + measuringUnit}
						step={2.5}
						delay={50}
						inputValue={higherPerc}
						onValueChange={(temp: number) => handleHigherTempChange(temp)}
					/>
				)}
			</XStack>
		</YStack>
	);
}
