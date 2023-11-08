import { TamaguiButton } from "./TamaguiButton";

interface Props {
	theme: string;
	setTheme: (theme: string) => void;
}

export default function SwitchTheme({ theme, setTheme }: Props) {
	return (
		<TamaguiButton switch="bottomLeft" onPress={() => setTheme(theme === "dark" ? "light" : "dark")}>
			🌗
		</TamaguiButton>
	);
}
