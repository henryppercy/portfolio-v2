import {Link} from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";
import MobileFooter from "../components/MobileFooter";
import MobileHomeHeader from "../components/MobileHomeHeader";

const Home = () => {

    return (
        <section>
        {/*<MobileHomeHeader></MobileHomeHeader>*/}


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

            <footer>
                <p className="copyright">© 2022 PERCY</p>
                <div className="line"></div>
                <div className="contact-logos">
                    <a href="https://www.w3schools.com">
                        <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.30292 18.9576C6.30292 20.6921 4.88599 22.1091 3.15146 22.1091C1.41694 22.1091 0 20.6921 0 18.9576C0 17.2231 1.41694 15.8062 3.15146 15.8062H6.30292V18.9576Z"/>
                            <path d="M7.89088 18.9576C7.89088 17.2231 9.30781 15.8062 11.0423 15.8062C12.7769 15.8062 14.1938 17.2231 14.1938 18.9576V26.8485C14.1938 28.583 12.7769 29.9999 11.0423 29.9999C9.30781 29.9999 7.89088 28.583 7.89088 26.8485V18.9576Z"/>
                            <path d="M11.0423 6.30292C9.30781 6.30292 7.89088 4.88599 7.89088 3.15146C7.89088 1.41694 9.30781 0 11.0423 0C12.7769 0 14.1938 1.41694 14.1938 3.15146V6.30292H11.0423Z"/>
                            <path d="M11.0423 7.89087C12.7769 7.89087 14.1938 9.3078 14.1938 11.0423C14.1938 12.7769 12.7769 14.1938 11.0423 14.1938H3.15146C1.41694 14.1938 0 12.7769 0 11.0423C0 9.3078 1.41694 7.89087 3.15146 7.89087H11.0423Z"/>
                            <path d="M23.6971 11.0423C23.6971 9.3078 25.114 7.89087 26.8485 7.89087C28.5831 7.89087 30 9.3078 30 11.0423C30 12.7769 28.5831 14.1938 26.8485 14.1938H23.6971V11.0423Z"/>
                            <path d="M22.1091 11.0423C22.1091 12.7769 20.6921 14.1938 18.9576 14.1938C17.2231 14.1938 15.8061 12.7769 15.8061 11.0423V3.15146C15.8061 1.41694 17.2231 0 18.9576 0C20.6921 0 22.1091 1.41694 22.1091 3.15146V11.0423Z"/>
                            <path d="M18.9577 23.697C20.6922 23.697 22.1091 25.114 22.1091 26.8485C22.1091 28.583 20.6922 29.9999 18.9577 29.9999C17.2231 29.9999 15.8062 28.583 15.8062 26.8485V23.697H18.9577Z"/>
                            <path d="M18.9576 22.1091C17.2231 22.1091 15.8061 20.6921 15.8061 18.9576C15.8061 17.2231 17.2231 15.8062 18.9576 15.8062H26.8485C28.583 15.8062 29.9999 17.2231 29.9999 18.9576C29.9999 20.6921 28.583 22.1091 26.8485 22.1091H18.9576Z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/henryppercy">
                        <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2438 10.2562 29.2313C11.0062 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8063 6.225 23.9625C6.05625 23.5313 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8688 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6563 10.4813 24.0188 11.3438 23.625C11.475 22.65 11.8687 21.9938 12.3 21.6188C8.9625 21.2438 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6563 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2438 17.7563 21.6188C18.3 22.0875 18.7688 22.9875 18.7688 24.3938C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0313 29.3813 19.7813 29.2313C22.759 28.226 25.3466 26.3122 27.1797 23.7593C29.0128 21.2064 29.9992 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/henry-b-percy/">
                        <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2.14901C0 0.962462 0.986273 0 2.20296 0H27.797C29.0137 0 30 0.962466 30 2.14901V27.851C30 29.0379 29.0137 30 27.797 30L2.20296 30C0.986273 30 0 29.0379 0 27.851V2.14901ZM9.26884 25.1131V11.5664H4.76617V25.1131H9.26884ZM7.01748 9.71686C8.58765 9.71686 9.56495 8.67662 9.56495 7.37663C9.53569 6.04738 8.58766 5.03601 7.04727 5.03601C5.50704 5.03601 4.5 6.04738 4.5 7.37663C4.5 8.67662 5.47709 9.71686 6.98814 9.71686H7.01748ZM16.2214 25.1131V17.5481C16.2214 17.1432 16.2506 16.7387 16.3695 16.4493C16.695 15.6404 17.4359 14.8026 18.6798 14.8026C20.3091 14.8026 20.9608 16.0448 20.9608 17.8659V25.1131H25.4631V17.3456C25.4631 13.1847 23.2417 11.2485 20.2793 11.2485C17.8908 11.2485 16.8199 12.5613 16.2215 13.4844V13.531H16.1914C16.2013 13.5156 16.2113 13.5 16.2215 13.4844V11.5664H11.7189C11.778 12.8376 11.7189 25.1131 11.7189 25.1131H16.2214Z"/>
                        </svg>
                    </a>
                    <a href="mailto:henrypercydev@gmail.com">
                        <svg width="25" height="18" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0929726 2.91645C0.471994 1.24657 1.96542 0 3.75 0H26.25C28.0346 0 29.528 1.24657 29.907 2.91645L15 12.0263L0.0929726 2.91645ZM0 5.05703V18.3761L10.881 11.7065L0 5.05703ZM12.6776 12.8045L0.359758 20.3548C0.961133 21.623 2.25315 22.5 3.75 22.5H26.25C27.7469 22.5 29.0389 21.623 29.6402 20.3548L17.3224 12.8045L15 14.2237L12.6776 12.8045ZM19.119 11.7065L30 18.3761V5.05703L19.119 11.7065Z"/>
                        </svg>
                    </a>
                </div>
            </footer>

        {/*<MobileFooter></MobileFooter>*/}
        </section>
    );
}

export default Home;
