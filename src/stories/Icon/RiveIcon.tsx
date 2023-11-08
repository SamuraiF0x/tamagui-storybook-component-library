import { useEffect } from "react";
import { StateMachineInput, useRive, useStateMachineInput } from "@rive-app/react-canvas";

interface RiveProps {
	icon: string | undefined;
	triggerAnim?: (anim: StateMachineInput | null) => void;
}

export default function RiveIcon({ icon, triggerAnim }: RiveProps) {
	const { rive, RiveComponent } = useRive({
		src: icon,
		stateMachines: "Basic State Machine",
		autoplay: true,
	});

	// TODO delete comment
	// if (rive) console.log(rive.contents);

	const handleAnim = useStateMachineInput(rive, "Basic State Machine", "Switch");

	useEffect(() => {
		if (triggerAnim && handleAnim) {
			triggerAnim(handleAnim);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [triggerAnim]);

	return <RiveComponent />;
}
