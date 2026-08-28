import { useEffect, useState } from "react";

type useLocalStorageProps = {
	key: string;
	defaultValue: any;
};

const useLocalStorage = ({ key, defaultValue }: useLocalStorageProps) => {
	const [value, setValue] = useState(() => {
		try {
			const saved = localStorage.getItem(key);
			return saved ? JSON.parse(saved) : defaultValue;
		} catch (error) {
			console.error("Could not read localstorage key", key, error);
			return defaultValue;
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error("Could not set localstorage key", key, error);
		}
	}, [key, value]);

	return [value, setValue];
};
export default useLocalStorage;
