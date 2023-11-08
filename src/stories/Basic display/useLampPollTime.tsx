import { useEffect, useState } from "react";
import getTimeFormat from "./basicDisplay.helper";

interface PassedTimeProps {
	hours: number;
	minutes: number;
	seconds: number;
}

interface LampPollTimeProps {
	currentActiveButton: string;
	initialTime?: number;
}

export default function useLampPollTime({ currentActiveButton, initialTime = 0 }: LampPollTimeProps) {
	const startTime = new Date();

	const { h: initialHours, m: initialMinutes, s: initialSeconds } = getTimeFormat(initialTime);

	const [passedTime, setPassedTime] = useState<PassedTimeProps>({
		hours: initialHours,
		minutes: initialMinutes,
		seconds: initialSeconds,
	});

	const [msPassedTime, setMsPassedTime] = useState<number>(initialTime);

	const updatePassedTime = () => {
		const now = new Date();
		const timeDiff = now.getTime() - startTime.getTime();
		const { h, m, s } = getTimeFormat(timeDiff);

		const hours = passedTime.hours + h;
		const minutes = passedTime.minutes + m;
		const seconds = passedTime.seconds + s;

		currentActiveButton === "on" && initialTime && setPassedTime({ hours, minutes, seconds });

		// Calculate time in milliseconds
		const timeInMilliseconds = hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;

		currentActiveButton === "on" && initialTime && setMsPassedTime(timeInMilliseconds);
	};

	useEffect(() => {
		updatePassedTime(); // Initial update

		const interval = setInterval(updatePassedTime, 1000); // Update every second

		return () => {
			clearInterval(interval); // Clean up the interval on unmount
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentActiveButton]);

	return { passedTime, msPassedTime };
}
