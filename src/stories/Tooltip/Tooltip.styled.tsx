import { GetProps, Stack, styled } from "tamagui";

export const TooltipStyled = styled(Stack, {
	pos: "absolute",
	zi: 1,
	ai: "center",
	jc: "center",
	p: "$2",
	br: "$3",
	bw: "$1",

	bg: "$bgTop",
	boc: "$placeholderColor",

	animation: "fast",
	enterStyle: { scale: 0, o: 0 },
	exitStyle: { scale: 0, o: 0 },

	variants: {
		config: {
			top: {
				b: "$6",
				mb: "$5",
				enterStyle: { scale: 0, b: "$6" },
				exitStyle: { scale: 0, o: 0, b: "$6" },
			},
			bottom: {
				t: "$6",
				mt: "$5",
				enterStyle: { scale: 0, t: "$6" },
				exitStyle: { scale: 0, o: 0, t: "$6" },
			},
			left: {
				r: "$7",
				enterStyle: { scale: 0.5, o: 0, r: "$6" },
				exitStyle: { scale: 0.5, o: 0, r: "$6" },
			},
			right: {
				l: "$7",
				enterStyle: { scale: 0.5, o: 0, l: "$6" },
				exitStyle: { scale: 0.5, o: 0, l: "$6" },
			},
		},
	} as const,
});

export type TooltipProps = GetProps<typeof TooltipStyled>;
