import { CurrentProgressMarkProps } from "./circularProgress.type";
import { tokens } from "../../../tamagui.config";
import Circle from "./Circle";

export default function CurrentTempMark({
	currentProgressMark,
	uniqueGradientId,
	reduction,
	center,
	strokeWidth,
	markSize,
}: CurrentProgressMarkProps) {
	const circlesConfig = [
		{
			color: uniqueGradientId,
			trackSize: strokeWidth - 2.5,
			radiusOffset: strokeWidth - 3,
		},
		{
			color: tokens.color.beige.val,
			trackSize: (strokeWidth - 2.5) / 2,
			radiusOffset: strokeWidth - 3,
		},
		{
			color: uniqueGradientId,
			trackSize: strokeWidth - 2.5,
			radiusOffset: -(strokeWidth - 3),
		},
		{
			color: tokens.color.beige.val,
			trackSize: (strokeWidth - 2.5) / 2,
			radiusOffset: -(strokeWidth - 3),
		},
	];

	return (
		<>
			{circlesConfig.map((config, id) => (
				<Circle
					key={id}
					isMark
					color={config.color}
					center={center}
					reduction={reduction}
					strokeWidth={strokeWidth}
					markSize={markSize}
					radiusOffset={config.radiusOffset}
					progress={currentProgressMark}
					trackSize={config.trackSize}
				/>
			))}
		</>
	);
}
