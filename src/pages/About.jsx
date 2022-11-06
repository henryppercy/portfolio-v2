import {Link} from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";
import MobileFooter from "../components/MobileFooter";

const About = () => {
    return (
        <section>
            <header className="content-page">
                <div>
                    <div className="line"></div>
                    <Link to="/"><a>HOME</a></Link>
                </div>
                <DarkModeToggle></DarkModeToggle>
            </header>

            <main className="about">
                <h2>About</h2>
                <p>Hi, I’m Henry, an aspiring Software Developer. I’m currently completing the Full Stack Track course at iO Academy. I’m currently open and looking for my first Software Engineer job.</p>
                <h3>BACKGROUND</h3>
                <p>From a young age I have had a fascination with technology and have been eager to a pursue a career in programming. However, like many others I’ve always lacked the confidence that I could meet the requirements to work in the industry.</p>
                <p>After school I pursued other interests, spending a few years as a chef before going on to complete a degree in Human Geography.</p>
                <p>I finished my degree and took a job as a Technical Recruiter which cemented what I already knew: I want a job in tech.</p>
                <p>Which is why I now find myself at iO Academy learning how to build full stack apps as part of an Agile team. While at iO I have found a true passion for programming from building intuitive UIs to robust APIs.</p>
                <h3>SKILLS</h3>
                <p>Agile Methodologies / Sprint Planning / Wireframing / Database Design / Scrum Master</p>
                <h3>TECHNOLOGY / TOOLING</h3>
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
            </main>

            <MobileFooter></MobileFooter>
    </section>
    );
}

export default About;
