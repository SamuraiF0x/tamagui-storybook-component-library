import { useEffect, useState } from "react";

export interface ProgressMeasureValueProps {
	measures?: string[];
	progress: number;
}

export default function useProgressMeasureValue({ progress, measures }: ProgressMeasureValueProps) {
	const [aboveTreshold, setAboveTreshold] = useState(false);

	const minValue = measures ? parseFloat(measures[measures.length - 1]) : 0;
	const maxValue = measures ? parseFloat(measures[0]) : 100;

	useEffect(() => {
		setAboveTreshold(progress > maxValue);
	}, [maxValue, progress]);

	const mapValueToPercentage = (inputValue: number) => {
		const percentage = ((inputValue - minValue) / (maxValue - minValue)) * 100;

		// Making sure the percentage stays within the 0-100 range
		return Math.min(100, Math.max(0, percentage));
	};

	return { aboveTreshold, mapValueToPercentage };
}
