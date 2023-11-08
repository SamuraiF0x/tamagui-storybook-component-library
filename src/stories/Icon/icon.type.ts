import { NamedExoticComponent } from "react";
import { StateMachineInput } from "@rive-app/react-canvas";
import { Status } from "../../interfaces/utilities.type";

export interface IconProps {
	icon: NamedExoticComponent | string | undefined;
	iconSize?: number;
	status?: Status;
	triggerAnim?: (anim: StateMachineInput | null) => void;
}
