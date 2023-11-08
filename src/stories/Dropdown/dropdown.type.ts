import { NamedExoticComponent } from "react";
import { includeUnionKeys } from "../../interfaces/missingKeys.type";
import { LabelProps } from "../Label/label.type";

export interface RequiredDropdownProps {
	triggerLabel: string;
	triggerBg?: boolean;
	inputValue?: string;
	items: { name: string; icon?: NamedExoticComponent | string }[];
	onSelect: (item: string) => void;
	onOpenChange: (val: boolean) => void;
}

type DropdownLabelProps = RequiredDropdownProps & Partial<LabelProps>;

export type DropdownProps = includeUnionKeys<DropdownLabelProps>;
