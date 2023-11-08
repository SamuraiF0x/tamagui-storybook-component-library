import { LabelProps } from "./label.type";
import { H4 } from "tamagui";
import { StackStyled } from "../../utilities/Stack.styled";
import Tag from "../Tag/Tag";

/**
 * Tag label has 12 possible configurations
 *
 * - 4 positions: `LEFT`, `RIGHT`, `TOP` & `BOTTOM`
 * - 3 alignments: `START`, `CENTER` & `END`
 *
 * Info: add tagAlign={Align.CENTER} to disable tagBg stretch to the parent container size
 */
export default function Label({
	label,
	tagLabel,
	tagPosition,
	tagAlign,
	tagIcon,
	tagBg,
	status,
	triggerAnim,
}: LabelProps) {
	return (
		<StackStyled config={tagPosition} ai={tagAlign}>
			{label !== "" && (
				<H4 textAlign="left" ai="center" jc="center" flexWrap="wrap">
					{label}
				</H4>
			)}
			{tagLabel && (
				<Tag
					tagIcon={tagIcon}
					tagLabel={tagLabel}
					status={status}
					tagBg={tagBg}
					triggerAnim={triggerAnim}
				/>
			)}
		</StackStyled>
	);
}
