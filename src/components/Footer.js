import twittericon from "../images/twitter-icon.png";
import facebookicon from "../images/facebook-icon.png";
import instagramicon from "../images/instagram-icon.png";
import githubicon from "../images/github-icon.png";

function Footer() {
    return (
        <div className="footer">
            <img src={twittericon} alt="Twitter Icon" />
            <img src={facebookicon} alt="Facebook Icon" />
            <img src={instagramicon} alt="Instagram Icon" />
            <img src={githubicon} alt="Github Icon" />
        </div>
    );
}

export default Footer;