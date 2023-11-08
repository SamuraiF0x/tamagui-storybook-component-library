import { useState } from "react";
import { MeasuringUnit } from "../../interfaces/utilities.type";
import { ValueControlIconType } from "../Value control buttons/valueControlButtons.type";
import { AudioControlProps } from "./audioControl.type";
import { Stack, XStack, YStack } from "tamagui";
import { percentageMeasures, volumeLevelMeasures } from "../Progress/progress.helper";
import Progress from "../Progress/Progress";
import Title from "../Title/Title";
import ValueControlButtons from "../Value control buttons/ValueControlButtons";

export default function AudioControl({
	label,
	tagBg,
	iconType = ValueControlIconType.SOUND,
	step = 5,
	delay = 50,
	volumeMeasures = false,
	audioLevel,
	audioLevelMeasures = volumeLevelMeasures,
	inputValue = 55,
	storeLastValue,
	continueFromLastValue,
}: AudioControlProps) {
	const [volume, setVolume] = useState(inputValue);

	const handleValueChange = (value: number) => {
		setVolume(value);
	};

	return (
		<YStack ai="center" gap="$5" pt={label ? "$5" : "$6"} pb="$6" br="$10" bg="$background">
			{label && <Title label={label} tagBg={tagBg} />}

			<XStack gap="$8" px={audioLevel !== undefined ? "$6" : "$8"}>
				{audioLevel !== undefined && (
					<Progress
						label="Audio meter"
						measures={audioLevelMeasures}
						measuringUnit={MeasuringUnit.VOLUME}
						progress={audioLevel}
					/>
				)}

				<XStack gap="$6">
					<Progress
						label="Volume"
						measures={volumeMeasures ? percentageMeasures : undefined}
						measuringUnit={MeasuringUnit.PERCENTAGE}
						progress={volume}
					/>

					<Stack mt="$7">
						<ValueControlButtons
							inputValue={inputValue}
							step={step}
							delay={delay}
							iconType={iconType}
							storeLastValue={storeLastValue}
							continueFromLastValue={continueFromLastValue}
							onValueChange={handleValueChange}
						/>
					</Stack>
				</XStack>
			</XStack>
		</YStack>
	);
}
