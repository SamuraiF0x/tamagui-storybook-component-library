import { useState } from "react";
import { Position } from "../../interfaces/utilities.type";
import { ButtonProps, Variant } from "./button.type";
import { Stack, XStack, YStack } from "tamagui";
import { ButtonStyled } from "./Button.styled";
import {
	centerContent,
	defaultIconPosition,
	defaultTagAlign,
	defaultTagPosition,
	elevateContent,
	fullscreenContent,
} from "./button.helper";
import useRiveAnimation from "../Icon/useRiveAnimation";
import Icon from "../Icon/Icon";
import Label from "../Label/Label";
import Switch from "../Switch/Switch";

const { LEFT, RIGHT, TOP, BOTTOM } = Position;
const { ICON, SWITCH_SQUARE, SWITCH_CARD, SWITCH_TALL, SWITCH_TALL_CARD } = Variant;

/**
 * - There are 6 main action button configurations and 5 switch button configurations.
 *
 * Button has 8 props of which `label` and `onPress` are required, other are required per-variant-base.
 *
 * ### Variants
 *
 * #### Basic:
 * - accepts `label` and `onPress` only
 *
 * #### Icon:
 * - the only variant accepting `circular`
 *
 * #### Long & Card:
 * - `iconPosition` can be `LEFT` or `RIGHT`
 * - `tagPosition` can be `TOP` or `BOTTOM`
 *
 * #### Sqaure & Tall:
 * - `iconPosition`  can be `TOP` or `BOTTOM`
 * - `tagPosition` can be `TOP` or `BOTTOM`
 *
 * #### Switch Card:
 * - `iconPosition`  can be `TOP` or `BOTTOM`
 * - `tagPosition` can be `LEFT` or `RIGHT`
 *
 * #### Switch Square:
 * - `iconPosition`  can be `TOP` or `BOTTOM`
 * - `tagPosition` can be `TOP` or `BOTTOM`
 *
 * #### Switch Tall:
 * - `iconPosition`  can be `TOP`
 * - `tagPosition` can be `TOP` or `BOTTOM`
 *
 * #### Switch Tall Card:
 * - `iconPosition`  can be `RIGHT`
 * - `tagPosition` can be `TOP` or `BOTTOM`
 *
 */
export default function Button({
	variant = Variant.BASIC,
	circular = false,
	icon = undefined,
	iconSize = 30,
	iconPosition = defaultIconPosition(variant),
	label = "Button",
	tagLabel = undefined,
	tagPosition = defaultTagPosition(variant),
	tagAlign = defaultTagAlign(variant),
	tagIcon,
	status,
	tagBg,
	selectable = false,
	disabled = false,
	visible = true,
	onPress,
}: ButtonProps) {
	const isIconVariant = variant === ICON;

	const [checked, setChecked] = useState(false);
	const [selected, setSelected] = useState(false);

	const { fireAnim, handleAnim } = useRiveAnimation({});

	const handlePress = () => {
		fireAnim;
		setChecked(!checked);
		onPress();
		setSelected(!selected);
	};

	return (
		<>
			{visible && (
				<YStack ai="center" space="$3">
					<ButtonStyled
						config={variant}
						disabled={disabled}
						elevate={selectable && selected && elevateContent(variant)}
						circular={isIconVariant && circular}
						icon={
							iconPosition === LEFT && !isIconVariant ? (
								<Icon icon={icon} iconSize={iconSize} triggerAnim={handleAnim} />
							) : undefined
						}
						iconAfter={
							iconPosition === RIGHT && !isIconVariant ? (
								<Icon icon={icon} iconSize={iconSize} triggerAnim={handleAnim} />
							) : undefined
						}
						onPress={handlePress}>
						<YStack
							ai={centerContent(variant)}
							jc="space-around"
							px={
								variant === SWITCH_SQUARE ||
								variant === SWITCH_CARD ||
								variant === SWITCH_TALL_CARD
									? "$4"
									: 0
							}
							pr={variant === SWITCH_TALL_CARD ? 0 : undefined}
							fullscreen={fullscreenContent(variant)}>
							{(iconPosition === TOP || isIconVariant || variant === SWITCH_TALL) && (
								<XStack ai="center" jc="space-between">
									<Icon icon={icon} iconSize={iconSize} triggerAnim={handleAnim} />
									{(variant === SWITCH_SQUARE || variant === SWITCH_CARD) && (
										<Switch checked={checked} disabled={disabled} status={status} />
									)}
								</XStack>
							)}

							{!isIconVariant && (
								<Label
									label={label}
									tagLabel={tagLabel}
									tagPosition={tagPosition}
									tagAlign={tagAlign}
									tagIcon={tagIcon}
									status={status}
									tagBg={tagBg}
									triggerAnim={handleAnim}
								/>
							)}

							{iconPosition === BOTTOM && !isIconVariant && (
								<XStack
									ai={variant === SWITCH_TALL_CARD ? "flex-end" : "center"}
									jc="space-between"
									fd={variant === SWITCH_TALL_CARD ? "row-reverse" : undefined}
									overflow="hidden">
									<Stack maw="50%">
										<Icon
											icon={icon}
											iconSize={variant === SWITCH_TALL_CARD ? 120 : iconSize}
											triggerAnim={handleAnim}
										/>
									</Stack>
									{(variant === SWITCH_SQUARE ||
										variant === SWITCH_CARD ||
										variant === SWITCH_TALL_CARD) && (
										<Switch checked={checked} disabled={disabled} status={status} />
									)}
								</XStack>
							)}

							{variant === SWITCH_TALL && (
								<Stack pos="absolute" b={-20}>
									<Switch checked={checked} disabled={disabled} status={status} />
								</Stack>
							)}
						</YStack>
					</ButtonStyled>
					{isIconVariant && <Label label={label} />}
				</YStack>
			)}
		</>
	);
}
