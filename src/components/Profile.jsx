import React from "react";

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      <img className="photo" src={image} alt="avartar" />
      {isNew && <span className="new">new</span>}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
