import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from './Data/data';

function App() {
  const [navLoading, setNavLoading] = useState(true);
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
      fetchData()
          .then(data => {
            setNavItems(data);
            setNavLoading(false);
          });
  }, [navItems]);

  const renderNav = () => {
      if (navLoading) return 'loading...';

      return navItems.map(i =>
          <li>{ i.name }</li>
      );
  };

  return (
    <div className="App">
        { renderNav() }
    </div>
  );
}

export default App;
