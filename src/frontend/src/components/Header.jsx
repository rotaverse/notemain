import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const handleClick = () => {
        navigate('/');
  };

  return (
<header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to='/products'>
              Products
            </NavLink>
          </li>
          <li>
            <button onClick={handleClick}>Home</button>
          </li>
        </ul>
        
      </nav>
    </header>
  );
}

export default Header;
