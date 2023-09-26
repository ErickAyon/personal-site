import React from 'react';
import data from './data'; // Assuming data.js is in the same directory

const Project = () => {
  return (
    <div className="project">
      {data.map((item, index) => (
        <div key={index} className="project-item" style={{ backgroundImage: `url(/images/projects/yogaapp.jpg)` }}>
          <div className="project-info">
            <h2>{item.title}</h2>
            <h3>{item.subtitle}</h3>
            <p>{item.date}</p>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
