import Typewriter from "typewriter-effect";

const Experience = () => {
  const ltimLogo = "src/assets/LTIMlogo.jpg";

  return (
    <section id="experience" className="expSkills-container lato-light">
      <div className="exp-profile">
        <img src={ltimLogo} alt="" />
        <p>Senior Quality Engineer</p>
        <h3>Dates of Employment: June 2020 – Present</h3>
      </div>
      <div className="job-line"></div>
      <div className="roles-ul">
        <h3>I currently work as</h3>
        <div className="typing-role">
          <Typewriter
            options={{
              loop: true,
              delay: 50, // Speed of typing
              deleteSpeed: 50, // Speed of deleting
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('<span class="red">Lead Automation Engineer</span>')
                .pauseFor(1000)
                .deleteAll()
                .typeString('<span class="green">and Functional Tester</span>')
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        <ul>
          <li>
            <h5>
              Led automation engineering efforts and conducted functional
              testing for the squad.
            </h5>
          </li>
          <li>
            <h5>
              Utilized a diverse set of tools, including Selenium, Java,
              Playwright, JIRA, WebdriverIO, Sauce Visual, and Cypress.
            </h5>
          </li>
          <li>
            <h5>
              Received multiple client commendations for exceptional
              performance.
            </h5>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
