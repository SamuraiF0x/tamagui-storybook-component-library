export default function getTimeFormat(time: number) {
	const initialHours = Math.floor(time / (1000 * 60 * 60));
	const initialMinutes = Math.floor((time / (1000 * 60)) % 60);
	const initialSeconds = Math.floor((time / 1000) % 60);

	return { h: initialHours, m: initialMinutes, s: initialSeconds };
}
