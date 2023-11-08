import { NamedExoticComponent, ReactNode } from "react";
import { KeypadValueProps } from "./useKeypad";

export interface KeypadRowProps {
	circular: boolean;
	children: ReactNode;
}

export interface KeyButtonProps extends Partial<KeypadRowProps> {
	value: string;
	onKeypress: (value: string) => void;
}

export interface KeypadActionButtonProps {
	label?: string;
	icon?: NamedExoticComponent;
	color: string;
	strongBg: boolean;
	onAction: () => void;
}

export interface KeypadProps extends Partial<KeypadRowProps>, Partial<KeypadActionButtonProps>, KeypadValueProps {
	secure?: boolean;
	deleteEnabled?: boolean;
}
