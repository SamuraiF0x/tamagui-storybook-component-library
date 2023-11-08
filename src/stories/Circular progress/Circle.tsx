import { ProgressCircleProps } from "./circularProgress.type";
import { animations } from "../../../tamagui.config";
import { variableToString } from "tamagui";

export default function Circle({
	color,
	center,
	radiusOffset = 0,
	reduction,
	strokeWidth,
	trackSize,
	markSize,
	isMark = false,
	progress = 0,
}: ProgressCircleProps) {
	const rotate = 90 + 180 * reduction;
	const r = center - strokeWidth / 2 - markSize / 2 + radiusOffset;
	const circumference = Math.PI * r * 2;

	const offset =
		isMark || progress
			? (circumference * (100 - progress * (1 - reduction))) / 100
			: circumference * reduction;

	return (
		<circle
			id="path"
			fill="none"
			cx={center}
			cy={center}
			r={r}
			strokeWidth={trackSize ?? strokeWidth}
			strokeDasharray={isMark ? `1 ${circumference}` : circumference}
			strokeDashoffset={offset}
			stroke={color.startsWith("#") ? variableToString(color) : `url(#gradient${color})`}
			strokeLinecap="round"
			transform={`rotate(${rotate} ${center} ${center})`}
			style={{
				transition: animations.animations.bouncy,
			}}
		/>
	);
}
