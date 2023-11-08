import { Position } from "../../interfaces/utilities.type";

export interface DPadProps {
	styled: boolean;
	inputValueX: number;
	inputValueY: number;
	step: number;
	delay: number;
	onDPadPress: (params: {
		DPadPressed: Position | "center" | undefined;
		valueX: number;
		valueY: number;
	}) => void;
}
