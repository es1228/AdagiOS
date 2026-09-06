import TaskbarIcon from "../../public/TaskbarIcon";

type TaskbarProps = {
	apps: string[];
	activeApp: string;
	toggleApp: (app: string) => void;
};

const Taskbar = ({ apps, activeApp, toggleApp }: TaskbarProps) => {
	return (
		<div className="bg-on-bg/20 dark:bg-on-bg-dark/40 fixed right-50 bottom-5 left-50 flex h-20 items-center justify-center gap-4 rounded-3xl p-2 backdrop-blur-3xl">
			{apps.map((app) => (
				<TaskbarIcon
					key={app}
					icon={app}
					isActive={activeApp === app}
					onClick={() => toggleApp(app)}
				/>
			))}
		</div>
	);
};
export default Taskbar;
