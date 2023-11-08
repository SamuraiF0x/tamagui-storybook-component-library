import { TitleProps } from "../Title/title.type";
import { ValueControlIconTypeProps } from "../Value control buttons/valueControlButtons.type";
import { ValueControlButtonsHookProps } from "../Value control buttons/useValue";

export interface AudioControlProps
	extends TitleProps,
		ValueControlButtonsHookProps,
		Partial<Pick<ValueControlIconTypeProps, "iconType">> {
	volumeMeasures?: boolean;
	audioLevel?: number;
	audioLevelMeasures?: string[];
}
