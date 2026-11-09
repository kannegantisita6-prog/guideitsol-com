import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const Testimonial = ({ name, company, content, rating = 5 }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <div className="mb-3">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="text-warning" />
          ))}
        </div>
        <Card.Text className="fst-italic">"{content}"</Card.Text>
        <div className="mt-3">
          <strong>{name}</strong>
          <br />
          <small className="text-muted">{company}</small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Testimonial;