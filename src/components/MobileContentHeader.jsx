import DarkModeToggle from "../components/DarkModeToggle";
import {Link} from "react-router-dom";

const MobileContentHeader = () => {
    return (
        <header className="content-page">
            <div>
                <div className="line"></div>
                <Link to="/"><a>HOME</a></Link>
            </div>
            <DarkModeToggle></DarkModeToggle>
        </header>
    );
}

export default MobileContentHeader;