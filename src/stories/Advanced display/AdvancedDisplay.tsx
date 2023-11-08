import { MeasuringUnit, Orientation, Position } from "../../interfaces/utilities.type";
import { ValueControlIconType } from "../Value control buttons/valueControlButtons.type";
import { AdvancedDisplayProps } from "./advancedDisplay.type";
import { Tv2 } from "@tamagui/lucide-icons";
import { Stack, XStack, YStack } from "tamagui";
import useAdvancedDisplay from "./useAdvancedDisplay";
import ButtonTooltip from "../Button tooltip/ButtonTooltip";
import DPad from "../DPad/DPad";
import Dropdown from "../Dropdown/Dropdown";
import Icon from "../Icon/Icon";
import Label from "../Label/Label";
import Progress from "../Progress/Progress";
import Title from "../Title/Title";
import ValueControlButtons from "../Value control buttons/ValueControlButtons";
import DisplaySettings from "./DisplaySettings";

// TODO fix sheet (from dropdown) on top width

export default function AdvancedDisplay({
	label,
	tagBg,
	status,
	modeIndicator,
	inputSource,
	dropdownItems = [],
	styled = true,
	inputValueX = 50,
	inputValueY = 50,
	step = 2,
	delay = 50,
	storeLastValue,
	continueFromLastValue,
	onVolume,
	onSource,
	onDPadPress,
}: AdvancedDisplayProps) {
	const {
		tooltipVisible,
		setTooltipVisible,
		connectionStatusChanged,
		vol,
		srdId,
		source,
		handleVolume,
		handleDropdownOpenChange,
		handleSource,
	} = useAdvancedDisplay({ status, inputSource, dropdownItems, onVolume, onSource });

	return (
		<YStack ai="center" gap="$4" px="$6" py="$4" br="$10" bg="$background" scale={0.9}>
			<XStack ai="center" jc="space-between" w="100%">
				{label && <Title label={label} tagBg={tagBg} />}

				<XStack gap="$4">
					<DisplaySettings tooltipVisible={tooltipVisible} />

					<Stack>
						<ButtonTooltip
							disabled={false}
							icon={Tv2}
							status={status}
							tooltipPosition={Position.LEFT}
							tooltipVisible={tooltipVisible}
							setTooltipVisible={setTooltipVisible}>
							{connectionStatusChanged ? (
								<Label
									label=""
									tagLabel={connectionStatusChanged ? status : source}
									tagIcon={connectionStatusChanged ? "circle" : undefined}
									status={status}
								/>
							) : (
								<Stack m={-10}>
									<Dropdown
										triggerLabel="Source"
										triggerBg={false}
										inputValue={source}
										items={dropdownItems}
										onSelect={handleSource}
										onOpenChange={handleDropdownOpenChange}
									/>
								</Stack>
							)}
						</ButtonTooltip>
						<Stack pos="absolute" r={-5} t={-5}>
							<Icon icon="circle" iconSize={15} status={status} />
						</Stack>
					</Stack>
				</XStack>
			</XStack>

			<XStack ai="center" gap="$5">
				<Progress
					progress={vol}
					measuringUnit={MeasuringUnit.PERCENTAGE}
					tagPosition={Position.LEFT}
					orientation={Orientation.HORIZONTAL}
				/>

				<Label
					label=""
					tagLabel={modeIndicator.length > 10 ? modeIndicator.substring(0, 10) + "..." : modeIndicator}
					tagBg
				/>
			</XStack>

			<XStack ai="center" jc="space-between" w="100%">
				<ValueControlButtons
					iconType={ValueControlIconType.ADDITION}
					step={2}
					delay={5}
					storeLastValue={storeLastValue}
					continueFromLastValue={continueFromLastValue}
					onValueChange={handleVolume}
				/>

				<DPad
					styled={styled}
					inputValueX={inputValueX}
					inputValueY={inputValueY}
					step={step}
					delay={delay}
					onDPadPress={onDPadPress}
				/>

				<ValueControlButtons
					iconSizedLabel
					label="CH"
					inputValue={srdId}
					maxValue={dropdownItems.length - 1}
					step={1}
					delay={15}
					storeLastValue={false}
					continueFromLastValue={false}
					onValueChange={handleSource}
				/>
			</XStack>
		</YStack>
	);
}
