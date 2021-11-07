import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from './Data/data';
import Nav from './Components/Nav';

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

  return (
    <div className="App">
        <Nav loading={navLoading} items={navItems}/>
    </div>
  );
}

export default App;
