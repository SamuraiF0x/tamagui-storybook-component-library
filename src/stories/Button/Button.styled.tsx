// import { tokens } from "../../tamagui.config";
import { Size } from "../../interfaces/utilities.type";
import { Button, GetProps, styled } from "tamagui";

const { TINY, SMALL, MEDIUM, BIG, LARGE } = Size;

export const ButtonStyled = styled(Button, {
	bw: "$2",

	size: BIG,
	maw: BIG,

	// style: {
	// 	background: `linear-gradient(95deg,
	// 		${variableToString(tokens.color.blue)} 1%,
	// 		${variableToString(tokens.color.blue1)} 50%,
	// 		${variableToString(tokens.color.blue2)} 100%)`,
	// },

	animation: "medium",
	hoverStyle: { scale: 0.975 },
	pressStyle: { scale: 0.95 },
	enterStyle: { scale: 0, o: 0 },

	variants: {
		config: {
			basic: {
				size: BIG,
				h: BIG,
				w: BIG,
				px: BIG,
				maw: BIG,
			},
			pill: {
				h: TINY,
				px: SMALL,
			},
			icon_only: {
				size: TINY,
				px: TINY,
				py: TINY,
				w: TINY,
				maw: TINY,
				mah: TINY,
			},
			long: {
				size: LARGE,
				space: MEDIUM,
				px: LARGE,
				py: TINY,
				maw: LARGE,
				mah: TINY,
			},
			square: {
				size: MEDIUM,
				px: MEDIUM,
				py: MEDIUM,
				maw: MEDIUM,
				mah: MEDIUM,
			},
			switch_square: {
				size: MEDIUM,
				px: MEDIUM,
				py: MEDIUM,
				maw: MEDIUM,
				mah: MEDIUM,
			},
			card: {
				size: LARGE,
				space: MEDIUM,
				px: LARGE,
				py: SMALL,
				maw: LARGE,
				mah: SMALL,
			},
			switch_card: {
				size: LARGE,
				space: MEDIUM,
				px: LARGE,
				py: SMALL,
				maw: LARGE,
				mah: SMALL,
			},
			tall: {
				size: SMALL,
				px: SMALL,
				py: BIG,
				w: SMALL,
				h: LARGE,
				maw: SMALL,
				mah: LARGE,
			},
			switch_tall: {
				size: MEDIUM,
				px: MEDIUM,
				py: LARGE,
				w: MEDIUM,
				h: LARGE,
				maw: MEDIUM,
				mah: LARGE,
			},
			switch_tall_card: {
				size: BIG,
				px: BIG,
				py: LARGE,
				w: BIG,
				h: LARGE,
				maw: BIG,
				mah: LARGE,
				bw: 0,
			},
		},
		circular: {
			true: {
				size: BIG,
				space: BIG,
				px: BIG,
				py: BIG,
				w: BIG,
				maw: BIG,
				mah: BIG,
			},
		},
		disabled: {
			true: {
				bw: "$1",
				bs: "dashed",
				boc: "$lavanda",
				o: 0.5,
				hoverStyle: { scale: 1, bg: "$background", boc: "$lavanda" },
				pressStyle: { scale: 1, bg: "$background", boc: "$lavanda" },
			},
		},
	} as const,
});

export type ButtonProps = GetProps<typeof ButtonStyled>;
