function Skills() {
  return (
    <main className="skills-page">

      <div className="skills-header">
        <p className="skills-intro">WHAT I WORK WITH</p>

        <h1>My Skills</h1>

        <p className="skills-description">
          These are the technologies and tools I use to build responsive,
          user-friendly web applications.
        </p>
      </div>

      <section className="skills-container">

        <div className="skill-category">
          <h2>Frontend Development</h2>

          <div className="skills-grid">
            <div className="skill-card">HTML</div>
            <div className="skill-card">CSS</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">React</div>
            <div className="skill-card">Bootstrap</div>
            <div className="skill-card">Tailwind CSS</div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Programming and Data</h2>

          <div className="skills-grid">
            <div className="skill-card">Python</div>
            <div className="skill-card">SQL</div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Tools and Workflow</h2>

          <div className="skills-grid">
            <div className="skill-card">Git</div>
            <div className="skill-card">GitHub</div>
            <div className="skill-card">VS Code</div>
            <div className="skill-card">Vite</div>
            <div className="skill-card">npm</div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Professional Skills</h2>

          <div className="skills-grid">
            <div className="skill-card">Problem Solving</div>
            <div className="skill-card">Troubleshooting</div>
            <div className="skill-card">Adaptability</div>
            <div className="skill-card">Teamwork</div>
          </div>
        </div>

      </section>

    </main>
  );
}

export default Skills;