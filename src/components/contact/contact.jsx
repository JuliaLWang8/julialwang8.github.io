import "./contact.scss";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import MessageIcon from "@material-ui/icons/Message";
// import Photo from "../../media/MeWithRobot.png";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="title">
        <h1>CONTACT</h1>
        <h2>ME.</h2>
      </div>
      <div className="row">
        <div className="card-container">
          <div className="card">
            <div className="icon-container">
              <CallIcon className="icon" />
            </div>
            <h1>Phone</h1>
            <p>
              <a href="tel:+14088540152">+1(408) 854-0152</a>
            </p>
            <div></div>
          </div>
          <div className="card">
            <div className="icon-container">
              <EmailIcon className="icon" />
            </div>
            <h1>Email </h1>
            <p>
              <a href="mailto:julialong.wang@mail.utoronto.ca">
                julialong.wang@ mail.utoronto.ca
              </a>
            </p>
            <div></div>
          </div>
          <div className="card">
            <div className="icon-container">
              <MessageIcon className="icon" />
            </div>
            <h1>Connect</h1>
            <p>
              <a
                href="https://www.linkedin.com/in/julia-long-wang/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <div></div>
          </div>
        </div>
      </div>
      <p>Like this website? Check out my full React.js and SCSS code on this <a
                href="https://github.com/JuliaLWang8/julialwang8.github.io"
                target="_blank"
                rel="noreferrer"
              >
                GitHub repository
              </a>.</p>
    </div>
  );
}
