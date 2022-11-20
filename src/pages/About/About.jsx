import './About.scss'
import MobileContentHeader from "../../components/MobileContentHeader/MobileContentHeader";
import MobileFooter from "../../components/MobileFooter/MobileFooter";
import DesktopLeftSideBar from "../../components/DesktopLeftSideBar/DesktopLeftSideBar";
import DesktopContentRightSideBar from "../../components/DesktopContentRightSideBar/DesktopContentRightSideBar";

const About = () => {
    return (
        <section>
            <MobileContentHeader></MobileContentHeader>
            <DesktopLeftSideBar></DesktopLeftSideBar>
            <DesktopContentRightSideBar></DesktopContentRightSideBar>

            <main className="about">
                <h2>About</h2>
                <div className="content">
                    <div>
                        <p>Hi, I’m Henry, a Full Stack Software Developer.
                            I’m currently completing the Full Stack course at <a href="https://io-academy.uk/" target="_blank">iO Academy</a>.</p>
                        <h3>Background</h3>
                        <p>I am and have always been passionate
                            about technology and enjoy taking on challenging problems. Since a young age I
                            have taken any and every opportunity to tackle technical problems - from building
                            PCs for friends and family, to Environmental Sensors for my University Faculty to
                            use in research projects.</p>
                        <p> I now want to make solving these problems my career and
                            am eager to step into the world of Software Development.</p>
                    </div>
                    <div>
                        <h3 className="skills">SKILLS</h3>
                        <p>Agile Methodologies / Sprint Planning / Wireframing / Database Design / Scrum Master</p>
                        <h3>TECHNOLOGY & TOOLING</h3>
                        <div className="tech-stack">
                            <ul>
                                <li>JavaScript (ES6)</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>SCSS</li>
                                <li>GIT</li>
                            </ul>
                            <ul>
                                <li>PHP</li>
                                <li>SQL</li>
                                <li>MongoDB</li>
                                <li>Figma</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <MobileFooter></MobileFooter>
        </section>
    );
}

export default About;
