import './Work.scss';
import MobileContentHeader from "../../components/MobileContentHeader/MobileContentHeader";
import MobileFooter from "../../components/MobileFooter/MobileFooter";
import DesktopLeftSideBar from "../../components/DesktopLeftSideBar/DesktopLeftSideBar";
import DesktopContentRightSideBar from "../../components/DesktopContentRightSideBar/DesktopContentRightSideBar";

const Work = () => {

    const projects = [
        {
            title: 'Resturant Order Tracking API',
            tech: 'PHP / Slim / SQL',
            description: <p>This is a <strong>RESTful API</strong> built with <strong>PHP</strong> (Slim framework) and <strong>SQL</strong> to track restaurant orders.</p>,
            aim : <p>The objective of this build is to demonstrate an understanding of <strong>Object Oriented Programming</strong> while working to <strong>SOLID</strong> principles, using the <strong>MVC</strong> design pattern.</p>,
            github: 'https://github.com/henryppercy/restaurant-order-tracking-api',
            live: '',
        },
        {
            title: 'Robot Stores Frontend',
            tech: 'TypeScript / React / Sass',
            description: <p>A <strong>React</strong> frontend built for a fictional e-commerce store, 'Robot Stores', which sells Robot themed apparel.</p>,
            aim : <p>To demonstrate my ability to build <strong>accessible</strong>, <strong>responsive</strong>, and visually appealing frontends while utilising the type safety offered by <strong>TypeScript</strong>.</p>,
            github: 'https://github.com/henryppercy/robot-stores-fe',
            live: 'https://robot-stores.netlify.app/',
        },
        {
            title: 'Robot Stores Backend',
            tech: 'TypeScript / Node.js / Express.js / MongoDB',
            description: <p>This is a <strong>Node.js</strong> backend built for a fictional e-commerce store, 'Robot Stores', which sells Robot themed apparel.</p>,
            aim : <p>To demonstrate my ability to build <strong>robust</strong> and <strong>scalable</strong> backends.</p>,
            github: 'https://github.com/henryppercy/robot-stores-be',
            live: 'https://robot-stores-be.2022-henryp.dev.io-academy.uk/products',
        },
        {
            title: 'JavaScript Maze Game',
            tech: 'JavaScript / CSS / HTML',
            description: <p>A maze game where the aim is to navigate through the maze without moving the cursor off the path or colliding with moving obstacles. This was built with <strong>JavaScript</strong>, <strong>CSS</strong>, and <strong>HTML</strong>.</p>,
            aim : <p>To showcase <strong>JavaScript</strong>, fundamentals such as using <strong>event handlers</strong> and <strong>DOM</strong> manipulation.</p>,
            github: 'https://github.com/iO-Academy/2022-aug-hawkmaze',
            live: 'https://2022-henryp.dev.io-academy.uk/Tony-the-Hawk-Pro-Mazer/',
        },
        {
            title: 'Bill Calculator',
            tech: 'JavaScript / React / CSS',
            description: <p>This is a calculator which allows a user to calculate how much each person owes given a bill total, tip percentage, and number of people.</p>,
            aim : <p>The aim of this project is to practise building a <strong>React</strong> app which requires state to be manipulated and passed down between components.</p>,
            github: 'https://github.com/henryppercy/bill-split-calculator',
            live: 'https://henry-tip-calculator.netlify.app/',
        },
        {
            title: 'Furniture Store API',
            tech: 'PHP / OOP / SQL',
            description: <p>This is an <strong>API</strong> built in <strong>PHP</strong> to pull data through from an <strong>SQL</strong> database to a React frontend for a Furniture Store E-commerce site.</p>,
            aim : <p>To demonstrate an understanding of <strong>Object Oriented Programming</strong> working to <strong>SOLID</strong> principles.</p>,
            github: 'https://github.com/iO-Academy/2022-aug-furniture-store-be',
            live: '',
        },
        {
            title: 'The Coffee Collection',
            tech: 'PHP / SQL',
            description: <p>The first <strong>PHP</strong> app I built as part of the iO Academy course. The app stores information about types of coffee and allows you to permanently add more items to the collection. This is built functionally in <strong>PHP</strong> with an <strong>SQL</strong> database.</p>,
            aim : <p>To showcase an understanding of programming fundamentals as well as managing and manipulating data in a <strong>SQL</strong> database with <strong>HTTP requests</strong>.</p>,
            github: 'https://github.com/henryppercy/coffee-collection',
            live: 'https://2022-henryp.dev.io-academy.uk/Coffee-Collection/',
        },
        {
            title: 'React Invoicing Frontend',
            tech: 'JavaScript / React / Bootstrap',
            description: <p>This is a <strong>React</strong> and <strong>Bootstrap</strong> frontend for an Invoicing Application which pulls data from a prebuilt <strong>RESTful API</strong>.</p>,
            aim : <p>To display an understanding of <strong>React</strong> fundamentals such as <strong>state management</strong>, <strong>component based design</strong>, and <strong>JSX</strong>; as well as using <strong>HTTP requests</strong> to retrieve and manipulate data from an API.</p>,
            github: 'https://github.com/iO-Academy/2022-aug-react-invoice-app',
            live: 'https://2022-aug-react-invoice-app.dev.io-academy.uk/',
        },
        {
            title: 'This Portfolio',
            tech: 'JavaScript / React / Sass',
            description: <p>The portfolio you are currently looking at! Built with React and Sass.</p>,
            aim : <p>To build an accessible and responsive website to show off my projects and introduce myself to employers along my Junior Developer journey.</p>,
            github: 'https://github.com/henryppercy/portfolio-v3',
            live: 'https://www.henrypercy.co.uk/',
        },
    ];

    const generateProjects = projects.map(
        (projects, index) => {
            if (projects.live !== '') {
                return (
                    <div className="project">
                        <h3 className="top">{projects.title}</h3>
                        <div className="project-tech">
                            <p>{projects.tech}</p>
                        </div>
                        {projects.description}
                        <h4>Objective:</h4>
                        {projects.aim}
                        <div className="links">
                            <a href={projects.github} target="_blank">
                                <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2438 10.2562 29.2313C11.0062 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8063 6.225 23.9625C6.05625 23.5313 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8688 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6563 10.4813 24.0188 11.3438 23.625C11.475 22.65 11.8687 21.9938 12.3 21.6188C8.9625 21.2438 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6563 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2438 17.7563 21.6188C18.3 22.0875 18.7688 22.9875 18.7688 24.3938C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0313 29.3813 19.7813 29.2313C22.759 28.226 25.3466 26.3122 27.1797 23.7593C29.0128 21.2064 29.9992 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"/>
                                </svg>
                            </a>
                            <a href={projects.live} target="_blank">
                                <svg width="25" height="25" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9886 11.9375C27.9886 11.0746 27.2891 10.375 26.4261 10.375H5.6875C3.09866 10.375 1 12.4737 1 15.0625V46.3125C1 48.9013 3.09866 51 5.6875 51H36.9375C39.5263 51 41.625 48.9013 41.625 46.3125V25.5739C41.625 24.7109 40.9254 24.0114 40.0625 24.0114C39.1996 24.0114 38.5 24.7109 38.5 25.5739V46.3125C38.5 47.1754 37.8004 47.875 36.9375 47.875H5.6875C4.82455 47.875 4.125 47.1754 4.125 46.3125V15.0625C4.125 14.1996 4.82455 13.5 5.6875 13.5H26.4261C27.2891 13.5 27.9886 12.8004 27.9886 11.9375Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M51 2.5625C51 1.69956 50.3004 1 49.4375 1H33.8125C32.9496 1 32.25 1.69956 32.25 2.5625C32.25 3.42544 32.9496 4.125 33.8125 4.125H45.6653L20.2076 29.5826C19.5975 30.1928 19.5975 31.1822 20.2076 31.7924C20.8178 32.4025 21.8072 32.4025 22.4174 31.7924L47.875 6.33471V18.1875C47.875 19.0504 48.5746 19.75 49.4375 19.75C50.3004 19.75 51 19.0504 51 18.1875V2.5625Z" />
                                    <path d="M45.6653 4.125L46.3724 4.83211C46.6584 4.54611 46.744 4.11599 46.5892 3.74232C46.4344 3.36864 46.0698 3.125 45.6653 3.125V4.125ZM20.2076 29.5826L19.5005 28.8755L19.5005 28.8755L20.2076 29.5826ZM20.2076 31.7924L19.5005 32.4995L19.5005 32.4995L20.2076 31.7924ZM22.4174 31.7924L23.1245 32.4995L23.1245 32.4995L22.4174 31.7924ZM47.875 6.33471H48.875C48.875 5.93025 48.6314 5.56561 48.2577 5.41083C47.884 5.25605 47.4539 5.3416 47.1679 5.6276L47.875 6.33471ZM26.4261 11.375C26.7368 11.375 26.9886 11.6268 26.9886 11.9375H28.9886C28.9886 10.5223 27.8414 9.375 26.4261 9.375V11.375ZM5.6875 11.375H26.4261V9.375H5.6875V11.375ZM2 15.0625C2 13.026 3.65095 11.375 5.6875 11.375V9.375C2.54638 9.375 0 11.9214 0 15.0625H2ZM2 46.3125V15.0625H0V46.3125H2ZM5.6875 50C3.65095 50 2 48.3491 2 46.3125H0C0 49.4536 2.54638 52 5.6875 52V50ZM36.9375 50H5.6875V52H36.9375V50ZM40.625 46.3125C40.625 48.3491 38.9741 50 36.9375 50V52C40.0786 52 42.625 49.4536 42.625 46.3125H40.625ZM40.625 25.5739V46.3125H42.625V25.5739H40.625ZM40.0625 25.0114C40.3732 25.0114 40.625 25.2632 40.625 25.5739H42.625C42.625 24.1586 41.4777 23.0114 40.0625 23.0114V25.0114ZM39.5 25.5739C39.5 25.2632 39.7518 25.0114 40.0625 25.0114V23.0114C38.6473 23.0114 37.5 24.1586 37.5 25.5739H39.5ZM39.5 46.3125V25.5739H37.5V46.3125H39.5ZM36.9375 48.875C38.3527 48.875 39.5 47.7277 39.5 46.3125H37.5C37.5 46.6232 37.2482 46.875 36.9375 46.875V48.875ZM5.6875 48.875H36.9375V46.875H5.6875V48.875ZM3.125 46.3125C3.125 47.7277 4.27227 48.875 5.6875 48.875V46.875C5.37684 46.875 5.125 46.6232 5.125 46.3125H3.125ZM3.125 15.0625V46.3125H5.125V15.0625H3.125ZM5.6875 12.5C4.27227 12.5 3.125 13.6473 3.125 15.0625H5.125C5.125 14.7518 5.37684 14.5 5.6875 14.5V12.5ZM26.4261 12.5H5.6875V14.5H26.4261V12.5ZM26.9886 11.9375C26.9886 12.2482 26.7368 12.5 26.4261 12.5V14.5C27.8414 14.5 28.9886 13.3527 28.9886 11.9375H26.9886ZM49.4375 2C49.7482 2 50 2.25184 50 2.5625H52C52 1.14727 50.8527 0 49.4375 0V2ZM33.8125 2H49.4375V0H33.8125V2ZM33.25 2.5625C33.25 2.25184 33.5018 2 33.8125 2V0C32.3973 0 31.25 1.14727 31.25 2.5625H33.25ZM33.8125 3.125C33.5018 3.125 33.25 2.87316 33.25 2.5625H31.25C31.25 3.97773 32.3973 5.125 33.8125 5.125V3.125ZM45.6653 3.125H33.8125V5.125H45.6653V3.125ZM20.9148 30.2898L46.3724 4.83211L44.9582 3.41789L19.5005 28.8755L20.9148 30.2898ZM20.9148 31.0852C20.6951 30.8656 20.6951 30.5094 20.9148 30.2898L19.5005 28.8755C18.4998 29.8763 18.4998 31.4987 19.5005 32.4995L20.9148 31.0852ZM21.7102 31.0852C21.4906 31.3049 21.1344 31.3049 20.9148 31.0852L19.5005 32.4995C20.5013 33.5002 22.1237 33.5002 23.1245 32.4995L21.7102 31.0852ZM47.1679 5.6276L21.7102 31.0852L23.1245 32.4995L48.5821 7.04182L47.1679 5.6276ZM48.875 18.1875V6.33471H46.875V18.1875H48.875ZM49.4375 18.75C49.1268 18.75 48.875 18.4982 48.875 18.1875H46.875C46.875 19.6027 48.0223 20.75 49.4375 20.75V18.75ZM50 18.1875C50 18.4982 49.7482 18.75 49.4375 18.75V20.75C50.8527 20.75 52 19.6027 52 18.1875H50ZM50 2.5625V18.1875H52V2.5625H50Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="project">
                        <h3 className="top">{projects.title}</h3>
                        <div className="project-tech">
                            {projects.tech}
                        </div>
                        <p>{projects.description}</p>
                        <h4>Objective:</h4>
                        <p>{projects.aim}</p>
                        <div className="links">
                            <a href={projects.github} target="_blank">
                                <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2438 10.2562 29.2313C11.0062 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8063 6.225 23.9625C6.05625 23.5313 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8688 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6563 10.4813 24.0188 11.3438 23.625C11.475 22.65 11.8687 21.9938 12.3 21.6188C8.9625 21.2438 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6563 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2438 17.7563 21.6188C18.3 22.0875 18.7688 22.9875 18.7688 24.3938C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0313 29.3813 19.7813 29.2313C22.759 28.226 25.3466 26.3122 27.1797 23.7593C29.0128 21.2064 29.9992 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                );
            }
        }
    );

    return (
        <section>
            <MobileContentHeader></MobileContentHeader>
            <DesktopLeftSideBar></DesktopLeftSideBar>
            <DesktopContentRightSideBar></DesktopContentRightSideBar>
            <main className="work">
                <h2>Projects</h2>
                <div className="content">
                    <div className="description">
                        <p>I have recently completed a Full Stack Software Development course at <a href="https://io-academy.uk/" target="_blank">iO Academy</a>.
                            While at iO I have worked on a range of applications designed to exercise and
                            showcase my technical knowledge, from building robust APIs to responsive UIs,
                            either individually or as part of a scrum team.</p>
                        <p>This is a selection of projects I've built ranging from PHP to TypeScript.
                        Feel free to test out the live apps and explore the code on <a href="https://github.com/henryppercy" target="_blank">Github</a>.</p>
                    </div>
                    <div className="line"></div>
                    <div className="projects">
                        {generateProjects}
                    </div>
                </div>
            </main>
            <MobileFooter></MobileFooter>
        </section>
    );
}

export default Work;