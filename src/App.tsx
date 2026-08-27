import { useState } from "react";
import "./App.css";
import TestApp from "./apps/TestApp";
import Background from "./components/Background";
import Taskbar from "./components/Taskbar";
import TopBar from "./components/TopBar";
import LoginPage from "./pages/LoginPage";

export type AppName = "test";

function App() {
	const [openApps, setOpenApps] = useState({
		test: false,
	});

	const openApp = (app: AppName) =>
		setOpenApps((prev) => ({ ...prev, [app]: !prev[app] }));


	return (
		<>
			<Background src="https://cdn.mos.cms.futurecdn.net/HuGGeENt6kGyixe3hT9tnY.jpg" />
			<TopBar />
			<Taskbar apps={["test"]} toggleApp={openApp}/>
			<TestApp isOpen={openApps.test} toggleClose={() => openApp("test")}/>
		</>
	);
}

export default App;
