import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/erick.JPG`} alt="" />
      </Link>
      <header>
        <h2>Erick Ayon</h2>
        <p><a href="mailto:erickayon@outlook.com">erickayon@outlook.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
        <p>Hi, I&apos;m Erick. I am a Computer Science student (Class of 2024) and lover of
        all things coding. Outside of school, I work as an IT Analyst at Penn Medicine. I am
            currently looking for full-time opportunities.
            On this site you can find my resume and personal projects.
        </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
