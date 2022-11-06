import MobileContentHeader from "../components/MobileContentHeader";
import MobileFooter from "../components/MobileFooter";

const Contact = () => {
    return (
        <section>
            <MobileContentHeader></MobileContentHeader>

            <main className="work">
                <h2>Get In Touch</h2>
                <p>I’m currently open and looking for work so please get in touch if you have any Junior Developer roles available.</p>
                <p>The best way to reach me is to send an email but feel free to reach out on LinkedIn.</p>
                <div className="contact-info">
                    <p>Email: <a className="mailto:henrypercydev@gmail.com">henrypercydev@gmail.com</a></p>
                    <p>Socials: <a className="https://www.linkedin.com/in/henry-b-percy/">LinkedIn</a>, <a href="https://github.com/henryppercy">Github</a>, Slack</p>
                </div>
            </main>
            <MobileFooter></MobileFooter>
        </section>
    );
}

export default Contact;