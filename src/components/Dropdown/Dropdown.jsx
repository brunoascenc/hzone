import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        <li>
          <Link className="dropdown-link" to="/apple">
            Apple
          </Link>
          <Link className="dropdown-link" to="/samsung">
            Samsung
          </Link>
          <Link className="dropdown-link" to="/motorola">
            Motorola
          </Link>
          <Link className="dropdown-link" to="/asus">
            Asus
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
