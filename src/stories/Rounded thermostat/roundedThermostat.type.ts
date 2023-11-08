import { NamedExoticComponent } from "react";
import { ClimateAction, MeasuringUnit } from "../../interfaces/utilities.type";
import { BasicCircularProgressProps } from "../Circular progress/circularProgress.type";
import { TitleProps } from "../Title/title.type";
import { ColorTokens } from "tamagui";

interface OptionalProps {
	climateType?: ClimateAction | undefined;
	rangeSlider?: boolean;
}

export interface TempConverterProps {
	temp: number;
	measuringUnit: MeasuringUnit.CELSIUS | MeasuringUnit.FAHRENHEIT;
	inputMeasuringUnit: MeasuringUnit.CELSIUS | MeasuringUnit.FAHRENHEIT;
}

interface RequiredHandlerProps extends Omit<TempConverterProps, "temp"> {
	minTemp: number;
	maxTemp: number;
	inputTemp: number;
	coolingIcon: NamedExoticComponent;
	heatingIcon: NamedExoticComponent;
	idleIcon: NamedExoticComponent;
}

export type RoundedThermostatHandlerProps = OptionalProps & RequiredHandlerProps;

export interface ClimateProps {
	action: ClimateAction | undefined;
	icon: NamedExoticComponent;
	color: ColorTokens;
}

interface BasicThermostat {
	controllable?: false;
	climateType: ClimateAction;
	rangeSlider?: false;
}

interface RequiredClimateTypeProps {
	controllable: true;
	climateType: ClimateAction;
	rangeSlider?: never;
}

interface RangeClimateTypeProps {
	controllable?: never;
	climateType?: never;
	rangeSlider: true;
}

type ClimateTypeControlProps = RangeClimateTypeProps | RequiredClimateTypeProps | BasicThermostat;

interface BasicProps extends TitleProps, BasicCircularProgressProps, Partial<RequiredHandlerProps> {
	onTemperatureChange: (climateAction: ClimateAction | undefined) => void;
}

export type RoundedThermostatProps = BasicProps & ClimateTypeControlProps;
