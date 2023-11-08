import { useEffect, useState } from "react";
import { AdvancedDisplayHookProps } from "./advancedDisplay.type";
import useTooltip from "../Tooltip/useTooltip";

export default function useAdvancedDisplay({
	status,
	inputSource,
	dropdownItems,
	onVolume,
	onSource,
}: AdvancedDisplayHookProps) {
	const { tooltipVisible, setTooltipVisible } = useTooltip(3000);

	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [connectionStatusChanged, setConnectionStatusChanged] = useState(false);
	const [vol, setVol] = useState(75);
	const [source, setSource] = useState(inputSource ?? dropdownItems[0].name.toLowerCase());

	const handleDropdownOpenChange = (val: boolean) => {
		setDropdownOpen(val);
	};

	const handleVolume = (val: number) => {
		setVol(val);
		onVolume(val);
	};

	const handleSource = (src: string | number) => {
		if (typeof src === "number") setSource(dropdownItems[src].name.toLowerCase());
		else setSource(src);
	};

	useEffect(() => {
		dropdownOpen && setTooltipVisible(true);
		!tooltipVisible && setConnectionStatusChanged(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tooltipVisible]);

	useEffect(() => {
		setTooltipVisible(true);
		setConnectionStatusChanged(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status]);

	useEffect(() => {
		setTooltipVisible(true);
		onSource(source);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [source]);

	// Function to get the position of an item in dropdownItems based on its name
	const srdId = dropdownItems.findIndex((item) => item.name.toLowerCase() === source);

	return {
		tooltipVisible,
		setTooltipVisible,
		connectionStatusChanged,
		vol,
		srdId,
		source,
		handleVolume,
		handleDropdownOpenChange,
		handleSource,
	};
}
