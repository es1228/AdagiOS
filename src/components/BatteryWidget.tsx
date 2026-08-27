import Draggable from "react-draggable";
import useBattery from "../hooks/useBattery";
import { convertSecondsToHHMM } from "../utils/convertSecondsToHHMM";
import { useRef } from "react";

const BatteryWidget = () => {
	const {
		batteryLevel,
		batteryCharging,
		batteryChargingTime,
		batteryDischargingTime,
		batteryIcon,
	} = useBattery();

    const nodeRef = useRef(null);

	return (
		<Draggable nodeRef={nodeRef} bounds="body">
			<div ref={nodeRef} className="bg-on-bg-secondary/20 dark:bg-on-bg-dark-secondary/40 w-fit rounded-3xl p-4 backdrop-blur-3xl">
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
		</Draggable>
	);
};
export default BatteryWidget;
