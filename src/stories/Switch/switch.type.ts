import { Status } from "../../interfaces/utilities.type";

export interface SwitchProps {
	size?: string | number;
	checked?: boolean;
	disabled?: boolean;
	visible?: boolean;
	status?: Status | undefined;
}
