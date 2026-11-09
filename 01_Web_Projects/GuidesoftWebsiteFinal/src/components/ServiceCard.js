import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <Card className="h-100 glass border-0" style={{ borderRadius: '1.5rem' }}>
        <Card.Body className="text-center p-4">
          <div className="mb-4 d-inline-flex align-items-center justify-content-center gradient-bg rounded-circle" 
               style={{ width: '70px', height: '70px' }}>
            {typeof icon === 'string' ? (
              <i className={`fas ${icon} text-white`} style={{ fontSize: '1.8rem' }}></i>
            ) : (
              icon
            )}
          </div>
          <Card.Title className="fw-bold mb-3">{title}</Card.Title>
          <Card.Text className="text-muted mb-4">{description}</Card.Text>
          {link && (
            <Button 
              as={Link} 
              to={link} 
              className="btn-sm px-4 gradient-bg border-0 text-white"
            >
              Learn More →
            </Button>
          )}
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;