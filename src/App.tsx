import { useEffect, useState } from "react";
import "./App.css";
import TestApp from "./apps/TestApp";
import Background from "./components/Background";
import Taskbar from "./components/Taskbar";
import TopBar from "./components/TopBar";
import LoginPage from "./pages/LoginPage";
import NotesApp from "./apps/NotesApp";
import WeatherApp from "./apps/WeatherApp";
import ChessApp from "./apps/ChessApp";
import SatelliteApp from "./apps/SatelliteApp";

export type AppProps = {
	isOpen: boolean;
	isOnTop: boolean;
	toggleClose: () => void;
	onClick: () => void;
};

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [openApps, setOpenApps] = useState({
		test: false,
		notes: false,
		music: false,
		weather: false,
		chess: false,
		satellite: false,
	});
	const [activeApp, setActiveApp] = useState("desktop");

	useEffect(() => {
		const allClosed = Object.values(openApps).every(
			(value) => value === false,
		);

		if (allClosed) setActiveApp("desktop");
		else if (
			activeApp !== "desktop" &&
			!openApps[activeApp as keyof typeof openApps]
		) {
			const nextApp = Object.keys(openApps).find(
				(key) => openApps[key as keyof typeof openApps],
			);
			setActiveApp(nextApp || "desktop");
		}
	}, [openApps, activeApp]);

	const handleAppClick = (app: string) => setActiveApp(app);

	const toggleApp = (app: string) => {
		setOpenApps((prev) => {
			const isOpening = !prev[app as keyof typeof openApps];

			if (isOpening) setActiveApp(app);

			return {
				...prev,
				[app]: isOpening,
			};
		});
	};

	return (
		<>
			<Background src={`${import.meta.env.BASE_URL}background.jpg`} />
			{isLoggedIn ? (
				<>
					<TopBar activeApp={activeApp} onLogout={() => setIsLoggedIn(false)}/>
					<Taskbar
						apps={["notes", "weather", "chess", "satellite"]}
						activeApp={activeApp}
						toggleApp={toggleApp}
					/>
					<TestApp
						isOpen={openApps.test}
						isOnTop={activeApp === "test"}
						toggleClose={() => toggleApp("test")}
						onClick={() => handleAppClick("test")}
					/>
					<NotesApp
						isOpen={openApps.notes}
						isOnTop={activeApp === "notes"}
						toggleClose={() => toggleApp("notes")}
						onClick={() => handleAppClick("notes")}
					/>
					<WeatherApp
						isOpen={openApps.weather}
						isOnTop={activeApp === "weather"}
						toggleClose={() => toggleApp("weather")}
						onClick={() => handleAppClick("weather")}
					/>
					<ChessApp
						isOpen={openApps.chess}
						isOnTop={activeApp === "chess"}
						toggleClose={() => toggleApp("chess")}
						onClick={() => handleAppClick("chess")}
					/>
					<SatelliteApp 
						isOpen={openApps.satellite}
						isOnTop={activeApp === "satellite"}
						toggleClose={() => toggleApp("satellite")}
						onClick={() => handleAppClick("satellite")}
					/>
				</>
			) : (
				<>
					<LoginPage handleLogin={() => setIsLoggedIn(true)} />
				</>
			)}
		</>
	);
}

export default App;
