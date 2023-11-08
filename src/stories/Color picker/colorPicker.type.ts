import { TitleProps } from "../Title/title.type";
import { BasicColorPickerProps } from "./useColorPicker";

export type ColorGradientProps = Required<BasicColorPickerProps>;

type BasicColorGradientProp = Pick<BasicColorPickerProps, "color">;

interface RequiredProps {
	onBrightness: (value: number) => void;
	onColorPicked: (color: string) => void;
}
export interface BrightnessSliderProps extends RequiredProps, BasicColorGradientProp {}

export interface ColorPickerProps extends RequiredProps, Partial<BasicColorGradientProp>, TitleProps {}
