import { useState } from "react";
import { MeasuringUnit, Status } from "./interfaces/utilities.type";
import config from "../tamagui.config";
import { Cloud, HdmiPort, Tv } from "@tamagui/lucide-icons";
import { TamaguiProvider, Theme, XStack } from "tamagui";
import AdvancedDisplay from "./stories/Advanced display/AdvancedDisplay";
import BasicDisplay from "./stories/Basic display/BasicDisplay";
import ColorPicker from "./stories/Color picker/ColorPicker";
import RoundedThermostat from "./stories/Rounded thermostat/RoundedThermostat";
import FullscreenWrapper from "./utilities/FullscreenWrapper";
import SwitchTheme from "./utilities/SwitchTheme";

const modeIndicator = "Streaming";

const dropdownItems = [
	{ name: "HDMI", icon: HdmiPort },
	{ name: "Channel", icon: Tv },
	{ name: "Netflix", icon: Cloud },
	{ name: "Storybook", icon: "storybook.svg" },
	{ name: "Typescript", icon: "typescript.svg" },
];

function App() {
	const [theme, setTheme] = useState("dark");

	return (
		<TamaguiProvider config={config}>
			<Theme name={theme === "dark" ? "dark" : "light"}>
				<FullscreenWrapper>
					<XStack ai="center" gap="$4">
						<BasicDisplay
							label="Lamp"
							status={Status.SUCCESS}
							lampPollTime={9350000}
							onChange={(val, time) => console.log(val, time)}
						/>

						<AdvancedDisplay
							label="TV - Mark"
							status={Status.SUCCESS}
							modeIndicator={modeIndicator}
							dropdownItems={dropdownItems}
							onVolume={(val) => console.log(val)}
							onSource={(val) => console.log(val)}
							onDPadPress={(val) => console.log(val)}
						/>
					</XStack>

					<XStack ai="center" gap="$4">
						<ColorPicker label="Night lamp" onColorPicked={() => {}} onBrightness={() => {}} />

						<RoundedThermostat
							inputTemp={72.5}
							inputMeasuringUnit={MeasuringUnit.FAHRENHEIT}
							label="Fahrenheit to Celsius"
							rangeSlider
							measuringUnit={MeasuringUnit.CELSIUS}
							onTemperatureChange={(val) => console.log(val)}
						/>
					</XStack>

					<SwitchTheme theme={theme} setTheme={setTheme} />
				</FullscreenWrapper>
			</Theme>
		</TamaguiProvider>
	);
}

export default App;
