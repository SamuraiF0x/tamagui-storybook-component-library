import { NamedExoticComponent } from "react";
import { StateMachineInput } from "@rive-app/react-canvas";
import { Status } from "../../interfaces/utilities.type";

export interface TagProps {
	tagLabel: string;
	tagIcon?: NamedExoticComponent | string;
	tagBg?: boolean;
	status?: Status;
	triggerAnim?: (anim: StateMachineInput | null) => void;
}
