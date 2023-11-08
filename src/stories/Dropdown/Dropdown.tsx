import { Position } from "../../interfaces/utilities.type";
import { DropdownProps, RequiredDropdownProps } from "./dropdown.type";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Adapt, H4, Paragraph, Select, Sheet, XStack, YStack } from "tamagui";
import { LinearGradient } from "@tamagui/linear-gradient";
import Icon from "../Icon/Icon";
import Label from "../Label/Label";

export default function Dropdown({
	label,
	tagLabel,
	triggerLabel,
	triggerBg,
	inputValue,
	items,
	onSelect,
	onOpenChange,
}: DropdownProps) {
	return (
		<YStack gap="$3">
			{label && <Label label={label} tagLabel={tagLabel} tagPosition={Position.RIGHT} />}

			<DropdownSelect
				triggerBg={triggerBg}
				triggerLabel={triggerLabel}
				items={items}
				inputValue={inputValue}
				onSelect={onSelect}
				onOpenChange={onOpenChange}
			/>
		</YStack>
	);
}

export function DropdownSelect({
	triggerLabel,
	triggerBg,
	inputValue,
	items,
	onSelect,
	onOpenChange,
}: RequiredDropdownProps) {
	return (
		<Select
			id={triggerLabel}
			value={inputValue}
			onValueChange={onSelect}
			size="$6"
			onOpenChange={onOpenChange}>
			<Select.Trigger
				iconAfter={ChevronDown}
				px="$4"
				br="$6"
				bg={triggerBg ? "$background" : "$bgTop"}
				boc={triggerBg ? "$background" : "$placeholderColor"}>
				<XStack ai="center" gap="$3">
					<Icon
						icon={items?.find((item) => item.name.toLowerCase() === inputValue)?.icon}
						iconSize={25}
					/>
					{/* <Select.Value placeholder={triggerLabel} pb="$0" /> */}
					<Select.Value placeholder={triggerLabel} pb="$0">
						{inputValue && inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}
					</Select.Value>
				</XStack>
			</Select.Trigger>

			<Adapt when="sm" platform="touch">
				<Sheet
					modal
					snapPointsMode="fit"
					// snapPoints={[300, 200]}
					dismissOnSnapToBottom
					dismissOnOverlayPress
					animation="bouncy">
					<Sheet.Handle bg="$accent" />
					<Sheet.Frame>
						<Sheet.ScrollView>
							<Adapt.Contents />
						</Sheet.ScrollView>
					</Sheet.Frame>
					<Sheet.Overlay
						bg="$spaceBlueTransparent"
						animation="bouncy"
						enterStyle={{ opacity: 0 }}
						exitStyle={{ opacity: 0 }}
					/>
				</Sheet>
			</Adapt>

			<Select.Content zIndex={200000}>
				<Select.ScrollUpButton
					alignItems="center"
					justifyContent="center"
					position="relative"
					width="100%"
					height="$6">
					<YStack zIndex={10}>
						<ChevronUp size={20} />
					</YStack>

					<LinearGradient
						start={[0, 0]}
						end={[0, 1]}
						fullscreen
						br="$4"
						colors={["$background", "$backgroundTransparent"]}
					/>
				</Select.ScrollUpButton>

				<Select.Viewport
					minWidth={210}
					animation="medium"
					enterStyle={{ o: 0, y: -10, scale: 0 }}
					exitStyle={{ o: 0, y: 10, scale: 0 }}>
					<Select.Group px="$3">
						<Select.Label jc="center">
							<H4 fow="bold">{triggerLabel}</H4>
						</Select.Label>

						{items?.map((item, i) => {
							return (
								<Select.Item
									index={i}
									key={item.name}
									value={item.name.toLowerCase()}
									px="$4"
									br="$6">
									<XStack ai="center" gap="$4">
										<Icon icon={item.icon} iconSize={25} />
										<Select.ItemText pb="$0">
											<Paragraph>{item.name}</Paragraph>
										</Select.ItemText>
									</XStack>

									<Select.ItemIndicator marginLeft="auto">
										<Check size={16} color="$success" />
									</Select.ItemIndicator>
								</Select.Item>
							);
						})}
					</Select.Group>
				</Select.Viewport>

				<Select.ScrollDownButton
					alignItems="center"
					justifyContent="center"
					position="relative"
					width="100%"
					height="$6">
					<YStack zIndex={10}>
						<ChevronDown size={20} />
					</YStack>

					<LinearGradient
						start={[0, 0]}
						end={[0, 1]}
						fullscreen
						br="$4"
						colors={["$backgroundTransparent", "$background"]}
					/>
				</Select.ScrollDownButton>
			</Select.Content>
		</Select>
	);
}
