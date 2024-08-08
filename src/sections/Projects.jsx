import Box from "@mui/material/Box";

const Projects = () => {
  const nextGearUpLogo = "src/assets/gearup.jpg";
  const JDPILogo = "src/assets/JDPI2.jpg";

  return (
    <section id="projects" className="project-page lato-light">
      <div className="project-container">
        <div className="project-title">
          <p
            className="project-big-font"
            style={{ fontSize: "100px", lineHeight: "0" }}
          >
            PROJECTS
          </p>
          <p
            className="project-small-font"
            style={{ fontSize: "25px", lineHeight: "0" }}
          >
            made with MERN Stack
          </p>
        </div>
        <Box
          sx={{
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
            },
          }}
        >
          <div className="project-paper lato-light ">
            <div className="project-2 project-animate-box">
              <img src={nextGearUpLogo} alt="" />
              <h3>NextGearUp</h3>
              <p>React Project integrated with Firebase DB</p>
              <div className="line"></div>
              <p>
                A dynamic React-powered e-commerce site for bicycles, offering
                seamless search, detailed product views, a user-friendly cart,
                and secure payment options for a smooth shopping experience.
              </p>
            </div>
            <div className="project-2 project-animate-box">
              <img src={JDPILogo} alt="" />
              <h3>M-SAND Mining</h3>
              <p>Live Project based on MERN stack</p>
              <div className="line"></div>
              <p>
                A live React application for a mining firm to manage attendance,
                expenses, inventory, and sales with comprehensive logging and
                reporting features.
              </p>
            </div>
            <div className="project-2 project-animate-box">
              <img src={nextGearUpLogo} alt="" />
              <h3>Awaas-Vishwa</h3>
              <p>React Project with MongoDB</p>
              <div className="line"></div>
              <p>
                A React application for users to list, search, rent, and sell
                properties, featuring advanced search, user authentication, and
                secure payment integration.
              </p>
            </div>
          </div>
        </Box>
      </div>
    </section>
  );
};

export default Projects;
