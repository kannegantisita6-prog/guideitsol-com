import React, { useState, useEffect } from 'react';
import { Counter } from './counter';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className="glass-effect p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Guidesoft Solutions</h1>
        <button 
          onClick={toggleDarkMode}
          className="glass-effect px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <section className="glass-effect rounded-xl p-8 mb-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Guidesoft Solutions</h2>
          <p className="text-xl mb-6">Your partner in innovative IT solutions</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
              <p>Modern, responsive websites and applications</p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">Mobile Apps</h3>
              <p>Cross-platform mobile solutions</p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
              <p>Beautiful, intuitive user experiences</p>
            </div>
          </div>
          <div className="mt-8">
            <Counter />
          </div>
        </section>
      </main>
      
      <footer className="glass-effect p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Guidesoft Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;