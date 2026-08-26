import useClock from "../hooks/useClock";

const TimeContainer = () => {
    const {time, date} = useClock(true, true)

    return (
        <div className="text-center space-y-4 font-bold">
            <p className="text-7xl">{time}</p>
            <p className="text-xl">{date}</p>
        </div>
    )
}
export default TimeContainer;