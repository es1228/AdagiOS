import useBattery from "../hooks/useBattery";
import { convertSecondsToHHMM } from "../utils/convertSecondsToHHMM";

const BatteryFlyout = () => {
	const {
		batteryLevel,
		batteryCharging,
		batteryChargingTime,
		batteryDischargingTime,
		batteryIcon,
	} = useBattery();

	return (
		<div className="bg-on-bg-secondary/20 dark:bg-on-bg-dark-secondary/40 w-fit rounded-3xl p-4 backdrop-blur-3xl">
			<div className="flex items-center gap-2">
				<span
					className={`icon icon-40 icon-rounded group-hover:icon-filled group-hover:icon-700 transition-all duration-100`}
				>
					{batteryIcon}
				</span>
				<h1 className="text-lg">{batteryLevel}%</h1>
			</div>
			<p>
				{batteryCharging
					? `${convertSecondsToHHMM(batteryChargingTime)} until full`
					: `${convertSecondsToHHMM(batteryDischargingTime)} until empty`}
			</p>
		</div>
	);
};
export default BatteryFlyout;
