import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

export interface ValueControlButtonsHookProps {
	inputValue?: number;
	maxValue?: number;
	step?: number;
	delay?: number;
	storeLastValue?: boolean;
	continueFromLastValue?: boolean;
}

/**
 * **Usage:**
 *
 * `inputValue: number` *(range between 0 and 100)*
 */
export default function useValue({
	inputValue = 55,
	maxValue = 100,
	step = 5,
	delay = 100,
	storeLastValue = true,
	continueFromLastValue = true,
}: ValueControlButtonsHookProps) {
	const [action, setAction] = useState<"increase" | "decrease" | "stop" | null>(null);

	const [storedValue, setStoredValue] = useState(0);
	const [value, setValue] = useState(inputValue);
	const debouncedValue = useDebounce(value, 5);

	const setValueWithBounds = (newValue: number) => {
		const clampedValue = Math.min(maxValue, Math.max(0, newValue));
		setValue(clampedValue);
	};

	useEffect(() => {
		setValueWithBounds(inputValue);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputValue]);

	useEffect(() => {
		let intervalId: NodeJS.Timeout | null = null;

		const startSliding = () => {
			intervalId = setInterval(() => {
				if (action === "increase") {
					setValueWithBounds(debouncedValue + step);
				} else if (action === "decrease") {
					setValueWithBounds(debouncedValue - step);
				} else {
					if (intervalId) clearInterval(intervalId);
				}
			}, delay);
		};

		if (action === "increase" || action === "decrease") {
			startSliding();
		} else {
			if (intervalId) clearInterval(intervalId);
		}

		return () => {
			if (intervalId) clearInterval(intervalId);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [action, delay, step, debouncedValue]);

	const startAction = (newAction: "increase" | "decrease") => {
		if (value === 0 && continueFromLastValue) {
			setValueWithBounds(storedValue);
			const restoreLastValue = setTimeout(() => setAction(newAction), 500);
			clearTimeout(restoreLastValue);
		} else setAction(newAction);
	};

	const stopAction = () => {
		setAction("stop");
	};

	const toZero = () => {
		if (value === 0) {
			// If value is already 0, set it to the last value before toZero
			setValueWithBounds(storedValue);
		} else {
			// Set value to 0 and store the last value before toZero
			if (storeLastValue) setStoredValue(debouncedValue);
			setValueWithBounds(0);
		}
	};

	return {
		value,
		toZero,
		increase: () => startAction("increase"),
		decrease: () => startAction("decrease"),
		stopAction,
	};
}
