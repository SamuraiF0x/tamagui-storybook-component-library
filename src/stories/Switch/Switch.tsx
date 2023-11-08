import { useEffect, useState } from "react";
import { SwitchProps } from "./switch.type";
import { Switch as TamaguiSwitch } from "tamagui";
import { getStatusColor } from "../Icon/icon.helper";

export default function Switch({
	size = "$6",
	disabled = false,
	visible = true,
	status,
	checked = false,
}: SwitchProps) {
	const [isChecked, setChecked] = useState(checked || false);

	const toggleChecked = () => {
		setChecked(!isChecked);
	};

	useEffect(() => {
		setChecked(checked);
	}, [checked]);

	return (
		<TamaguiSwitch
			size={size}
			bg="$oceanBlue"
			o={visible && isChecked ? 1 : visible && !isChecked ? 0.5 : 0}
			checked={isChecked}
			disabled={disabled}
			bs={disabled ? "dashed" : undefined}
			boc={disabled ? "$spaceBlue" : undefined}
			onCheckedChange={toggleChecked}>
			<TamaguiSwitch.Thumb
				bg={getStatusColor({ status })}
				o={disabled ? 0.5 : 1}
				bs={disabled ? "dashed" : undefined}
				boc={disabled ? "$spaceBlue" : undefined}
				animation="bouncy"
			/>
		</TamaguiSwitch>
	);
}
