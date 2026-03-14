import './Hero.css';
import heroImg from '../../assets/jahidulSanyPro.jpg';
import twitter from '../../assets/twitter-light.svg';
import github from '../../assets/github-light.svg';
import linkedin from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';

function Hero() {
  return (
    <section id="hero" className="hero-container">
      <div className="avatar-wrapper">
        <img
          src={heroImg}
          className="hero-avatar shadow-lg"
          alt="Profile picture of Jahidul Sany"
        />
      </div>

      <div className="profile-info">
        <h1 className="display-name">
          Jahidul <span className="text-primary">Sany</span>
        </h1>
        <h2 className="job-title">Full Stack Developer</h2>

        <div className="social-links">
          <a
            href="https://twitter.com/Jahidul__Sany"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="Twitter icon" />
          </a>
          <a
            href="https://github.com/JahidulSany/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jahidul-sany/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin icon" />
          </a>
        </div>

        <p className="profile-desc">
          With a passion for developing modern web apps <br /> for commercial
          businesses.
        </p>

        <a href={CV} download>
          <button >Download Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
