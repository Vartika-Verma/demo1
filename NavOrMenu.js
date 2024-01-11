import React, { useState } from 'react';
import Navbar from './Nav';

function NavOrMenu() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <div>
      
      <Navbar className={isNavActive ? 'nav-list active' : 'nav-list'} />
    </div>
  );
}

export default NavOrMenu;
