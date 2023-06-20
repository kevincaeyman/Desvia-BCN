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
              <a>Information</a>
            </li>
            <li>
              <a>Discover</a>
            </li>
            <li>
              <a>Mobility</a>
            </li>
            <li>
              <a>About us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
