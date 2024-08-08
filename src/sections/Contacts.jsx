import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contacts = () => {
  const avatar = "./src/assets/AshBorg.png";
  return (
    <section id="contact" className="contacts-section lato-light">
      <div className="contact-container">
        <img src={avatar} alt="I wonder" />
        <div className="contact-content">
          <h3>Do reach out</h3>
          <div className="contact-form">
            {/* <form action="submit-contact-form" method="post">
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form> */}
            <ul className="contact-details">
              <li>
                <a href="mailto:namdeoashish8@gmail.com"><MailOutlineIcon/></a>
                
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ashish-namdeo-ak/" target="_blank"><LinkedInIcon/>
                </a>
              </li>
              <li>
                <a href="https://github.com/namdeoashish8" target="_blank"><GitHubIcon/>
                </a>
              </li>
              <li>
                <a href="your-resume-link.pdf" target="_blank">
                  My Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
