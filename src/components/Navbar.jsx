import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const NavBar = () => {

  const [active, setActive] = useState("");


  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          // THE FOLLOWING TO = / BRINGS US TO THE TOP OF PAGE, BUILT IN WITH REACT ROUTER DOM
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            // SettingActive to nothing implies we are at top of page
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* within this link we want to render an image */}
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        </Link>
      </div>
    </nav>
  )
}

export default NavBar