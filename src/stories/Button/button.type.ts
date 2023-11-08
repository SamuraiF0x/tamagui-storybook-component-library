import { includeUnionKeys } from "../../interfaces/missingKeys.type";
import { Position } from "../../interfaces/utilities.type";
import { IconProps as BasicIconProps } from "../Icon/icon.type";
import { LabelProps } from "../Label/label.type";

export enum Variant {
	BASIC = "basic",
	PILL = "pill",
	ICON = "icon_only",
	LONG = "long",
	SQUARE = "square",
	CARD = "card",
	TALL = "tall",
	SWITCH_SQUARE = "switch_square",
	SWITCH_CARD = "switch_card",
	SWITCH_TALL = "switch_tall",
	SWITCH_TALL_CARD = "switch_tall_card",
}

interface RequiredProps {
	selectable?: boolean;
	disabled?: boolean;
	visible?: boolean;
	onPress: () => void;
}

interface BasicProps extends RequiredProps {
	variant?: Variant.BASIC;
}

interface PillProps extends RequiredProps {
	variant: Variant.PILL;
}

interface IconProps extends RequiredProps, BasicIconProps {
	variant: Variant.ICON;
	circular?: boolean;
}

interface LongVCardProps extends RequiredProps, BasicIconProps {
	variant: Variant.LONG | Variant.CARD;
	iconPosition?: Position.LEFT | Position.RIGHT;
	tagPosition?: Position.TOP | Position.BOTTOM;
}

interface SwitchCardProps extends RequiredProps, BasicIconProps {
	variant: Variant.SWITCH_CARD;
	iconPosition?: Position.TOP | Position.BOTTOM;
	tagPosition?: Position.LEFT | Position.RIGHT;
}

interface SquareVTallProps extends RequiredProps, BasicIconProps {
	variant: Variant.SQUARE | Variant.TALL | Variant.SWITCH_SQUARE;
	iconPosition?: Position.TOP | Position.BOTTOM;
	tagPosition?: Position.LEFT | Position.RIGHT;
}

interface SwitchSquareProps extends RequiredProps, BasicIconProps {
	variant: Variant.SWITCH_SQUARE;
	iconPosition?: Position.TOP | Position.BOTTOM;
	tagPosition?: Position.TOP | Position.BOTTOM;
}

interface SwitchTallProps extends RequiredProps, BasicIconProps {
	variant: Variant.SWITCH_TALL;
	iconPosition?: Position.TOP;
	tagPosition?: Position.TOP | Position.BOTTOM;
}

interface SwitchTallCardProps extends RequiredProps, BasicIconProps {
	variant: Variant.SWITCH_TALL_CARD;
	iconPosition?: Position.RIGHT;
	tagPosition?: Position.TOP | Position.BOTTOM;
}

export type ButtonProps = includeUnionKeys<
	(
		| BasicProps
		| PillProps
		| IconProps
		| LongVCardProps
		| SwitchCardProps
		| SquareVTallProps
		| SwitchSquareProps
		| SwitchTallProps
		| SwitchTallCardProps
	) &
		LabelProps
>;
