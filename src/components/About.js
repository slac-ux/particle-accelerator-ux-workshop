import React, { useState } from 'react';
import { FaPeopleArrows, FaHandsHelping, FaLightbulb, FaUsers, FaCalendarDay, FaBrain, FaFlagCheckered, FaCogs, FaChartBar } from 'react-icons/fa';
import './About.css';

const aboutContent = (
  <div className="about-section">
    <h2>About the Workshop</h2>
    <p>Join us to explore the importance of UI/UX in control systems and software applications at national laboratories.</p>
    <div className="about-details">
      {[
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
      ].map((item, index) => (
        <div className="about-card" key={index}>
          {item.icon}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const audienceContent = (
  <div className="about-section">
    <h2>Audience</h2>
    <p>Join a gathering of professionals to consolidate knowledge and best practices for control system applications and management tools.</p>
    <div className="audience-cards">
      {[
        {
          icon: <FaUsers className="audience-icon" />,
          title: 'UI/UX Experts',
          description: 'Designers focused on improving user experience and interfaces for control systems.',
        },
        {
          icon: <FaCogs className="audience-icon" />,
          title: 'Control System Specialists',
          description: 'Experts working with complex control systems in research and industrial settings.',
        },
        {
          icon: <FaChartBar className="audience-icon" />,
          title: 'Software Engineers',
          description: 'Engineers developing robust applications for operational excellence.',
        },
      ].map((item, index) => (
        <div className="audience-card" key={index}>
          <div className="audience-card-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const agendaContent = (
  <div className="about-section">
  <h2>Agenda</h2>
  <p>Explore a full-day schedule packed with keynote talks, interactive sessions, and networking opportunities.</p>
  <div className="about-details">
  <div className="agenda-day">
        <FaCalendarDay className="agenda-day-icon" />
        <div className="agenda-day-text">
          <h3>Day 1</h3>
          <p>Kick off with introductions, overview of the workshop’s goals, and participants mini-presentations (background, lessons, and challenges).</p>
        </div>
      </div>
      <div className="agenda-day">
        <FaBrain className="agenda-day-icon" />
        <div className="agenda-day-text">
          <h3>Day 2</h3>
          <p>Brainstorming groups or open sessions, white paper input, and component sketches.</p>
        </div>
      </div>
      <div className="agenda-day">
        <FaFlagCheckered className="agenda-day-icon" />
        <div className="agenda-day-text">
          <h3>Day 3</h3>
          <p>Wrap-up with next steps, goal-setting, and optional tours or excursions.</p>
        </div>
      </div>
  </div>
</div>
);

const tabs = [
  { label: 'About', content: aboutContent },
  { label: 'Audience', content: audienceContent },
  { label: 'Agenda', content: agendaContent },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="about-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default About;
