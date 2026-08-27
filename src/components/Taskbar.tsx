import type { AppName } from "../App";
import Button from "./Button";

type TaskbarProps = {
	apps: AppName[];
	toggleApp: (app: AppName) => void;
};

const Taskbar = ({ apps, toggleApp }: TaskbarProps) => {
	return (
		<div className="bg-on-bg/20 dark:bg-on-bg-dark/40 fixed right-5 bottom-5 left-5 flex h-20 items-center justify-center rounded-3xl p-2 backdrop-blur-3xl">
			{apps.map((app) => (
				<Button key={app} onClick={() => toggleApp(app)} text={app} />
			))}
		</div>
	);
};
export default Taskbar;
