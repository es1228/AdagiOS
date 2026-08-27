import { useRef, useState } from "react";
import Draggable from "react-draggable";
import Titlebar from "../components/Titlebar";

type TestAppProps = {
	isOpen: boolean;
	toggleClose: () => void;
};

const TestApp = ({ isOpen, toggleClose }: TestAppProps) => {
	const nodeRef = useRef(null);

	if (!isOpen) return null;

	return (
		<Draggable nodeRef={nodeRef}>
			<div
				ref={nodeRef}
				className="bg-on-bg/20 dark:bg-on-bg-dark/40 h-80 w-80 rounded-3xl p-4 backdrop-blur-3xl fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
			>
				<Titlebar windowName="Test App" handleClose={toggleClose} />
				<p>This is my test app!</p>
			</div>
		</Draggable>
	);
};
export default TestApp;
