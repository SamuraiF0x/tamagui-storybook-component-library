import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

export interface KeypadValueProps {
	onEnter: (pressedKeys: string) => void;
}

export default function useKeypad({ onEnter }: KeypadValueProps) {
	const [pressedKeys, setPressedKeys] = useState<string[]>([]);

	const debouncedKeys = useDebounce(pressedKeys, 50);

	const handleKeyPress = (value: string) => {
		if (pressedKeys.length < 36) setPressedKeys([...debouncedKeys, value]);
	};

	const clear = () => {
		setPressedKeys([]);
	};

	const deleteLast = () => {
		setPressedKeys(debouncedKeys.slice(0, -1));
	};

	const enter = () => {
		const combinedKeys = pressedKeys.join("");
		onEnter(combinedKeys);
	};

	return { pressedKeys, clear, deleteLast, enter, handleKeyPress };
}
