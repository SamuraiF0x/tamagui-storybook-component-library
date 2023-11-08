import { Button, GetProps, styled } from "tamagui";

export const ValueControlButton = styled(Button, {
	size: "$7",
	p: "$5",
	boc: "$blueTransparent",
	bg: "$bgTop",
	scaleIcon: 1.25,

	animation: "bouncy",
	pressStyle: { scale: 0.9 },

	variants: {
		config: {
			add: {
				pressStyle: { pt: "$2", bbw: "$3" },
			},
			action: {
				pressStyle: { bbw: "$3", btw: "$3" },
			},
			sub: {
				pressStyle: { pb: "$2", btw: "$3" },
			},
		},
	} as const,
});

export type ValueControlButtonStyledProps = GetProps<typeof ValueControlButton>;
