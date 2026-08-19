import React from "react";

// Import the ProfileCard component from ProfileCard.js.
import ProfileCard from "./ProfileCard";
// Import the CSS file to apply styles to the React components.
import "./style.css";

const App = () => {
  // Create an array containing employee profile objects.
  const emplprofile = [
    {
      // Profile image URL
      image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      // Employee name
      name: "John Doe",
      // Employee job title
      jobTitle: "Frontend Developer",
      // Short description about the employee
      bio: "Passionate about creating user-friendly web applications.",
      // Array of employee skills
      skills: ["React", "JavaScript", "HTML", "CSS", "Git"],
    },

    {
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      name: "Jane Smith",
      jobTitle: "UI/UX Designer",
      bio: "Loves creating simple and beautiful user experiences.",
      skills: ["Figma", "UI Design", "UX Research", "Prototyping", "Adobe XD"],
    },

    {
      image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      name: "Mike Johnson",
      jobTitle: "Backend Developer",
      bio: "Enjoys building reliable and scalable applications.",
      skills: ["Node.js", "Python", "SQL", "MongoDB", "REST API"],
    },
  ];

  return (
    <div className="app">
      {/* Main page title */}
      <h1>Employee Profile</h1>

      {/* 
        map() loops through every employee profile.
        "item" represents the current employee object.
      */}
      {emplprofile.map((item) => {
        // Return one ProfileCard component for each employee.
        return (
          <ProfileCard
            // key gives React a unique identifier for each component.
            key={item.name}

            // Pass the employee data to ProfileCard as props.
            image={item.image}
            name={item.name}
            jobTitle={item.jobTitle}
            bio={item.bio}
            skills={item.skills}
          />
        );
      })}
    </div>
  );
};

export default App;