import "./AboutMeStyle.css";
import myProfile from "../../images/profile-image2.jpg";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>Hey there, 👋</h3>
        I'm <span> Anupam </span>, a final year student pursuing{" "}
        <span>B.Tech in CSE </span> from Jaipur Rajasthan, India. I build
        websites with a focus on responsiveness, accessibility and pleasing
        aesthetics. Being well versed in all the key languages allows me to
        rapidly design, code and deploy in an organized and efficient manner.
        While I specialize in <span>frontend development,</span> I'm also
        delving into <span>backend technologies.</span> I'm all ears for{" "}
        <span>new opportunities</span> to create awesome software solutions.
        Let's team up and cook up some digital wonders together.
        <br /> <br />
        Want to know more about me? Feel free to{" "}
        <a className="resume" href="" target="_blank" rel="noopener noreferrer">
          explore my resume.
        </a>
      </div>
      <div className="profile-photo">
        <div className="heading"> About Me</div>
        <img className="img" src={myProfile} alt="Profile" />
      </div>
      <div className="name">Anupam</div>
    </div>
  );
}
