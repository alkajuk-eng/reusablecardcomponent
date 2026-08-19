import React from "react";

// Create the ProfileCard React component.
// Destructure the props object to get the values we need.
const ProfileCard = ({ image, name, jobTitle, bio, skills }) => {
  return (
    <div className="profile-card">
      {/* Display the profile image */}
      <img src={image} alt={name} />

      {/* Display the person's name */}
      <h1>{name}</h1>

      {/* Display the person's job title */}
      <h2>{jobTitle}</h2>

      {/* Display the person's biography */}
      <p>{bio}</p>

      {/* Loop through the skills array */}
      {skills.map((item) => {
        // Create an h3 element for each skill.
        // The key helps React identify each element in the list.
        return <h3 key={item}>{item}</h3>;
      })}
    </div>
  );
};

// Export the component so it can be used in other files.
export default ProfileCard;