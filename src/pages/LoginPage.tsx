import Button from "../components/Button";
import ProfileCard from "../components/ProfileCard";
import TimeContainer from "../components/TimeContainer";
import useBattery from "../hooks/useBattery";

const LoginPage = () => {
	// fetch battery level
	const { batteryLevel, batteryIcon } = useBattery();

	return (
		<div className="h-full w-full">
			<div className="mx-auto mt-30 w-fit space-y-8 text-center">
				<TimeContainer />
				<ProfileCard />
				<p>Press Any Key To Login</p>
			</div>
			<div className="fixed bottom-5 left-1/2 -translate-x-1/2">
				<Button
					onClick={() => {}}
					icon="keyboard_control_key"
					size={48}
				/>
			</div>
			<div className="fixed right-5 bottom-5 flex gap-2 p-2 rounded-3xl">
				<Button
					onClick={() => {}}
					icon={batteryIcon}
					text={batteryLevel.toFixed(0) + "%"}
					isSecondary
				/>
				<Button
					onClick={() => {}}
					icon="power_settings_new"
					isSecondary
				/>
			</div>
		</div>
	);
};
export default LoginPage;
