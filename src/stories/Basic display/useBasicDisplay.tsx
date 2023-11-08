import { useEffect, useState } from "react";
import { BasicDisplayHookProps } from "./basicDisplay.type";
import useTooltip from "../Tooltip/useTooltip";
import useLampPollTime from "./useLampPollTime";

export default function useBasicDisplay({ active = "off", delay, lampPollTime, onChange }: BasicDisplayHookProps) {
	const [currentActiveButton, setCurrentActiveButton] = useState(active);
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		setDisabled(true);

		const timer = setTimeout(() => setDisabled(false), delay);

		return () => clearTimeout(timer);
	}, [delay, currentActiveButton]);

	const { passedTime, msPassedTime } = useLampPollTime({ currentActiveButton, initialTime: lampPollTime });

	const { tooltipVisible, setTooltipVisible } = useTooltip(3000);

	useEffect(() => {
		const isActive = currentActiveButton === "on" ? true : false;
		onChange(isActive, msPassedTime);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentActiveButton, msPassedTime]);

	const handleToggle = (val: "on" | "off") => {
		setCurrentActiveButton(val);
		setTooltipVisible(false);
	};

	useEffect(() => {
		handleToggle(active);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active]);

	return { currentActiveButton, tooltipVisible, setTooltipVisible, passedTime, disabled, handleToggle };
}
