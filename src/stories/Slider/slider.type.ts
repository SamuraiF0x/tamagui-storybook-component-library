import { StateMachineInput } from "@rive-app/react-canvas";
import { includeUnionKeys } from "../../interfaces/missingKeys.type";
import { MeasuringUnit, Orientation, Position } from "../../interfaces/utilities.type";
import { Status } from "../../interfaces/utilities.type";
import { LabelProps } from "../Label/label.type";
import { TooltipProps } from "../Tooltip/tooltip.type";

interface BasicThumbProps extends Partial<TooltipProps> {
	measuringUnit?: MeasuringUnit;
	status?: Status;
	icon?: string;
}

export interface ThumbProps extends BasicThumbProps {
	index: number;
	value: number[];
	disabled?: boolean;
	handleAnim?: (anim: StateMachineInput | null) => void;
}

interface BasicProps extends BasicThumbProps {
	min?: number;
	max?: number;
	step?: number;
	size?: number;
	orientation?: Orientation;
	labelPosition?: Position;
	disabled?: boolean;
	visible?: boolean;
	inputValue?: number;
	onSlide: (value: number[]) => void;
}

interface VerticalProps extends BasicProps {
	orientation?: Orientation.VERTICAL;
	tooltipPosition?: Position.LEFT | Position.RIGHT;
}

interface HorizontalLabelTopProps extends BasicProps {
	orientation: Orientation.HORIZONTAL;
	labelPosition?: Position.TOP;
	tooltipPosition?: Position.BOTTOM;
}
interface HorizontalLabelBottomProps extends BasicProps {
	orientation: Orientation.HORIZONTAL;
	labelPosition?: Position.BOTTOM;
	tooltipPosition?: Position.TOP;
}

type HorizontalProps = HorizontalLabelTopProps | HorizontalLabelBottomProps;

interface ExtraThumbProps extends BasicProps {
	extraThumb: boolean;
	extraIcon?: string;
}

interface CircleStatusProps extends BasicProps {
	icon: "circle";
	status: Status;
}

export type SliderProps = includeUnionKeys<
	(VerticalProps | HorizontalProps | ExtraThumbProps | CircleStatusProps) & Partial<LabelProps>
>;
