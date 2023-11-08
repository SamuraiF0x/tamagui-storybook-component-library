import { useEffect } from "react";
import { ValueControlButtonsProps, ValueControlIconType } from "./valueControlButtons.type";
import { VolumeX } from "@tamagui/lucide-icons";
import { Stack, YStack } from "tamagui";
import { ValueControlButton } from "./ValueControlButton.styled";
import useIconType from "./useIconType";
import useValue from "./useValue";
import Label from "../Label/Label";

/**
 * **Usage:** *(percentage)*
 *
 * `inputValue: number` *(range between 0 and 100)*
 *
 * `onValueChange(value)` - `value: number` *(range between 0 and 100)*
 */
export default function ValueControlButtons({
	label,
	maxValue,
	iconSizedLabel = false,
	iconType = ValueControlIconType.POSITION,
	actionIcon = VolumeX,
	actionButton = true,
	step,
	delay,
	storeLastValue,
	continueFromLastValue,
	inputValue,
	onValueChange,
}: ValueControlButtonsProps) {
	const icon = useIconType({ iconType, actionIcon });

	const { value, toZero, increase, decrease, stopAction } = useValue({
		inputValue,
		maxValue,
		step,
		delay,
		storeLastValue,
		continueFromLastValue,
	});

	useEffect(() => {
		onValueChange(value);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	return (
		<YStack ai="center" jc="center" gap={iconSizedLabel ? "$5" : actionButton || label ? "$4" : "$6"}>
			<ValueControlButton config={"add"} icon={icon.add} onPressIn={increase} onPressOut={stopAction} />

			{actionButton && !label && (
				<ValueControlButton config={"action"} icon={icon.action} onPress={toZero} />
			)}

			{label && (
				<Stack py={iconSizedLabel && "$5"}>
					<Label label={label === true ? value.toString() : label.toString()} />
				</Stack>
			)}

			<ValueControlButton config={"sub"} icon={icon.sub} onPressIn={decrease} onPressOut={stopAction} />
		</YStack>
	);
}
