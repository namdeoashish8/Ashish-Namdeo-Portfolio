import * as React from "react";

const Home = () => {
  const myImg = "src/assets/1.jpg";

  return (
      <section id="home" className="home-page lato-light">
        <div className="name-pic home-animate-box">
          <div className="front-intro">
            <img src={myImg} alt="I wonder why!" />
            <div className="front-name">
              <h1>Hi, I'm Ashish Namdeo</h1>
              <p>Passionate to pursue new technology</p>
            </div>
          </div>
          <h4>
            I'm a Full-stack developer, always seeking to upskill. <br />
            Thrilled by emerging technologies, I translate their potential into real-world
            applications.
          </h4>
        </div>
        <div className="two-liner home-animate-box">
          <div className="front-intro2">
            <div className="accordians-container">
              <h3>Developer</h3>
              <h3>Automation Engineer</h3>
              <h3>Gamer</h3>
              <h3>Learner</h3>
            </div>
          </div>
          <div className="read-more">
            <p><a href="#projects">Please read more</a></p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#000000"
            >
              <path d="M444-768v438L243-531l-51 51 288 288 288-288-51-51-201 201v-438h-72Z" />
            </svg>
          </div>
        </div>
      </section>
  );
};

export default Home;
