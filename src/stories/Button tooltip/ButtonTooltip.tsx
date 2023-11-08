import { ButtonTooltipProps } from "./buttonTooltip.type";
import { Button, Stack } from "tamagui";
import Icon from "../Icon/Icon";
import Tooltip from "../Tooltip/Tooltip";

/**
 * 	**Usage:**
 *  In parent: `const { tooltipVisible, setTooltipVisible } = useTooltip(3000);`
 */
export default function ButtonTooltip({
	disabled,
	icon,
	extraIcon,
	status,
	tooltipPosition,
	tooltipVisible,
	setTooltipVisible,
	...props
}: ButtonTooltipProps) {
	return (
		<Stack f={1} ai="flex-end" jc="center">
			<Stack ai="flex-end">
				<Button
					p="$3"
					h="100%"
					icon={icon}
					scaleIcon={2}
					color={disabled ? "$placeholderColor" : "$accent"}
					bg="$bgTop"
					boc="$blueTransparent"
					disabled={disabled}
					animation="bouncy"
					pressStyle={{ scale: 0.9 }}
					onPress={() => setTooltipVisible(!tooltipVisible)}
				/>
				{extraIcon && (
					<Stack pos="absolute" m="$2">
						<Icon icon={extraIcon} iconSize={15} status={status} />
					</Stack>
				)}
			</Stack>

			<Tooltip tooltipVisible={tooltipVisible} tooltipPosition={tooltipPosition}>
				{props.children}
			</Tooltip>
		</Stack>
	);
}
