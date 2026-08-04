import profilePic from "../assets/Profile_pic_fix.png";

function Home() {
  return (
    <main className="home">

      {/* Hero Section
          This is the first section visitors see when
          they open my portfolio.
      */}
      <div className="hero">

        {/* ============================
            LEFT SIDE
            My introduction and buttons
        ============================ */}
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

          {/* Hero Buttons */}
          <div className="hero-buttons">

            <button className="hero-button">
              View My Projects
            </button>

            <button className="resume-button">
              Download Resume
            </button>

          </div>

          {/* Social Links */}
          <div className="social-links">

            <a
              href="https://github.com/JaKristanCavitt"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>

        {/* ============================
            RIGHT SIDE
            My professional picture
        ============================ */}
   <div className="hero-image">

  <img
    src={profilePic}
    alt="JaKristan Cavitt"
    className="profile-pic"
  />

</div>

      </div>

    </main>
  );
}

export default Home;