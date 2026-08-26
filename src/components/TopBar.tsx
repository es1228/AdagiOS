import useBattery from "../hooks/useBattery";
import useClock from "../hooks/useClock";
import Button from "./Button";

const TopBar = () => {
	const { time, date } = useClock(true, true);

	// fetch battery level
	const { batteryLevel, batteryIcon } = useBattery();

	return (
		<div className="bg-on-bg/20 dark:bg-on-bg-dark/40 m-2 flex items-center rounded-full px-4 backdrop-blur-3xl">
			<div className="mr-auto">
				<p>Lock Screen</p>
			</div>
			<p>
				{date} {time}
			</p>
			<div className="ml-auto flex">
				<Button
					onClick={() => {}}
					icon={batteryIcon}
					text={batteryLevel.toFixed(0) + "%"}
				/>
				<Button
					onClick={() => {}}
					icon="power_settings_new"
				/>
			</div>
		</div>
	);
};
export default TopBar;
