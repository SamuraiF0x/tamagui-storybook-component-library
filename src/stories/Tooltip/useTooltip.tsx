import { useEffect, useState } from "react";

/**
 * `delay?: number`
 */
export default function useTooltip(delay?: number) {
	const [tooltipVisible, setTooltipVisible] = useState(false);

	useEffect(() => {
		if (tooltipVisible) {
			const timer = setTimeout(() => setTooltipVisible(false), delay);

			return () => clearTimeout(timer);
		}
	}, [delay, tooltipVisible]);

	return { tooltipVisible, setTooltipVisible };
}
