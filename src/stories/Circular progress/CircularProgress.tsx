import { useState } from "react";
import { CircularProgressProps } from "./circularProgress.type";
import { tokens } from "../../../tamagui.config";
import { variableToString } from "tamagui";
import Circle from "./Circle";
import CurrentTempMark from "./CurrentTempMark";

/**
 * **Usage:** *(percentage)*
 *
 * - `progress: number` & `currentProgressMark: number` *(range between 0 and 100)*
 * - `progressLabel: number` *(different then 0-100)*
 */
export default function CircularProgress({
	currentProgressMark,
	higherProgress,
	lowerProgress,
	progressLabel = currentProgressMark,
	measuringUnit,
	strokeWidth = 15,
	markSize = strokeWidth + 10,
	hideMark = false,
}: CircularProgressProps) {
	const [uniqueGradientId] = useState(() => Math.random().toString());

	const gradient = [
		{ stop: 0, color: tokens.color.red.val },
		{ stop: 1, color: tokens.color.blue.val },
	];

	const reduction = 0.4;
	const width = 300;
	const center = width / 2;
	const height = width - width * (reduction / 1.3) || center + center * Math.cos(reduction * Math.PI);

	return (
		<svg viewBox={`0 0 ${width} ${height}`} style={{ display: "block", width: "100%" }}>
			<defs>
				<linearGradient id={"gradient" + uniqueGradientId}>
					{gradient.map(({ stop, color }) => (
						<stop key={stop} offset={`${stop * 100}%`} stopColor={color} />
					))}
				</linearGradient>
			</defs>

			{/* //* bg track */}
			<Circle
				color={uniqueGradientId}
				center={center}
				reduction={reduction}
				strokeWidth={strokeWidth}
				trackSize={strokeWidth + 2}
				markSize={markSize}
			/>

			<Circle
				color={tokens.color.spaceBlue2.val}
				center={center}
				reduction={reduction}
				strokeWidth={strokeWidth}
				markSize={markSize}
			/>

			{currentProgressMark && !hideMark && (
				//* currentProgress mark
				<CurrentTempMark
					uniqueGradientId={uniqueGradientId}
					reduction={reduction}
					center={center}
					strokeWidth={strokeWidth}
					markSize={markSize}
					currentProgressMark={currentProgressMark}
				/>
			)}

			{/* //* progress or higherProgress track */}
			<Circle
				color={uniqueGradientId}
				center={center}
				reduction={reduction}
				strokeWidth={strokeWidth}
				markSize={markSize}
				progress={higherProgress}
			/>

			{lowerProgress && (
				//* lowerProgress track
				<Circle
					color={tokens.color.spaceBlue2.val}
					center={center}
					reduction={reduction}
					strokeWidth={strokeWidth}
					markSize={markSize}
					progress={lowerProgress}
				/>
			)}

			{!hideMark && (
				//* higherProgress mark (inner and outer circle)
				<>
					<Circle
						isMark
						color={uniqueGradientId}
						center={center}
						reduction={reduction}
						strokeWidth={strokeWidth}
						markSize={markSize}
						trackSize={markSize}
						progress={higherProgress}
					/>

					<Circle
						isMark
						color={tokens.color.beige.val}
						center={center}
						reduction={reduction}
						strokeWidth={strokeWidth}
						markSize={markSize}
						progress={higherProgress}
					/>
				</>
			)}

			{lowerProgress !== undefined && lowerProgress >= 0 && !hideMark && (
				//* lowerProgress mark (inner and outer circle)
				<>
					<Circle
						isMark
						color={uniqueGradientId}
						center={center}
						reduction={reduction}
						strokeWidth={strokeWidth}
						markSize={markSize}
						trackSize={markSize}
						progress={lowerProgress}
					/>

					<Circle
						isMark
						color={tokens.color.beige.val}
						center={center}
						reduction={reduction}
						strokeWidth={strokeWidth}
						markSize={markSize}
						progress={lowerProgress}
					/>
				</>
			)}

			<text
				x={center}
				y={center - reduction * 5.5}
				textAnchor="middle"
				fontSize="30"
				fill={variableToString(tokens.color.beige)}
				fontFamily="Anuphan"
				fontWeight="bold">
				{progressLabel + (measuringUnit ?? "")}
			</text>
		</svg>
	);
}
