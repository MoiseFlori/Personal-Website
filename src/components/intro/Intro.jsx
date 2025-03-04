import styles from "./Intro.module.css";
import profile from "/images/moiseflori.jpg";
import { Typewriter } from "react-simple-typewriter";

const Intro = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutText}>
        <h1>Hello, I'm</h1>
        <h2>
          Moise <span>Flori</span>
        </h2>
        <h3>
          And I'm a{" "}
          <span className={styles.highlight}>
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Front-End Developer",
                "Web Developer",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
              wrapper="span" /* Adaugă wrapper ca să nu se întindă cursorul aiurea */
            />
          </span>
        </h3>
        <p>
          "Hey there! I'm Moise Flori, a front-end developer who turns coffee
          into clean code and bugs into features. I craft seamless and
          interactive web experiences using HTML, CSS, JavaScript, React, and
          Node.js.
        </p>
        <p>
          When I'm not debugging, you’ll find me pretending to understand why my
          code works. Let’s build something awesome—preferably without breaking
          production! 😄"
        </p>
        <a
          href="/cv.pdf"
          download="Moise_Flori_CV.pdf"
          className={styles.downloadBtn}
        >
          Download CV
        </a>
      </div>
      <div className={styles.aboutImage}>
        <div className={styles.glowRing}></div>
        <img src={profile} alt="Moise Flori" className={styles.profileImg} />
      </div>
    </section>
  );
};

export default Intro;
