import profilePic from "../assets/Profile_pic_fix.png";
import { useNavigate } from "react-router-dom";

/* Import social media icons from React Icons (Font Awesome) */
import {
  FaEnvelope,   // Email icon
  FaGithub,     // GitHub icon
  FaLinkedin,   // LinkedIn icon
  FaInstagram,  // Instagram icon
  FaFacebook,   // Facebook icon
  FaLaptopCode,
  FaCode,
  FaFileDownload,
  FaPaperPlane,
} from "react-icons/fa";

/*
  "fa" = Font Awesome icons.
  These icons come from the
  react-icons package we installed
  using:
  npm install react-icons
*/



function Home() {
  const navigate = useNavigate();   //used to navigate to project page when button is clicked
  return (
    <main className="home">

      {/* Social sidebar — only appears on Home */}
      <div className="social-sidebar">
        <a
          href="https://github.com/JaKristanCavitt"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/jakristan-cavitt-a1970b219"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://facebook.com/YOURUSERNAME"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        <a
          href="https://instagram.com/YOURUSERNAME"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:YOUR-EMAIL"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Hero Section */}
      <div className="hero">

        {/* Left side */}
        <div className="hero-text">

          <p className="hero-intro">
            WELCOME TO MY PORTFOLIO
          </p>

          <h2 className="hero-name">
            JaKristan Cavitt
          </h2>

          <h3>Software Developer</h3>

          <p>Aspiring Software Developer</p>

          <p className="hero-description">
            I'm an aspiring software developer passionate about building
            modern, responsive web applications. I enjoy turning ideas
            into clean, functional websites while continuously improving
            my skills in JavaScript, React, and front-end development.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-button"
              onClick={() => {
                // Goes to the Projects page
                navigate("/projects");

                // Moves to the top of the page
                window.scrollTo(0, 0);
              }}
            >
              View My Projects
            </button>


            <a
              href={`${import.meta.env.BASE_URL}Jakristan_Cavitt_Resume.pdf`}
              className="resume-button"
              download="Jakristan_Cavitt_Resume.pdf"
            >
              Download Resume
            </a>
          </div>



        </div>

        {/* Right side */}
        <div className="hero-image">
          <img
            src={profilePic}
            alt="JaKristan Cavitt"
            className="profile-pic"
          />
        </div>

      </div><section className="quick-links">

        <div
          className="quick-card"
          onClick={() => navigate("/projects")}  // Navigate to projects page when clicked
        >

          <FaLaptopCode className="quick-icon" />

          <h3>Featured Projects</h3>

          <p>
            Explore my best web development projects.
          </p>

        </div>

        <div
          className="quick-card"

          /* Takes the user to the Skills page */
          onClick={() => {

            /* Navigates to the Skills page */
            navigate("/skills");

            /* Scrolls to the top of the page */
            window.scrollTo(0, 0);

          }}

        >
          <FaCode className="quick-icon" />

          <h3>Tech Stack</h3>

          <p>
            View the languages and tools I use.
          </p>
        </div>


        <div
          className="quick-card"
          onClick={() => {
            const link = document.createElement("a");    //used to create a temporary link element for downloading the resume

            link.href = `${import.meta.env.BASE_URL}Jakristan_Cavitt_Resume.pdf`;

            link.download = "Jakristan_Cavitt_Resume.pdf";

            /* Adds the download link to the webpage */
            document.body.appendChild(link);

            /* Automatically clicks the link to start the download */
            link.click();

            /* Removes the link after the download starts */
            document.body.removeChild(link);
          }}
        >
          <FaFileDownload className="quick-icon" />

          <h3>Resume</h3>

          <p>Download my latest resume.</p>
        </div>

        <div
          className="quick-card"
          onClick={() =>
            window.open("https://github.com/JaKristanCavitt", "_blank")    // Opens GitHub profile in a new tab when clicked
          }
        >
          <FaGithub className="quick-icon" />

          <h3>GitHub</h3>

          <p>
            Link for current and future projects and code samples.
          </p>
        </div>

        <div
          className="quick-card"
          onClick={() => {
            // Goes to the Contact page
            navigate("/contact");

            // Moves to the top of the page
            window.scrollTo(0, 0);
          }}
        >
          <FaPaperPlane className="quick-icon" />

          <h3>Let's Connect</h3>

          <p>
            Contact me for opportunities or collaborations.
          </p>
        </div>


      </section>

    </main>
  );
}

export default Home;