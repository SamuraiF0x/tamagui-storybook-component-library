import { useState } from "react";
import { Settings, X } from "@tamagui/lucide-icons";
import {
	Adapt,
	AnimatePresence,
	Button,
	Dialog,
	Fieldset,
	Input,
	Label,
	Paragraph,
	Sheet,
	TooltipSimple,
	Unspaced,
	XStack,
} from "tamagui";

// TODO fill with options & fix style

export default function DisplaySettings({ tooltipVisible }: { tooltipVisible: boolean }) {
	const [open, setOpen] = useState(false);

	return (
		<Dialog
			modal
			onOpenChange={(open) => {
				setOpen(open);
			}}>
			<AnimatePresence>
				{!tooltipVisible && (
					<Dialog.Trigger asChild>
						<Button
							key="settings button"
							p="$3"
							h="100%"
							icon={Settings}
							scaleIcon={2}
							color="$accent"
							bg="$bgTop"
							boc="$blueTransparent"
							animation="bouncy"
							pressStyle={{ scale: 0.9 }}
							enterStyle={{ mr: 150, o: 0, scale: 0 }}
							exitStyle={{ mr: 150, o: 0, scale: 0 }}
							onPress={() => setOpen(!open)}
						/>
					</Dialog.Trigger>
				)}
			</AnimatePresence>
			<Adapt when="sm" platform="touch">
				<Sheet animation="medium" zIndex={200000} modal dismissOnSnapToBottom>
					<Sheet.Frame padding="$4" gap="$4">
						<Adapt.Contents />
					</Sheet.Frame>

					<Sheet.Overlay animation="bouncy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
				</Sheet>
			</Adapt>
			<Dialog.Portal>
				<Dialog.Overlay
					key="overlay"
					animation="fast"
					opacity={0.5}
					enterStyle={{ opacity: 0 }}
					exitStyle={{ opacity: 0 }}
				/>
				<Dialog.Content
					bordered
					elevate
					key="content"
					animateOnly={["transform", "opacity"]}
					animation={[
						"fast",
						{
							opacity: {
								overshootClamping: true,
							},
						},
					]}
					enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
					exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
					gap="$4">
					<Dialog.Title>Settings</Dialog.Title>

					<Dialog.Description>Change display settings</Dialog.Description>

					<Fieldset gap="$4" horizontal>
						<Label width={160} justifyContent="flex-end" htmlFor="name">
							TV
						</Label>

						<Input flex={1} id="name" defaultValue="HDMI" />
					</Fieldset>

					<Fieldset gap="$4" horizontal>
						<Label width={160} justifyContent="flex-end" htmlFor="username">
							<TooltipSimple label="Pick your favorite" placement="bottom-start">
								<Paragraph>Source</Paragraph>
							</TooltipSimple>
						</Label>

						{/* <SelectDemoItem /> */}
					</Fieldset>
					<XStack alignSelf="flex-end" gap="$4">
						<Dialog.Close displayWhenAdapted asChild>
							<Button aria-label="Close">Save changes</Button>
						</Dialog.Close>
					</XStack>
					<Unspaced>
						<Dialog.Close asChild>
							<Button position="absolute" top="$3" right="$3" size="$6" circular icon={X} />
						</Dialog.Close>
					</Unspaced>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog>
	);
}
