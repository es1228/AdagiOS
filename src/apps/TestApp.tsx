import { useRef } from "react";
import Draggable from "react-draggable";
import Titlebar from "../components/Titlebar";
import type { AppProps } from "../App";

const TestApp = ({ isOpen, isOnTop, toggleClose, onClick }: AppProps) => {
	const nodeRef = useRef(null);

	if (!isOpen) return null;

	return (
		<Draggable nodeRef={nodeRef}>
			<div
				ref={nodeRef}
				className="bg-on-bg/20 dark:bg-on-bg-dark/40 fixed top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-3xl p-4 backdrop-blur-3xl"
				style={{ zIndex: isOnTop ? 50 : 10 }}
				onClick={onClick}
			>
				<Titlebar windowName="Test App" handleClose={toggleClose} />
				<p>This is my test app!</p>
			</div>
		</Draggable>
	);
};
export default TestApp;
