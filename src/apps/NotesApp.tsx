import Draggable from "react-draggable";
import type { AppProps } from "../App";
import Titlebar from "../components/Titlebar";
import { useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const NotesApp = ({ isOpen, toggleClose }: AppProps) => {
	const nodeRef = useRef(null);
	const [text, setText] = useLocalStorage({ key: "text", defaultValue: "" });

	if (!isOpen) return null;

	return (
		<Draggable nodeRef={nodeRef} cancel=".non-draggable">
			<div
				ref={nodeRef}
				className="bg-on-bg/20 dark:bg-on-bg-dark/40 fixed top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 resize overflow-auto rounded-3xl p-4 backdrop-blur-3xl"
			>
				<Titlebar windowName="Notes" handleClose={toggleClose} />
				<textarea
					id="notes-area"
					onChange={(e) => setText(e.currentTarget.value)}
                    placeholder="Enter a note here..."
					className="non-draggable bg-on-bg-secondary dark:bg-on-bg-dark-secondary h-50 w-full resize-none rounded p-2 outline-0"
				>
					{text}
				</textarea>
			</div>
		</Draggable>
	);
};
export default NotesApp;
