import "../style/Info.css";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

function Info(){
    return (
        <div>
            <img class="profile" src="/profile.jpg" alt="Profile Card."/>
            <h1>Richard Alvin Pratama</h1>
            <h3>Cloud-Backend-IoT</h3>
            <h3>richardalvinpratama8@gmail.com</h3>
            <a class="btn btn-email" href="https://github.com/RichardAlvin"><FaGithub/>  Github</a>
            <a class="btn btn-linked" href="https://www.linkedin.com/in/richard-alvin-pratama-b03a27214/"><FaLinkedin/>  LinkedIn</a>
        </div>
    )
}

export default Info;