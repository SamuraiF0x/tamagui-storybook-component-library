import { Align, MeasuringUnit, Orientation, Position, Size } from "../../interfaces/utilities.type";
import { ProgressProps } from "./progress.type";
import { Stack, Progress as TamaguiProgress, XStack, YStack } from "tamagui";
import { StackStyled } from "../../utilities/Stack.styled";
import useProgressMeasureValue from "./useProgressMeasureValue";
import Label from "../Label/Label";

/**
 * Custom measures must be added as strings in array, where first item is the top value
 * e.g. [100, 90, ..., 0]
 *
 */
export default function Progress({
	size = Size.TINY,
	orientation = Orientation.VERTICAL,
	label,
	labelPosition = orientation === Orientation.VERTICAL ? Position.TOP : Position.LEFT,
	tagPosition = orientation === Orientation.VERTICAL ? Position.BOTTOM : Position.RIGHT,
	measuringUnit = MeasuringUnit.VOLUME,
	measures,
	progress = 50,
}: ProgressProps) {
	const isVertical = orientation === Orientation.VERTICAL;

	const { aboveTreshold, mapValueToPercentage } = useProgressMeasureValue({ progress, measures });

	return (
		<StackStyled
			config={labelPosition}
			gap={isVertical && labelPosition === Position.TOP ? "$10" : "$5"}
			mx={isVertical && !measures && -100}
			mb={isVertical && labelPosition === Position.TOP && "$2"}
			mt={isVertical && labelPosition === Position.BOTTOM ? "$9" : 0}>
			<XStack h={isVertical ? "$10" : undefined} mr={isVertical && measures && -95}>
				{isVertical && measures && (
					<YStack jc="space-between" mt={-100} mr={-85} ai="flex-end">
						{measures?.map((item, id) => (
							<Stack key={id}>
								<Label label="" tagLabel={item} />
							</Stack>
						))}
					</YStack>
				)}
				<TamaguiProgress
					size={size}
					h="$5"
					w="$5"
					rotate={isVertical ? "-90deg" : undefined}
					mb={isVertical && labelPosition === Position.TOP && "$6"}
					boc="$lavanda50"
					bw="$0"
					bg="$bgTop"
					value={mapValueToPercentage(progress)}>
					<TamaguiProgress.Indicator bg={aboveTreshold ? "$error" : "$accent"} animation="bouncy" />
				</TamaguiProgress>
			</XStack>

			<Label
				label={label ?? ""}
				tagLabel={progress + measuringUnit}
				tagPosition={tagPosition}
				tagAlign={Align.CENTER}
				tagBg
			/>
		</StackStyled>
	);
}
