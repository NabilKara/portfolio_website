import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"

import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

import CV from "../../assets/cv.pdf"
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ?  sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="Hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroImg} alt="profile picture" className={styles.hero} />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>KARA Nabil</h1>
        <h2>Cybersecuriy Student and full stack web developper</h2>
        <span>
          <a href="https://x.com/NabilKara12312" target="_blank ">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/NabilKara" target="_blank ">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/nabil-kara-42b1211aa/" target="_blank ">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With passion for developping websites using React.js, Vue.js, electron.js and Laravel, Also I'm a CTF player.
        </p>
        <a href={CV} download >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
