import { useState } from "react";
import { ThumbProps } from "./slider.type";
import { Slider } from "tamagui";
import Icon from "../Icon/Icon";
import Label from "../Label/Label";
import Tooltip from "../Tooltip/Tooltip";

export default function Thumb({
	icon,
	index,
	value,
	tooltipPosition,
	measuringUnit,
	status,
	disabled,
	handleAnim,
}: ThumbProps) {
	const [tooltipVisible, setTooltipVisible] = useState(false);

	return (
		<Slider.Thumb
			disabled={disabled}
			index={index}
			circular
			ai="center"
			jc="center"
			onPressIn={() => setTooltipVisible(true)}
			onPressOut={() => setTooltipVisible(false)}>
			<Tooltip tooltipVisible={tooltipVisible} tooltipPosition={tooltipPosition}>
				<Label label="" tagLabel={value ? value[index].toString() + measuringUnit : ""} />
			</Tooltip>
			<Icon icon={icon} status={status} triggerAnim={handleAnim} />
		</Slider.Thumb>
	);
}
