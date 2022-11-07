import MobileDarkModeToggle from "./MobileDarkModeToggle/MobileDarkModeToggle";

const MobileHomeHeader = () => {
    return (
        <header className="home">
            <div className="line"></div>
            <MobileDarkModeToggle></MobileDarkModeToggle>
        </header>
    );
}

export default MobileHomeHeader;
