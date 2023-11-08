import { Align, Position } from "../../interfaces/utilities.type";
import { Variant } from "./button.type";

const { START } = Align;
const { LEFT, RIGHT, TOP, BOTTOM } = Position;
const { BASIC, ICON, LONG, CARD, SQUARE, TALL, SWITCH_SQUARE, SWITCH_CARD, SWITCH_TALL, SWITCH_TALL_CARD } =
	Variant;

export const defaultIconPosition = (variant: Variant | undefined) => {
	return variant === LONG || variant === CARD
		? LEFT
		: variant === SWITCH_TALL_CARD
		? BOTTOM
		: variant === SQUARE ||
		  variant === TALL ||
		  variant === SWITCH_SQUARE ||
		  variant === SWITCH_CARD ||
		  variant === SWITCH_TALL
		? TOP
		: undefined;
};

export const defaultTagPosition = (variant: Variant | undefined) => {
	return variant === LONG ||
		variant === CARD ||
		variant === SQUARE ||
		variant === TALL ||
		variant === SWITCH_SQUARE ||
		variant === SWITCH_TALL
		? BOTTOM
		: variant === SWITCH_TALL_CARD
		? TOP
		: variant === SWITCH_CARD
		? RIGHT
		: undefined;
};

export const defaultTagAlign = (variant: Variant | undefined) => {
	return variant === SWITCH_SQUARE || variant === SWITCH_TALL_CARD ? START : undefined;
};

export const elevateContent = (variant: Variant | undefined) => {
	return variant === BASIC ||
		variant === ICON ||
		variant === LONG ||
		variant === CARD ||
		variant === SQUARE ||
		variant === TALL
		? true
		: false;
};

export const fullscreenContent = (variant: Variant | undefined) => {
	return variant === TALL ||
		variant === SQUARE ||
		variant === SWITCH_SQUARE ||
		variant === SWITCH_CARD ||
		variant === SWITCH_TALL ||
		variant === SWITCH_TALL_CARD
		? true
		: false;
};

export const centerContent = (variant: Variant | undefined) => {
	return variant === LONG ||
		variant === CARD ||
		variant === SQUARE ||
		variant === TALL ||
		variant === SWITCH_TALL
		? "center"
		: undefined;
};
