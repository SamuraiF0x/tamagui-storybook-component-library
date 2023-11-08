import { NamedExoticComponent } from "react";
import { partialExceptKey } from "../../interfaces/partialExceptKey.type";
import { Status } from "../../interfaces/utilities.type";
import { DPadProps } from "../DPad/DPad.type";
import { TitleProps } from "../Title/title.type";
import { ValueControlButtonsHookProps } from "../Value control buttons/useValue";

export interface AdvancedDisplayHookProps {
	status: Status;
	inputSource?: string;
	dropdownItems: { name: string; icon: NamedExoticComponent | string }[];
	onVolume: (volume: number) => void;
	onSource: (src: string) => void;
}

export interface AdvancedDisplayProps
	extends Partial<TitleProps>,
		Pick<ValueControlButtonsHookProps, "storeLastValue" | "continueFromLastValue">,
		partialExceptKey<DPadProps, "onDPadPress">,
		AdvancedDisplayHookProps {
	modeIndicator: string;
}
