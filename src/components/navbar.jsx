import React from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Shopping Cart{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
