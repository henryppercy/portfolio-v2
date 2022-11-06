import {Link} from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";
import MobileFooter from "../components/MobileFooter";

const Home = () => {
    return (
        <section>
            <header className="home">
                <div className="line"></div>
                <DarkModeToggle></DarkModeToggle>
            </header>

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
