import { includeUnionKeys } from "../../interfaces/missingKeys.type";
import { Align, Position } from "../../interfaces/utilities.type";
import { TagProps } from "../Tag/tag.type";

interface BasicProps extends Partial<TagProps> {
	label: string;
	tagPosition?: Position;
	tagAlign?: Align;
}

export type LabelProps = includeUnionKeys<BasicProps>;
