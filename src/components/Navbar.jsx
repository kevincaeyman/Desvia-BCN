import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <p className='btn btn-ghost normal-case text-xl logo'>Des/vía</p>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a className='nav_text'>Information</a>
            </li>
            <li>
              <a className='nav_text'>Discover</a>
            </li>
            <li>
              <a className='nav_text'>Mobility</a>
            </li>
            <li>
              <a className='nav_text'>About us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
