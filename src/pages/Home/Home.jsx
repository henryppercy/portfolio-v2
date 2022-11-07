import './Home.scss'
import {Link} from "react-router-dom";
import MobileDarkModeToggle from "../../components/MobileDarkModeToggle";
import MobileFooter from "../../components/MobileFooter/MobileFooter";
import MobileHomeHeader from "../../components/MobileHomeHeader/MobileHomeHeader";
import DesktopLeftSideBar from "../../components/DesktopLeftSideBar/DesktopLeftSideBar";

const Home = () => {

    return (
        <section>
            <MobileHomeHeader></MobileHomeHeader>
            <DesktopLeftSideBar></DesktopLeftSideBar>

            <main className="home">
                <div className="heading">
                    <h1>Henry Percy</h1>
                    <h2>Junior Software Developer</h2>
                </div>
                <nav>
                    <Link to="/about"><h3>About</h3></Link>
                    <Link to="/work"><h3>Work</h3></Link>
                    <Link to="/contact"><h3>Contact</h3></Link>
                </nav>
            </main>



            <MobileFooter></MobileFooter>
        </section>
    );
}

export default Home;
