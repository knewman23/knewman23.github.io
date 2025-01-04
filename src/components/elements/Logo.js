import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link 
        className="navbar-brand d-flex align-items-center" 
        to="/"
        style={{ marginLeft: "5px" }}
      >
        <img 
          className="img-fluid" 
          style={{ marginLeft: "5px" }}
          src={logoSource} 
          alt="Krys Newman" 
        />
      </Link>
    );
  }
  
  return (
    <div className="site-logo flex align-items-center">
      <Link className="flex align-items-center" to="/" style={{ display: "flex" }}> 
        <img 
          className="img-fluid" 
          src={logoSource} 
          alt="Krys Newman" 
        />
      </Link>
    </div>
  );  
}

export default Logo;
