import { useRef, useState } from "react";
import Draggable from "react-draggable";
import Titlebar from "../components/Titlebar";
import type { AppProps } from "../App";

const MusicApp = ({ isOpen, isOnTop, toggleClose, onClick }: AppProps) => {
	const nodeRef = useRef(null);
	const [audioURL, setAudioURL] = useState("");

    if (!isOpen) return null;

	return (
		<Draggable nodeRef={nodeRef}>
			<div
				ref={nodeRef}
				className="bg-on-bg/20 dark:bg-on-bg-dark/40 fixed top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-3xl p-4 backdrop-blur-3xl"
                style={{ zIndex: isOnTop ? 50 : 10 }}
                onClick={onClick}
			>
				<Titlebar windowName="Music" handleClose={toggleClose} />
				<div className="space-y-4">
					<input
						type="file"
						accept="audio/*"
						name="music-import"
						onChange={(e) => {
							const file = e.target.files?.[0];
							if (file) setAudioURL(URL.createObjectURL(file));
						}}
						className="file:bg-on-bg-secondary file:dark:bg-on-bg-dark-secondary file:rounded-3xl file:p-2 file:hover:cursor-pointer"
					/>
					<audio controls src={audioURL}></audio>
				</div>
			</div>
		</Draggable>
	);
};
export default MusicApp;
