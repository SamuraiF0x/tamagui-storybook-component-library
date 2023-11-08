import { TooltipProps } from "./tooltip.type";
import { AnimatePresence } from "tamagui";
import { TooltipStyled } from "./Tooltip.styled";

export default function Tooltip({ tooltipVisible = false, tooltipPosition, ...props }: TooltipProps) {
	return (
		<AnimatePresence>
			{tooltipVisible && (
				<TooltipStyled key="tooltip" config={tooltipPosition}>
					{props.children}
				</TooltipStyled>
			)}
		</AnimatePresence>
	);
}
