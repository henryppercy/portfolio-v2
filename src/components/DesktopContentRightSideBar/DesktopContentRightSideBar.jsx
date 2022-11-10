import './DesktopContentRightSideBar.scss';
import useDarkMode from "use-dark-mode";
import {Link} from "react-router-dom";

const DesktopContentRightSideBar = () => {
    const darkMode = useDarkMode();

    return (
        <div className="right-content-sidebar">
            <div className="top">
                <div className="line"></div>
                <form>
                    <label>LIGHT</label>
                    <input type="radio" name="dark" onClick={darkMode.disable} />
                    <label>DARK</label>
                    <input type="radio" name="dark" onClick={darkMode.enable} checked={darkMode.value}/>
                </form>
            </div>
            <div className="bottom">
                <Link className="home" to="/"><a>HOME</a></Link>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default DesktopContentRightSideBar;