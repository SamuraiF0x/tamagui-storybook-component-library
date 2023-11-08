import { includeUnionKeys } from "../../interfaces/missingKeys.type";
import { MeasuringUnit, Orientation, Position, Size } from "../../interfaces/utilities.type";
import { LabelProps } from "../Label/label.type";
import { ProgressMeasureValueProps } from "./useProgressMeasureValue";

export interface BasicProps extends ProgressMeasureValueProps {
	size?: Size.TINY | Size.SMALL;
	orientation?: Orientation;
	measuringUnit?: MeasuringUnit;
}

interface VerticalProps extends BasicProps {
	orientation?: Orientation.VERTICAL;
	labelPosition?: Position.TOP | Position.BOTTOM;
}

interface HorizontalProps extends BasicProps {
	orientation: Orientation.HORIZONTAL;
	labelPosition?: Position;
	measures?: never;
}

export type ProgressProps = includeUnionKeys<(VerticalProps | HorizontalProps) & Partial<LabelProps>>;
