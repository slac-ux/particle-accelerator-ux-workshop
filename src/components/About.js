import React from 'react';
import { FaPeopleArrows, FaHandsHelping, FaLightbulb } from 'react-icons/fa';
import './About.css';

const aboutData = [
  {
    icon: <FaPeopleArrows className="about-icon" />,
    title: 'Networking',
    description: 'Connect with professionals from various national laboratories and share insights on UI/UX practices.',
  },
  {
    icon: <FaHandsHelping className="about-icon" />,
    title: 'Hands-On Sessions',
    description: 'Participate in interactive workshops that focus on practical applications of UI/UX in control systems.',
  },
  {
    icon: <FaLightbulb className="about-icon" />,
    title: 'Innovative Solutions',
    description: 'Explore cutting-edge solutions and discuss how UI/UX can enhance software applications.',
  },
];

const About = () => {
  return (
    <div className="about-section">
      <h2>About the Workshop</h2>
      <p>Join us to explore the importance of UI/UX in control systems and software applications at national laboratories.</p>
      <div className="about-details">
        {aboutData.map((item, index) => (
          <div className={`about-card ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
