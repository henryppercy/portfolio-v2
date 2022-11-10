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
                    <p>Hi, I’m Henry, an aspiring Software Developer. I’m currently completing the Full Stack Track course at iO Academy. I’m currently open and looking for my first Software Engineer job.</p>
                    <h3>SKILLS</h3>
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
            </main>

            <MobileFooter></MobileFooter>
        </section>
    );
}

export default About;
