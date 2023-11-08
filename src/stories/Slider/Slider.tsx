import { useEffect, useState } from "react";
import { Align, MeasuringUnit, Orientation, Position } from "../../interfaces/utilities.type";
import { SliderProps } from "./slider.type";
import { Slider as TamaguiSlider } from "tamagui";
import { StackStyled } from "../../utilities/Stack.styled";
import useRiveAnimation from "../Icon/useRiveAnimation";
import Label from "../Label/Label";
import Thumb from "./Thumb";

// TODO add helper for default props and other terniary properties
// TODO fix Extra Thumb With Icons storybook error
export default function Slider({
	orientation = Orientation.VERTICAL,
	label,
	labelPosition = orientation === Orientation.VERTICAL ? Position.TOP : Position.LEFT,
	tagPosition = orientation === Orientation.VERTICAL ? Position.BOTTOM : Position.RIGHT,
	min = 0,
	max = 100,
	step = 1,
	size = 200,
	tooltipPosition = orientation === Orientation.VERTICAL
		? Position.LEFT
		: labelPosition === Position.TOP
		? Position.BOTTOM
		: Position.TOP,
	measuringUnit = MeasuringUnit.PERCENTAGE,
	icon = undefined,
	extraIcon = undefined,
	extraThumb = false,
	status,
	disabled = false,
	visible = true,
	inputValue = 75,
	onSlide,
}: SliderProps) {
	const [value, setValue] = useState(extraThumb ? [25, 75] : [inputValue]);

	useEffect(() => {
		setValue([inputValue]);
	}, [inputValue]);

	const onChange = (value: number[]) => {
		setValue(value);
		onSlide(value);
	};

	const { handleAnim } = useRiveAnimation({ value: value[extraThumb ? 1 : 0], isDebounce: true });
	const { handleAnim: handleExtraIconAnim } = useRiveAnimation({ value: value[0], isDebounce: true });

	return (
		<>
			{visible && (
				<StackStyled
					config={labelPosition}
					gap={orientation === Orientation.VERTICAL ? "$5" : "$6"}
					mt={
						orientation === Orientation.HORIZONTAL && labelPosition === Position.TOP
							? "$5"
							: orientation === Orientation.HORIZONTAL && labelPosition === Position.BOTTOM
							? "$7"
							: 0
					}>
					<TamaguiSlider
						size="$6"
						width={orientation === "horizontal" ? size : undefined}
						height={orientation === "vertical" ? size : undefined}
						orientation={orientation}
						value={value}
						defaultValue={value}
						min={min}
						max={max}
						step={step}
						disabled={disabled}
						onValueChange={(value) => onChange(value)}>
						<TamaguiSlider.Track>
							<TamaguiSlider.TrackActive bg="$accent" />
						</TamaguiSlider.Track>

						{extraThumb && (
							<Thumb
								index={0}
								value={value}
								icon={extraIcon}
								tooltipPosition={tooltipPosition}
								measuringUnit={measuringUnit}
								status={status}
								handleAnim={handleExtraIconAnim}
							/>
						)}

						<Thumb
							index={extraThumb ? 1 : 0}
							value={value}
							icon={icon}
							tooltipPosition={tooltipPosition}
							measuringUnit={measuringUnit}
							status={status}
							handleAnim={handleAnim}
						/>
					</TamaguiSlider>

					{label && (
						<Label
							label={label}
							tagLabel={(extraThumb ? value[0] + " - " + value[1] : value) + measuringUnit}
							tagPosition={tagPosition}
							tagAlign={Align.CENTER}
							tagBg
						/>
					)}
				</StackStyled>
			)}
		</>
	);
}
