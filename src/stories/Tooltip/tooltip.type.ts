import { ReactNode } from "react";
import { Position } from "../../interfaces/utilities.type";

export interface TooltipProps {
	tooltipVisible: boolean;
	tooltipPosition?: Position;
	children: ReactNode;
}
