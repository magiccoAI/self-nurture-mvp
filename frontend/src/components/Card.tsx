import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card-container">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;