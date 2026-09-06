import Draggable from "react-draggable";
import type { AppProps } from "../App";
import Titlebar from "../components/Titlebar";
import { useEffect, useRef } from "react";

const WeatherApp = ({ isOpen, isOnTop, toggleClose, onClick }: AppProps) => {
	const nodeRef = useRef(null);

	const iFrameRef = useRef(null);

	useEffect(() => {
		if (iFrameRef.current) (iFrameRef.current as any).credentialless = true;
	}, []);

	if (!isOpen) return null;

	return (
		<Draggable nodeRef={nodeRef} cancel=".non-draggable">
			<div
				ref={nodeRef}
				className="bg-on-bg/20 dark:bg-on-bg-dark/40 fixed top-1/2 left-1/2 h-150 w-100 -translate-x-1/2 -translate-y-1/2 resize overflow-auto rounded-3xl p-4 backdrop-blur-3xl"
				style={{ zIndex: isOnTop ? 50 : 10 }}
				onClick={onClick}
			>
				<Titlebar windowName="Weather" handleClose={toggleClose} />
				<iframe
					ref={iFrameRef}
					className="h-9/10 w-full rounded-3xl"
					src="https://es1228.github.io/OpenSky"
				></iframe>
			</div>
		</Draggable>
	);
};
export default WeatherApp;
