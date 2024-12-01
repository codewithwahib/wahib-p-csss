import React from 'react';
import Heading from './Heading';
import Card from './Card'; // Keep this import, but remove the redefined Card // Import the CSS file
  // Ensure that heading.css exists in the same folder
import "@/app/styles/projects.css"
const data = [
  {
    id: "0",
    title: "Task Manager",
    desc: "Efficiently streamlined workflows and enhanced productivity with a user-friendly Task Manager application.",
    img: "/task.png",
  },
  {
    id: "1",
    title: "Weather Application",
    desc: "Developed a dynamic Weather App delivering real-time forecasts with a sleek and intuitive interface.",
    img: "/image.png",
  },
  {
    id: "2",
    title: "Music Player",
    desc: "Created an interactive music player with album art display and custom playlists.",
    img: "/download.png",
  },
  {
    id: "3",
    title: "Blog Website",
    desc: "Designed and developed a responsive Blog Website with dynamic content management and engaging user experience.",
    img: "/blog.png",
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
