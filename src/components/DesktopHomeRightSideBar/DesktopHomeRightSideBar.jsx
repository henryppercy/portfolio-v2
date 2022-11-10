import './DesktopRightSideBar.scss';
import useDarkMode from "use-dark-mode";

const DesktopRightSideBar = () => {
    const darkMode = useDarkMode();

    return (
        <div className="right-sidebar">
            <div className="line"></div>
            <form>
                <label>LIGHT</label>
                <input type="radio" name="dark" onClick={darkMode.disable} />
                <label>DARK</label>
                <input type="radio" name="dark" onClick={darkMode.enable} checked={darkMode.value}/>
            </form>

        </div>
    );
}

export default DesktopRightSideBar;