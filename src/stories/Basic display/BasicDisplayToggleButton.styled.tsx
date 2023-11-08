import { ToggleGroup, styled } from "tamagui";

export const BasicDisplayToggleButtonStyled = styled(ToggleGroup.Item, {
	unstyled: true,

	value: "off",

	ai: "center",
	jc: "center",
	w: "$7",
	h: "$7",

	bw: "$1",
	boc: "$blueTransparent",
	bg: "$background",

	cursor: "pointer",

	animation: "bouncy",
	pressStyle: { scale: 0.9 },

	variants: {
		active: {
			true: {
				value: "on",
				bg: "$blueTransparent",
				pressStyle: { bg: "$blueTransparent", scale: 1 },
				hoverStyle: { bg: "$blueTransparent" },
				focusStyle: { bg: "$blueTransparent" },
			},
			false: {
				value: "off",
				bg: "$background",
				pressStyle: { bg: "$blueTransparent", scale: 0.9 },
				hoverStyle: { bg: "$oceanBlue" },
				focusStyle: { bg: "$background" },
			},
		},
	},
});
