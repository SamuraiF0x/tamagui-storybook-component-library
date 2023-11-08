import { NamedExoticComponent, ReactNode } from "react";
import { Status } from "../../interfaces/utilities.type";
import { TooltipProps } from "../Tooltip/tooltip.type";

export interface ButtonTooltipProps extends Omit<TooltipProps, "children"> {
	disabled: boolean;
	icon: NamedExoticComponent;
	extraIcon?: NamedExoticComponent;
	status: Status;
	setTooltipVisible: (tooltipVisible: boolean) => void;
	children: ReactNode;
}
