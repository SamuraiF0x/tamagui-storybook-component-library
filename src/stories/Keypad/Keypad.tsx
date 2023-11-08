import { KeyButtonProps, KeypadActionButtonProps, KeypadProps, KeypadRowProps } from "./keypad.type";
import { Delete } from "@tamagui/lucide-icons";
import { Button, H4, Stack, XStack, YStack } from "tamagui";
import { useLongPress } from "@uidotdev/usehooks";
import useKeypad from "./useKeypad";
import Label from "../Label/Label";

const KeypadRow = ({ circular, ...props }: KeypadRowProps) => {
	return (
		<XStack jc="space-between" gap={!circular && "$5"}>
			{props.children}
		</XStack>
	);
};

const Key = ({ value, circular, onKeypress }: KeyButtonProps) => {
	const attrs = useLongPress(() => value === "0" && onKeypress("+"), { threshold: 500 });

	return (
		//! useLongPress ts ignored
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		<Button
			size={circular ? "$7" : "$6"}
			circular={circular}
			animation="bouncy"
			pressStyle={{ scale: 0.85 }}
			onPressIn={() => onKeypress(value)}
			{...attrs}>
			<YStack jc="center">
				<Label label={value} />
				{value === "0" && <Label label="" tagLabel="+" />}
			</YStack>
		</Button>
	);
};

const ActionButton = ({ label, icon, color, strongBg, onAction }: KeypadActionButtonProps) => {
	return (
		<Button
			icon={icon}
			scaleIcon={1.5}
			px={icon && "$4"}
			color={icon && !strongBg ? color : "$bgTop"}
			bg={strongBg ? color : undefined}
			boc={color}
			themeInverse={strongBg && label === "Enter"}
			hoverStyle={{
				bg: label === "Enter" ? "$greenTransparent" : "$redTransparent",
				boc: color,
			}}
			animation="bouncy"
			pressStyle={{ scale: 0.85 }}
			onPress={onAction}>
			{label && (
				<H4 fow="bold" color={strongBg ? undefined : color}>
					{label}
				</H4>
			)}
		</Button>
	);
};

export default function Keypad({
	circular = true,
	strongBg = true,
	secure = false,
	deleteEnabled = false,
	onEnter,
}: KeypadProps) {
	const { pressedKeys, clear, deleteLast, enter, handleKeyPress } = useKeypad({ onEnter });

	const keypadValues = [
		["1", "2", "3"],
		["4", "5", "6"],
		["7", "8", "9"],
		["*", "0", "#"],
	];

	return (
		<XStack ai="flex-end" gap="$6" ml="$9">
			<YStack gap={circular ? "$2" : "$4"}>
				{keypadValues.map((rowValues, rowIndex) => (
					<KeypadRow key={rowIndex} circular={circular}>
						{rowValues.map((value, keyIndex) => (
							<Key key={keyIndex} value={value} circular={circular} onKeypress={handleKeyPress} />
						))}
					</KeypadRow>
				))}

				<XStack jc="space-between" gap="$4" mt="$3">
					{deleteEnabled && (
						<ActionButton icon={Delete} color="$error" strongBg={strongBg} onAction={deleteLast} />
					)}
					<ActionButton label="Clear" color="$error" strongBg={strongBg} onAction={clear} />
					<ActionButton
						label="Enter"
						color="$success"
						strongBg={strongBg}
						onAction={() => {
							enter();
							clear();
						}}
					/>
				</XStack>
			</YStack>

			<XStack
				ai="center"
				jc="center"
				gap="$2"
				flexWrap="wrap"
				w="$10"
				p="$3"
				mb="$1"
				bg="$background"
				br="$4">
				{pressedKeys.map((key, index) => (
					<Stack key={index} animation="bouncy" enterStyle={{ scale: 0, mb: "$1" }}>
						<Label label={""} tagLabel={secure ? "*" : key} tagBg />
					</Stack>
				))}

				{pressedKeys.length === 0 && <Label label="_ _ _ _" />}
			</XStack>
		</XStack>
	);
}
