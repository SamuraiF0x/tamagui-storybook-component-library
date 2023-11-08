import { MeasuringUnit, Position } from "../../interfaces/utilities.type";
import { Status } from "../../interfaces/utilities.type";
import { BasicDisplayProps } from "./basicDisplay.type";
import { Lightbulb, Power, PowerOff, Timer } from "@tamagui/lucide-icons";
import { Spinner, Stack, ToggleGroup, XStack, YStack } from "tamagui";
import { BasicDisplayToggleButtonStyled } from "./BasicDisplayToggleButton.styled";
import useBasicDisplay from "./useBasicDisplay";
import ButtonTooltip from "../Button tooltip/ButtonTooltip";
import Label from "../Label/Label";
import Title from "../Title/Title";

/**
 * **Usage:** `onChange` returns `isActive: boolean` & `lampPollTime: number`
 *
 * NOTE: add `ai="center"` to parent container to disable stretch effect
 */
export default function BasicDisplay({
	label,
	loadingLabel,
	tagBg,
	status,
	active,
	delay = 500,
	lampPollTime,
	onChange,
}: BasicDisplayProps) {
	const { currentActiveButton, tooltipVisible, setTooltipVisible, passedTime, disabled, handleToggle } =
		useBasicDisplay({
			active,
			delay,
			lampPollTime,
			onChange,
		});

	return (
		<YStack
			gap={disabled || (lampPollTime && !tooltipVisible) ? "$5" : "$6"}
			p="$5"
			br="$8"
			bg="$background"
			animation="bouncy">
			<YStack ai="center" gap="$6">
				{label && <Title label={label} tagBg={tagBg} />}

				<ToggleGroup
					type="single"
					defaultValue={active}
					disableDeactivation
					space={lampPollTime ? "$7" : "$6"}
					size="$8"
					bg="$oceanBlue"
					disabled={disabled}
					onValueChange={(activeVal: "on" | "off") => handleToggle(activeVal)}>
					<BasicDisplayToggleButtonStyled
						value="on"
						bg={currentActiveButton === "on" ? "$blueTransparent" : "$background"}
						pressStyle={{ r: "$2", brw: "$4" }}
						hoverStyle={{ bg: currentActiveButton === "on" ? "$blueTransparent" : "$oceanBlue" }}
						disabled={currentActiveButton === "on"}>
						<Power color={disabled ? "$lavanda50" : undefined} />
					</BasicDisplayToggleButtonStyled>
					<BasicDisplayToggleButtonStyled
						value="off"
						bg={currentActiveButton === "off" ? "$blueTransparent" : "$background"}
						pressStyle={{ l: "$2", blw: "$4" }}
						hoverStyle={{ bg: currentActiveButton === "off" ? "$blueTransparent" : "$oceanBlue" }}
						disabled={currentActiveButton === "off"}>
						<PowerOff color={disabled ? "$lavanda50" : undefined} />
					</BasicDisplayToggleButtonStyled>
				</ToggleGroup>
			</YStack>

			<XStack ai="center" jc={lampPollTime ? "space-between" : "center"} pt={tooltipVisible && "$5"}>
				<XStack ai="center">
					{disabled && <Spinner size="large" />}
					<Stack pos="absolute" l={disabled && "$6"}>
						<Label
							label=""
							tagLabel={disabled && loadingLabel ? loadingLabel : status}
							tagIcon="circle"
							status={disabled && !loadingLabel ? Status.CONNECTING : status}
							tagPosition={Position.LEFT}
						/>
					</Stack>
				</XStack>

				{lampPollTime && (
					<ButtonTooltip
						disabled={disabled}
						icon={Lightbulb}
						extraIcon={Timer}
						status={Status.WARNING}
						tooltipPosition={Position.TOP}
						tooltipVisible={tooltipVisible}
						setTooltipVisible={setTooltipVisible}>
						<Label
							label=""
							tagLabel={
								"Turned on: " +
								passedTime.hours +
								MeasuringUnit.HOUR +
								" " +
								passedTime.minutes +
								MeasuringUnit.MINUTE +
								" " +
								passedTime.seconds +
								MeasuringUnit.SECOND
							}
							tagIcon={Timer}
							status={Status.WARNING}
						/>
					</ButtonTooltip>
				)}
			</XStack>
		</YStack>
	);
}
