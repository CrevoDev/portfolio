import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactComponent() {
    return (
        <>
            <div className="contact-link" key="linkedin">
                <FaLinkedin />
                <a href="https://www.linkedin.com/in/cleverson-pedroso-9a8226287" target='_blank' rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact-link" key="github">
                <FaGithub />
                <a href="https://github.com/CrevoDev" target='_blank' rel="noopener noreferrer">GitHub</a>
            </div>
        </>
    )
}