import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Erick Ayon's personal website. Wilmington University Computer Science Student (Class of 2023), "
    + 'Information Technology Analyst at Penn Medicine'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><a href="https://www.github.com/erickayon">Check out my github!</a></h2>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
