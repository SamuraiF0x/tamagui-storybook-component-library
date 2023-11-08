import { NamedExoticComponent } from "react";
import { ValueControlButtonsHookProps } from "./useValue";

export enum ValueControlIconType {
	ADDITION,
	POSITION,
	SOUND,
}

export interface ValueControlIconTypeProps {
	iconType: ValueControlIconType;
	actionIcon: NamedExoticComponent;
}

export interface ValueControlButtonsProps
	extends ValueControlButtonsHookProps,
		Partial<ValueControlIconTypeProps> {
	actionButton?: boolean;
	iconSizedLabel?: boolean;
	label?: string | boolean;
	onValueChange: (value: number) => void;
}
