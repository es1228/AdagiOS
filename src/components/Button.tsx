type ButtonProps = {
	onClick: () => void;
	icon?: string;
	text?: string;
	isPrimary?: boolean;
	isSecondary?: boolean;
	stopPropagation?: boolean;
	size?: 20 | 24 | 40 | 48;
};

const Button = ({
	text,
	icon,
	isPrimary,
	isSecondary,
	stopPropagation,
	size = 24,
	onClick,
}: ButtonProps) => {
	return (
		<button
			className={`group flex flex-row gap-2 rounded-3xl p-3 text-nowrap hover:cursor-pointer ${isPrimary && "bg-primary"} ${isSecondary && "bg-on-bg-secondary/60 dark:bg-on-bg-dark-secondary/60 backdrop-blur-3xl"}`}
			onClick={(e) => {
				if (stopPropagation) e.stopPropagation();
				onClick();
			}}
		>
			{icon && (
				<span className={`icon icon-${size} icon-rounded group-hover:icon-filled group-hover:icon-700 transition-all duration-100`}>
					{icon}
				</span>
			)}
			{text && <p className="group-hover:underline">{text}</p>}
		</button>
	);
};
export default Button;
