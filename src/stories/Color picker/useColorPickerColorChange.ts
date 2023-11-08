import { useCallback, useState } from "react";

export default function useColorPickerColorChange(inputColor: string) {
	const [color, setColor] = useState(inputColor);

	const handleColorChange = useCallback(
		(
			e: MouseEvent | TouchEvent,
			mousePos: { x: number; y: number },
			canvas: HTMLCanvasElement,
			ctx: CanvasRenderingContext2D | null
		) => {
			if (ctx) {
				let clientX, clientY;

				if (e instanceof MouseEvent) {
					clientX = e.clientX;
					clientY = e.clientY;
				} else if (e instanceof TouchEvent) {
					// Access touch event properties
					clientX = e.touches[0].clientX;
					clientY = e.touches[0].clientY;
				}

				if (clientX !== undefined && clientY !== undefined) {
					mousePos.x = clientX - canvas.getBoundingClientRect().left;
					mousePos.y = clientY - canvas.getBoundingClientRect().top;

					// Get the color at the clicked position
					const pixel = ctx.getImageData(mousePos.x, mousePos.y, 1, 1);
					const [r, g, b, a] = pixel.data;

					// Output the color (RGBA values)
					setColor(`rgba(${r}, ${g}, ${b}, ${a / 255})`);
				}
			}
		},
		[]
	);

	return { color, handleColorChange };
}
