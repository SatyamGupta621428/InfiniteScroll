import React from 'react';
import './Card.css'; // Make sure to import the CSS file

function Card({ data }) {
  return (
    <div className="card-container">
      {data.length > 0 && data.map((item) => (
        <div className="card" key={item.id}>
          <p>Id: {item.id}</p>
          <h3>Title: {item.title}</h3>
          <h4>Description: {item.body}</h4>
        </div>
      ))}
    </div>
  );
}

export default Card;
