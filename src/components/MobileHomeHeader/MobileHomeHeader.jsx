import './MobileHomeHeader.scss'
import MobileDarkModeToggle from "../MobileDarkModeToggle";

const MobileHomeHeader = () => {
    return (
        <header className="home-header">
            <div className="line"></div>
            <MobileDarkModeToggle></MobileDarkModeToggle>
        </header>
    );
}

export default MobileHomeHeader;
