import React from 'react';
import Heading from './Heading';
import Card from './Card'; // Keep this import, but remove the redefined Card // Import the CSS file
  // Ensure that heading.css exists in the same folder
import "@/app/styles/projects.css"
const data = [
  {
    id: "0",
    title: "Blog Website",
    desc: "Showcasing my journey, projects, and insights—welcome to my personal blog and portfolio.",
    img: "/blog.png",
  },
  {
    id: "1",
    title: "Streaming Platform",
    desc: "Your gateway to endless entertainment—stream movies, shows, and live events anytime, anywhere!",
    img: "/download.png",
  },
  {
    id: "2",
    title: "Weather Application",
    desc: "Stay ahead of the skies with real-time forecasts and weather updates—your reliable weather companion!",
    img: "/image.png",
  },
  {
    id: "3",
    title: "Task Manager",
    desc: "Organize, prioritize, and conquer your day with ease—your ultimate task management solution!",
    img: "/task.png",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            className="card-hover" // Hover outline effect on the card
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
