type TaskbarProps = {
    icon: string;
    isActive: boolean;
    onClick: () => void;
}

const TaskbarIcon = ({icon, isActive, onClick}: TaskbarProps) => {
    return (
        <div>
            <img src={`${import.meta.env.BASE_URL}${icon}.svg`} className="h-12 w-12 hover:cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out" onClick={onClick}/>
            {isActive && (
                <div className="bg-text dark:bg-text-dark rounded-full h-1 w-1 mx-auto"></div>
            )}
        </div>
    )
}
export default TaskbarIcon;