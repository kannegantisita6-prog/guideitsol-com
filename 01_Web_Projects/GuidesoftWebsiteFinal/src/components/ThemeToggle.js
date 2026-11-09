import React from 'react';
import { Button } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <Button
      variant="outline-secondary"
      size="sm"
      onClick={toggleTheme}
      className="d-flex align-items-center"
    >
      {isDarkMode ? <FaSun className="me-1" /> : <FaMoon className="me-1" />}
      {isDarkMode ? 'Light' : 'Dark'}
    </Button>
  );
};

export default ThemeToggle;