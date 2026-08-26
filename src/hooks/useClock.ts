import { useEffect, useState } from "react";

const useClock = (isHour12Format: boolean, isSecondsFormat: boolean) => {
	const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
	const [date, setDate] = useState<string>("");

	// fetch the date and time
	useEffect(() => {
		const timerID = setInterval(() => {
			// current time
			const timeStr = new Date().toLocaleTimeString("en-us", {
				hour12: isHour12Format,
				hour: "numeric",
				minute: "numeric",
				second: isSecondsFormat ? "numeric" : undefined,
			});
			setTime(timeStr);

			// current date
			const formattedDate = new Date().toLocaleDateString("en-us", {
				weekday: "short",
				month: "long",
				day: "numeric",
			});
			setDate(formattedDate);
		}, 1000);

		return () => clearInterval(timerID);
	}, [isSecondsFormat, isHour12Format]);

	return { time, date };
};
export default useClock;