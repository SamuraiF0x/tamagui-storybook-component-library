import { useEffect, useState } from "react";
import { ValueControlIconType, ValueControlIconTypeProps } from "./valueControlButtons.type";
import { ChevronDown, ChevronUp, Minus, Plus, Volume1, Volume2, VolumeX } from "@tamagui/lucide-icons";

export default function useIconType({ iconType, actionIcon }: ValueControlIconTypeProps) {
	const [icon, setIcon] = useState({ add: ChevronUp, sub: ChevronDown, action: actionIcon });

	useEffect(() => {
		switch (iconType) {
			case ValueControlIconType.POSITION:
				setIcon({ add: ChevronUp, sub: ChevronDown, action: actionIcon });
				break;
			case ValueControlIconType.ADDITION:
				setIcon({ add: Plus, sub: Minus, action: actionIcon });
				break;
			case ValueControlIconType.SOUND:
				setIcon({ add: Volume2, sub: Volume1, action: VolumeX });
				break;
			default:
				break;
		}
	}, [actionIcon, iconType]);

	return icon;
}
