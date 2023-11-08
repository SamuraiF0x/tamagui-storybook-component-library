import { MutableRefObject, useEffect } from "react";

export default function useColorPickerCanvas(canvasRef: MutableRefObject<HTMLCanvasElement | null>) {
	const canvas = canvasRef.current;

	useEffect(() => {
		if (canvas) {
			const halfWidth = canvas.width / 2;
			const halfHeight = canvas.height / 2;

			const borderWidth = 2;
			const radius = halfWidth - borderWidth;

			const conicalStartAngle = 30;

			const ctx = canvas.getContext("2d");

			if (ctx) {
				// Create a conical gradient
				const gradient = ctx.createConicGradient(conicalStartAngle, halfWidth, halfHeight);

				// Add color stops to the conical gradient
				for (let i = 0; i < 36; i++) {
					gradient.addColorStop(i / 36, `hsl(${i * 10}deg 100% 50%)`);
				}

				// Set the fill style to the conical gradient
				ctx.fillStyle = gradient;

				// Fill a circle with the conical gradient
				ctx.beginPath();
				ctx.arc(halfWidth, halfHeight, halfWidth, 0, Math.PI * 2);
				ctx.fill();

				// Create a new circle with a radial gradient
				const radialGradient = ctx.createRadialGradient(
					halfWidth,
					halfHeight,
					0,
					halfWidth,
					halfHeight,
					radius
				);

				// Add color stops to the radial gradient
				radialGradient.addColorStop(0, "#fff");
				radialGradient.addColorStop(1, "#000");

				// Set the fill style to the radial gradient
				ctx.fillStyle = radialGradient;
				ctx.globalCompositeOperation = "luminosity";

				// Fill a circle with the radial gradient
				ctx.beginPath();
				ctx.arc(halfWidth, halfHeight, radius, 0, Math.PI * 2);
				ctx.fill();

				// ctx.globalAlpha = 1;

				// Draw a border for the circle
				ctx.strokeStyle = gradient; // Replace with your desired color or variable
				ctx.lineWidth = borderWidth; // Set your desired border width
				ctx.stroke();
			}
		}
	}, [canvas]);
}
