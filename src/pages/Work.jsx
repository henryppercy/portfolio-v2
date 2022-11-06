import MobileContentHeader from "../components/MobileContentHeader";
import MobileFooter from "../components/MobileFooter";

const Work = () => {
    return (
        <section>
            <MobileContentHeader></MobileContentHeader>

            <main className="work">
                <h2>Work</h2>
                <p>This is a selection of projects and products that I have built ranging from PHP to React. Feel free to test out the live apps and explore the code on <a href="https://github.com/henryppercy">Github</a>.</p>
                <div className="projects">
                    <h3>The Coffee Collection</h3>
                    <p>PHP / SQL</p>
                    <h3>Hawk Maze</h3>
                    <p>JavaScript</p>
                    <h3>React Invoicing</h3>
                    <p>JavaScript / React / Bootstrap</p>
                    <h3>Furniture Store API</h3>
                    <p>PHP / OOP </p>
                    <h3>Academy Portal</h3>
                    <p>PHP / SQL</p>
                    <h3>Operating System</h3>
                    <p>TypeScript / React / SASS</p>
                </div>
            </main>

            <MobileFooter></MobileFooter>
        </section>
    );
}

export default Work;