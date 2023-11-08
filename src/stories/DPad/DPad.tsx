import { useEffect, useState } from "react";
import { Position } from "../../interfaces/utilities.type";
import { DPadProps } from "./DPad.type";
import { XStack, YStack } from "tamagui";
import { ButtonBorderCircleHelper } from "./ButtonBorderCircleHelper.styled";
import { DPadButtonStyled } from "./DPadButton.styled";
import useValue from "../Value control buttons/useValue";

export default function DPad({
	styled = true,
	inputValueX = 50,
	inputValueY = 50,
	step,
	delay,
	onDPadPress,
}: DPadProps) {
	const moveX = useValue({ inputValue: inputValueX, step, delay });
	const moveY = useValue({ inputValue: inputValueY, step, delay });

	const [DPadPressed, setDPadPressed] = useState<Position | "center" | undefined>(undefined);

	useEffect(() => {
		onDPadPress({ DPadPressed: DPadPressed, valueX: moveX.value, valueY: moveY.value });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [DPadPressed, moveX.value, moveY.value]);

	return (
		<YStack ai="center" scale={0.7} m={-45}>
			<XStack ai="flex-end">
				{styled && <ButtonBorderCircleHelper config={"topLeft"} />}
				<DPadButtonStyled
					config={Position.TOP}
					styled={styled}
					onPress={() => setDPadPressed(Position.TOP)}
					onPressIn={moveY.increase}
					onPressOut={moveY.stopAction}
				/>
				{styled && <ButtonBorderCircleHelper config={"topRight"} />}
			</XStack>
			<XStack>
				<DPadButtonStyled
					config={Position.LEFT}
					styled={styled}
					onPress={() => setDPadPressed(Position.LEFT)}
					onPressIn={moveX.decrease}
					onPressOut={moveX.stopAction}
				/>
				<DPadButtonStyled config={"center"} styled={styled} onPress={() => setDPadPressed("center")} />
				<DPadButtonStyled
					config={Position.RIGHT}
					styled={styled}
					onPress={() => setDPadPressed(Position.RIGHT)}
					onPressIn={moveX.increase}
					onPressOut={moveX.stopAction}
				/>
			</XStack>
			<XStack ai="flex-start">
				{styled && <ButtonBorderCircleHelper config={"bottomLeft"} />}
				<DPadButtonStyled
					config={Position.BOTTOM}
					styled={styled}
					onPress={() => setDPadPressed(Position.BOTTOM)}
					onPressIn={moveY.decrease}
					onPressOut={moveY.stopAction}
				/>
				{styled && <ButtonBorderCircleHelper config={"bottomRight"} />}
			</XStack>
		</YStack>
	);
}
