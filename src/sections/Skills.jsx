
import { useState } from 'react';
// import { Card } from "@mui/material";

const skillCateg = [
  {
    categories: "Full-Stack Development Skills",
    skillsList: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    categories: "Automation Skills",
    skillsList: ["Playwright", "Selenium", "Java", "Sauce Visual"],
  },
  {
    categories: "Additional Key Skills",
    skillsList: [
      "JavaScript (ES6+)",
      "HTML/CSS",
      "Version Control (Git)",
      "RESTful APIs",
      "Agile",
    ],
  },
];

const SkillsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section id="skills" className="lato-light skills-section">
      <div className="skill-head">
        <h3>My Key Skills</h3>
      </div>
      <div className="skills-container">
        <div className="skill-categories">
          {skillCateg.map((categ, index) => {
            return (
              <div key={index} className={`category ${activeIndex === index ? 'active' : ''}`}>
                {categ.categories}
              </div>
            );
          })}
        </div>
        <div className="skills-content">
            {skillCateg.map((categ, index) => {
              return (
                <div className={`skill-card ${activeIndex === index ? 'active' : ''}`}
                 key={index}
                 onMouseEnter={() => handleMouseEnter(index)}
                 onMouseLeave={handleMouseLeave}>
                  <h3>{categ.categories}</h3>
                    {categ.skillsList.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-box">
                        {skill}
                      </div>
                    ))}
                </div>
              );
            })}
        </div> 
      </div>
    </section>
  );
};

export default SkillsSection;
