import { MeasuringUnit } from "../../interfaces/utilities.type";

interface StrokeProps {
	strokeWidth: number;
	markSize: number;
}

interface ProgressProps {
	center: number;
	reduction: number;
	trackSize?: number;
}

export interface CurrentProgressMarkProps extends StrokeProps, ProgressProps {
	currentProgressMark: number;
	uniqueGradientId: string;
}

export interface ProgressCircleProps extends StrokeProps, ProgressProps {
	color: string;
	radiusOffset?: number;
	isMark?: boolean;
	progress?: number;
}

export interface BasicCircularProgressProps extends Partial<StrokeProps> {
	hideMark?: boolean;
}

export interface CircularProgressProps extends BasicCircularProgressProps {
	currentProgressMark: number;
	higherProgress: number;
	lowerProgress?: number;
	progressLabel?: number;
	measuringUnit?: MeasuringUnit;
}
