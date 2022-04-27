import profilepic from "../images/profile-pic.png";
import maillogo from "../images/mail-logo.png";
import linkedinlogo from "../images/linkedin-logo.png";

function Info() {
  return (
    <div>
      <div className="info-text">
        <img src={profilepic} alt="Profile Pic" />
        <h1>Braydon Wang</h1>
        <h3>Full Stack Developer</h3>
        <h4>braydonwang.github.io</h4>
      </div>
      <div className="info-button">
        <button
          onclick="window.location.href='https://w3docs.com';"
          className="info-mail"
        >
          <img src={maillogo} alt="Mail Logo" />
          <h2>Email</h2>
        </button>
        <button className="info-link">
          <img src={linkedinlogo} alt="LinkedIn Logo" />
          <h2>LinkedIn</h2>
        </button>
      </div>
    </div>
  );
}

export default Info;
