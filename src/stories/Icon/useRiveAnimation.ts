import { useEffect, useState } from "react";
import { StateMachineInput } from "@rive-app/react-canvas";
import { useDebounce } from "@uidotdev/usehooks";

interface RiveAnimationProps {
	value?: number | number[];
	isDebounce?: boolean;
	debounceDelay?: number;
}

export default function useRiveAnimation({
	value = undefined,
	isDebounce = false,
	debounceDelay = 200,
}: RiveAnimationProps) {
	const [anim, setAnim] = useState<StateMachineInput | null>(null);

	const handleAnim = (anim: StateMachineInput | null) => {
		setAnim(anim);
	};

	const fireAnim = !isDebounce && anim?.fire();

	const debouncedAnimation = useDebounce(value, debounceDelay);

	useEffect(() => {
		if (isDebounce && debouncedAnimation) anim?.fire();
	}, [anim, debouncedAnimation, isDebounce]);

	return {
		fireAnim,
		handleAnim,
	};
}
