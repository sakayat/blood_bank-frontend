import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar sticky inset-x-0 top-0 z-10">
      <nav class="bg-white text-black border-b">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between h-20">
            <div class="logo">
              <a href="http://">UR Blood</a>
            </div>
            <ul class="flex items-center gap-8" id="nav-links">
              <li>
                <NavLink href="http://" class="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink href="">Login</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Signup</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
