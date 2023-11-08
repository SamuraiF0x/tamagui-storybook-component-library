import { useEffect, useState } from "react";
import tinycolor from "tinycolor2";
import { BrightnessSliderProps, ColorGradientProps, ColorPickerProps } from "./colorPicker.type";
import { Sun } from "@tamagui/lucide-icons";
import { Circle, Slider, Square, Stack, XStack, YStack, ZStack } from "tamagui";
import { defaultColor } from "./colorPicker.helper";
import useColorPicker from "./useColorPicker";
import Label from "../Label/Label";
import Title from "../Title/Title";
import Tooltip from "../Tooltip/Tooltip";

const ColorGradient = ({ canvasRef, color, mousePosRef, isDragging }: ColorGradientProps) => {
	return (
		<ZStack f={1} maxWidth="$11" maxHeight="$11" width="$11">
			<Circle
				size={"$11"}
				style={{
					background:
						"conic-gradient(hsl(0deg 100% 50%), hsl(10deg 100% 50%), hsl(20deg 100% 50%), hsl(30deg 100% 50%), hsl(40deg 100% 50%), hsl(50deg 100% 50%), hsl(60deg 100% 50%), hsl(70deg 100% 50%), hsl(80deg 100% 50%), hsl(90deg 100% 50%), hsl(100deg 100% 50%), hsl(110deg 100% 50%), hsl(120deg 100% 50%), hsl(130deg 100% 50%), hsl(140deg 100% 50%), hsl(150deg 100% 50%), hsl(160deg 100% 50%), hsl(170deg 100% 50%), hsl(180deg 100% 50%), hsl(190deg 100% 50%), hsl(200deg 100% 50%), hsl(210deg 100% 50%), hsl(220deg 100% 50%), hsl(230deg 100% 50%), hsl(240deg 100% 50%), hsl(250deg 100% 50%), hsl(260deg 100% 50%), hsl(270deg 100% 50%), hsl(280deg 100% 50%), hsl(290deg 100% 50%), hsl(300deg 100% 50%), hsl(310deg 100% 50%), hsl(320deg 100% 50%), hsl(330deg 100% 50%), hsl(340deg 100% 50%), hsl(350deg 100% 50%))",
				}}
			/>
			<Circle
				size="$11"
				style={{
					background: "radial-gradient(closest-side, #fff, #000)",
					mixBlendMode: "luminosity",
				}}
				boc="$accent"
				borderStyle="solid"
			/>

			<YStack l={mousePosRef.current.x - 10} t={mousePosRef.current.y - 10}>
				{mousePosRef.current.x !== 0 && (
					<Circle size="$5" bg={color} bw="$1" boc="$bgTop" scale={isDragging && 1.5} />
				)}

				<Stack l={-50} t={-75}>
					<Tooltip tooltipVisible={isDragging}>
						<XStack ai="center" p="$2" gap="$2" bg="$bgTop" br="$3">
							<Square size="$4" bg={color} br="$1" />
							<Label label={color} />
						</XStack>
					</Tooltip>
				</Stack>
			</YStack>

			<canvas ref={canvasRef} width={236} height={236} style={{ opacity: 0 }} />
		</ZStack>
	);
};

const BrightnessSlider = ({ color, onBrightness, onColorPicked }: BrightnessSliderProps) => {
	const [colorLight, setColorLight] = useState(color);

	useEffect(() => {
		const tinyColor = tinycolor(color).toHexString();
		const tinyColorLight = tinycolor(color).brighten(75).toHexString();
		setColorLight(tinyColorLight);
		onColorPicked(tinyColor);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [color]);

	return (
		<Slider
			defaultValue={[75]}
			min={0}
			max={100}
			step={1}
			orientation="vertical"
			height="$11"
			width={60}
			style={{ background: `linear-gradient(${colorLight}, ${color})` }}
			br="$7"
			onValueChange={(value) => onBrightness(value[0])}>
			<Slider.Track bg="transparent">
				<Slider.TrackActive bg="transparent" />
			</Slider.Track>
			<Slider.Thumb
				index={0}
				ai="center"
				jc="center"
				width={45}
				circular
				elevation="$3"
				shadowColor={color}
				boc={color}
				animation="bouncy"
				pressStyle={{ scale: 0.85, bg: "$bgTop", boc: color }}
				hoverStyle={{ bg: "$bgTop", boc: color }}
				focusStyle={{ bg: "$bgTop", boc: color }}>
				<Sun color={color} />
			</Slider.Thumb>
		</Slider>
	);
};

export default function ColorPicker({
	label,
	tagBg,
	color: inputColor = defaultColor.color,
	onColorPicked,
	onBrightness,
}: ColorPickerProps) {
	const { canvasRef, color, mousePosRef, isDragging } = useColorPicker(inputColor);

	return (
		<YStack ai="center" px="$6" py="$5" gap="$5" br="$10" bg="$background">
			{label && <Title label={label} tagBg={tagBg} />}

			<XStack space>
				<ColorGradient
					canvasRef={canvasRef}
					color={color}
					mousePosRef={mousePosRef}
					isDragging={isDragging}
				/>

				<BrightnessSlider color={color} onBrightness={onBrightness} onColorPicked={onColorPicked} />
			</XStack>
		</YStack>
	);
}
