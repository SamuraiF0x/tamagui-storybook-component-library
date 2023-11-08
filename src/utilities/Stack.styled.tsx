import { GetProps, Stack, styled } from "tamagui";

/**
 * **Usage:**
 *
 * Stack with interchangeable orientations: `bottom`, `top`, `left` or `right`
 */
export const StackStyled = styled(Stack, {
	ai: "center",
	jc: "center",
	gap: "$2",

	variants: {
		config: {
			bottom: {
				flexDirection: "column",
				jc: "center",
			},
			top: {
				flexDirection: "column-reverse",
				jc: "center",
			},
			left: {
				flexDirection: "row-reverse",
				jc: "space-between",
			},
			right: {
				flexDirection: "row",
				jc: "space-between",
			},
		},
	} as const,
});

export type StackProps = GetProps<typeof StackStyled>;
