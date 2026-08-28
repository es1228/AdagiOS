import { useState } from "react";
import "./App.css";
import TestApp from "./apps/TestApp";
import Background from "./components/Background";
import Taskbar from "./components/Taskbar";
import TopBar from "./components/TopBar";
import LoginPage from "./pages/LoginPage";
import NotesApp from "./apps/NotesApp";

export type AppNames = ["test", "notes"];

export type AppProps = {
	isOpen: boolean;
	toggleClose: () => void;
};

function App() {
	const [openApps, setOpenApps] = useState({
		test: false,
		notes: false,
	});
	const [activeApp, setActiveApp] = useState("Desktop");

	const updateActiveApp = (app: string, appsOpen: typeof openApps) => {
		Object.values(appsOpen).every((value) => value === false)
			? setActiveApp("Desktop")
			: setActiveApp(app);
	};

	const toggleApp = (app: string) => {
		setOpenApps((prev) => {
			const updated = {
				...prev,
				[app]: !prev[app as keyof typeof openApps],
			};
			updateActiveApp(app, updated);
			return updated;
		});
	};

	return (
		<>
			<Background src="https://cdn.mos.cms.futurecdn.net/HuGGeENt6kGyixe3hT9tnY.jpg" />
			<TopBar activeApp={activeApp} />
			<Taskbar apps={["test", "notes"]} toggleApp={toggleApp} />
			<TestApp
				isOpen={openApps.test}
				toggleClose={() => toggleApp("test")}
			/>
			<NotesApp
				isOpen={openApps.notes}
				toggleClose={() => toggleApp("notes")}
			/>
		</>
	);
}

export default App;
