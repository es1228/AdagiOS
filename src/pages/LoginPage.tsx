import Button from "../components/Button";
import ProfileCard from "../components/ProfileCard";
import TimeContainer from "../components/TimeContainer";

const LoginPage = () => {
	return (
		<div className="h-full w-full">
			<div className="mx-auto mt-20 w-fit space-y-10 text-center">
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
		</div>
	);
};
export default LoginPage;
