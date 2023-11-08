import { GetProps, XStack, styled } from "tamagui";

export const TagStyled = styled(XStack, {
	ai: "center",
	jc: "center",
	gap: "$2",

	variants: {
		config: {
			true: {
				p: "$2",
				br: "$3",
				// bg: "$placeholderColor",
				bw: "$1",
				boc: "$placeholderColor",
			},
		},
	} as const,
});

export type TagProps = GetProps<typeof TagStyled>;
