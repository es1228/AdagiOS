import Button from "./Button"

type TitlebarProps= {
    windowName: string;
    handleClose: () => void;
}

const Titlebar = ({windowName, handleClose}: TitlebarProps) => {
    return (
        <div className="flex items-center justify-between">
            <p>{windowName}</p>
            <Button onClick={handleClose} icon="close"/>
        </div>
    )
}
export default Titlebar;