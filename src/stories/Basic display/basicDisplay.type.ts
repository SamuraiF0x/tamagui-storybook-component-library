import { includeUnionKeys } from "../../interfaces/missingKeys.type";
import { Status } from "../../interfaces/utilities.type";
import { TitleProps } from "../Title/title.type";

interface ProjectorProps {
	lampPollTime: number;
}

export interface BasicDisplayHookProps extends ProjectorProps {
	active?: "on" | "off";
	delay?: number;
	onChange: (isActive: boolean, lampPollTime: number) => void;
}

interface RequiredProps extends BasicDisplayHookProps {
	loadingLabel?: string;
	status: Status;
}

export type BasicDisplayProps = includeUnionKeys<RequiredProps & TitleProps>;
