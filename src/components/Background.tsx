type BackgroundProps = {
    src?: string;
    alt?: string;
}

const Background = ({src, alt}: BackgroundProps) => {
    return (
        <div className="fixed inset-0 h-screen w-screen -z-10">
            <img src={src} alt={alt} className="w-full h-full object-cover"/>
        </div>
    )
}
export default Background;