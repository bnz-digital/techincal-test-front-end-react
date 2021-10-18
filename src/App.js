import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from './Data/data';

function App() {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
      fetchData()
          .then(data => setNavItems(data))
  }, [navItems]);

  const renderNav = () => {
      // TODO: Loading state set by useEffect
      if (!navItems.length) return 'loading...';

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
