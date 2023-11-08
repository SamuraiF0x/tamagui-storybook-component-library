import { IconProps } from "./icon.type";
import { Button, Circle, Image, Stack } from "tamagui";
import { getStatusColor } from "./icon.helper";
import RiveIcon from "./RiveIcon";

/**
 * Icon can be LucideIcon, `.svg`, `.png` or `.riv` file or just a simple `Circle` indicator
 * - use `icon="circle" for `Circle` indicator
 * - `status` is optional prop for `Circle` indicator status
 */
export default function Icon({ icon, iconSize = icon === "circle" ? 15 : 30, status, triggerAnim }: IconProps) {
	const fileExtension = typeof icon === "string" ? icon.split(".").pop() : undefined;
	const customIcon = typeof icon === "string" ? icon : undefined;

	switch (fileExtension) {
		case "circle":
			return (
				<Circle
					size={iconSize}
					bg={getStatusColor({ status })}
					shadowColor={getStatusColor({ status })}
					shadowRadius="$3"
				/>
			);
		case "svg":
			return (
				<Image
					source={{
						uri: customIcon,
						width: iconSize,
						height: iconSize,
					}}
				/>
			);
		case "riv":
			return (
				<Stack w={iconSize} h={iconSize}>
					<RiveIcon icon={customIcon} triggerAnim={triggerAnim} />
				</Stack>
			);
		case undefined: // lucide-icons
			return (
				<Button
					disabled
					p={0}
					h="100%"
					scaleIcon={iconSize / 15}
					icon={typeof icon === "string" ? undefined : icon}
					color={getStatusColor({ status })}
					bg="#00000000"
				/>
			);

		default:
			return;
	}
}
