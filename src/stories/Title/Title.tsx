import { TitleProps } from "./title.type";
import { H4 } from "tamagui";

/**
 * NOTE: add `ai="center"` to parent container to disable stretch effect
 */
export default function Title({ label, tagBg = false }: TitleProps) {
	return (
		<H4
			fow="bold"
			px="$4"
			py="$3"
			br="$10"
			bg={tagBg ? "$placeholderColor" : undefined}
			boc="$placeholderColor"
			bw="$1">
			{label}
		</H4>
	);
}
