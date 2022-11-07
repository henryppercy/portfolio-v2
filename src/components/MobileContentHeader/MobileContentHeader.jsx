import './MobileContentHeader.scss';
import MobileDarkModeToggle from "../MobileDarkModeToggle";
import {Link} from "react-router-dom";

const MobileContentHeader = () => {
    return (
        <header className="content-page">
            <div>
                <div className="line"></div>
                <Link to="/"><a>HOME</a></Link>
            </div>
            <MobileDarkModeToggle></MobileDarkModeToggle>
        </header>
    );
}

export default MobileContentHeader;