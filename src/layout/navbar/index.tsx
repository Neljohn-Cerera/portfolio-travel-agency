import React from "react";

const Navbar = () => {
  return (
    <div className="h-24 shadow-lg flex">
      <div className="flex-1">
        <h3>Logo</h3>
      </div>
      <nav className="flex-1">
        <li>
          <ul>nav 1</ul>
          <ul>nav 2</ul>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
