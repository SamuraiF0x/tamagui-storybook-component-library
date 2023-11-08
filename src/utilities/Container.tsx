import { ReactNode } from "react";
import { Stack } from "tamagui";

export default function Container({ ...props }: { children: ReactNode }) {
	return (
		<Stack ai="center" px="$6" py="$5" gap="$5" br="$10" bg="$background">
			{props.children}
		</Stack>
	);
}
