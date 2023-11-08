import { useEffect, useRef, useState } from "react";
import { defaultColor } from "./colorPicker.helper";
import useColorPickerCanvas from "./useColorPickerCanvas";
import useColorPickerColorChange from "./useColorPickerColorChange";

export interface BasicColorPickerProps {
	canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
	color: string;
	mousePosRef: React.MutableRefObject<{ x: number; y: number }>;
	isDragging: boolean;
}

/**
 * TODO Uncaught ReferenceError: TouchEvent is not defined
 * handleMove useColorPicker.ts:42
 * useColorPicker useColorPicker.ts:53
 * */

export default function useColorPicker(inputColor: string): BasicColorPickerProps {
	const [isDragging, setIsDragging] = useState(false);
	const [isTouching, setIsTouching] = useState(false);
	const mousePosRef = useRef({ x: defaultColor.x, y: defaultColor.y });

	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	useColorPickerCanvas(canvasRef);
	const { color, handleColorChange } = useColorPickerColorChange(inputColor);

	useEffect(() => {
		const canvas = canvasRef.current;
		const mousePos = mousePosRef.current;
		const ctx = canvas?.getContext("2d");

		if (!canvas || !ctx) return;

		const handleStart = (e: MouseEvent | TouchEvent) => {
			setIsDragging(true);
			if (e instanceof TouchEvent) {
				setIsTouching(true);
			}
			handleColorChange(e, mousePos, canvas, ctx);
		};

		const handleMove = (e: MouseEvent | TouchEvent) => {
			// if (isDragging) {
			// 	handleColorChange(e, mousePos, canvas, ctx);
			// }

			if ((e instanceof MouseEvent && isDragging) || (e instanceof TouchEvent && isTouching)) {
				handleColorChange(e, mousePos, canvas, ctx);
			}
		};

		const handleEnd = () => {
			setIsDragging(false);
			setIsTouching(false);
		};

		canvas.addEventListener("mousedown", handleStart);
		canvas.addEventListener("mousemove", handleMove);
		canvas.addEventListener("mouseup", handleEnd);

		canvas.addEventListener("touchstart", handleStart);
		canvas.addEventListener("touchmove", handleMove);
		canvas.addEventListener("touchend", handleEnd);

		// Clean up the event listeners when the component unmounts
		return () => {
			canvas.removeEventListener("mousedown", handleStart);
			canvas.removeEventListener("mousemove", handleMove);
			canvas.removeEventListener("mouseup", handleEnd);

			canvas.removeEventListener("touchstart", handleStart);
			canvas.removeEventListener("touchmove", handleMove);
			canvas.removeEventListener("touchend", handleEnd);
		};
	}, [handleColorChange, isDragging, isTouching]);

	return { canvasRef, color, mousePosRef, isDragging };
}
