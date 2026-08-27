import { useEffect, useState } from "react";

const useBattery = () => {
	const [batteryLevel, setBatteryLevel] = useState(0);
	const [batteryCharging, setBatteryCharging] = useState(false);
	const [batteryChargingTime, setBatteryChargingTime] = useState(0);
	const [batteryDischargingTime, setBatteryDischargingTime] = useState(0);
	const [batteryIcon, setBatteryIcon] = useState("battery_android_0");

	useEffect(() => {
		const fetchBatteryInfo = async () => {
			if ("getBattery" in navigator) {
				// get charge status + level
				const battery = await navigator.getBattery?.();
				const level = battery?.level ? battery.level * 100 : 0;
				const charging = battery?.charging;
				setBatteryCharging(charging ?? false);
				setBatteryChargingTime(battery?.chargingTime ?? 0);
				setBatteryDischargingTime(battery?.dischargingTime ?? 0);

				// set icon
				if (charging) setBatteryIcon("battery_android_frame_bolt");
				else if (level < 5) setBatteryIcon("battery_android_alert");
				else if (level >= 5 && level < 15)
					setBatteryIcon("battery_android_0");
				else if (level >= 15 && level < 30)
					setBatteryIcon("battery_android_1");
				else if (level >= 30 && level < 45)
					setBatteryIcon("battery_android_2");
				else if (level >= 45 && level < 60)
					setBatteryIcon("battery_android_3");
				else if (level >= 60 && level < 75)
					setBatteryIcon("battery_android_4");
				else if (level >= 75 && level < 90)
					setBatteryIcon("battery_android_5");
				else if (level >= 90 && level < 95)
					setBatteryIcon("battery_android_6");
				else if (level >= 95 && level < 100)
					setBatteryIcon("battery_android_full");

				// listen for status changes
				battery?.addEventListener("levelchange", fetchBatteryInfo);
				battery?.addEventListener("chargingchange", fetchBatteryInfo);
				battery?.addEventListener(
					"chargingtimechange",
					fetchBatteryInfo,
				);
				battery?.addEventListener(
					"dischargingtimechange",
					fetchBatteryInfo,
				);

				setBatteryLevel(Math.round(level));

				// cleanup
				return () => {
					battery?.removeEventListener(
						"levelchange",
						fetchBatteryInfo,
					);
					battery?.removeEventListener(
						"chargingchange",
						fetchBatteryInfo,
					);
					battery?.removeEventListener(
						"chargingtimechange",
						fetchBatteryInfo,
					);
					battery?.removeEventListener(
						"dischargingtimechange",
						fetchBatteryInfo,
					);
				};
			}
		};
		fetchBatteryInfo();
	}, []);

	return {
		batteryLevel,
		batteryCharging,
		batteryChargingTime,
		batteryDischargingTime,
		batteryIcon,
	};
};
export default useBattery;
