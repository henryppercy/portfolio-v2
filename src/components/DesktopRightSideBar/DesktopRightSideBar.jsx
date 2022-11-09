import './DesktopRightSideBar.scss';
import useDarkMode from "use-dark-mode";

const DesktopRightSideBar = () => {
    const darkMode = useDarkMode(true);

    return (
        <div className="right-sidebar">
            <div className="line"></div>
            <form>
            <input type="radio" name="dark" onClick={darkMode.disable}  />
            <label>LIGHT</label>
            <input type="radio" name="dark" onClick={darkMode.enable} />
            <label>DARK</label>
            </form>

        </div>
    );
}

export default DesktopRightSideBar;