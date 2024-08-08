import { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + 100; // Adjust this value as needed

      sections.forEach(section => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav>
    <div className="header-container lato-light">
    <ul>
        <li className={activeSection === 'home' ? 'active' : ''}><a href="#home">Home</a></li>
        <li className={activeSection === 'projects' ? 'active' : ''}><a href="#projects">Projects</a></li>
        <li className={activeSection === 'experience' ? 'active' : ''}><a href="#experience">Experience</a></li>
        <li className={activeSection === 'skills' ? 'active' : ''}><a href="#skills">My Proficiencies</a></li>
        <li className={activeSection === 'contact' ? 'active' : ''}><a href="#contact">Contact</a></li>
      </ul>
    </div>
    </nav>
  );
};

export default Header;
