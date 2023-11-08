import { TagProps } from "./tag.type";
import { Paragraph } from "tamagui";
import { TagStyled } from "./Tag.styled";
import Icon from "../Icon/Icon";

export default function Tag({
	tagLabel,
	tagIcon = undefined,
	status = undefined,
	tagBg = false,
	triggerAnim,
}: TagProps) {
	return (
		<TagStyled config={tagBg}>
			{tagIcon && (
				<Icon
					icon={tagIcon}
					iconSize={tagIcon === "circle" ? 15 : 20}
					status={status}
					triggerAnim={triggerAnim}
				/>
			)}
			<Paragraph size="$2">{tagLabel}</Paragraph>
		</TagStyled>
	);
}
