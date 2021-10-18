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

      return (
          <ul>
              { navItems.map(renderNavItem) }
          </ul>
      );
  };

  const renderNavItem = (item) => {
      if (item.children) return (
          <ul>
              { item.children.map(this) }
          </ul>
      );

      return <li key={ item.id } id={ item.id }>{ item.name }</li>;
  };

  return (
    <div className="App">
        { renderNav() }
    </div>
  );
}

export default App;
