import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from '../assets/PageNotFound.png';

const NotFound = () => {
  return <div>
    <div>
      <img src={PageNotFound} alt="" style={{ marginTop: "10rem", marginLeft: "30%" }} />
      <div style={{ textAlign:"center", marginBottom:"2.2rem" }}>
        <h1>404 - Not Found</h1>
        <h3>
          <Link to="/">Go to Home </Link>
        </h3>
      </div>
    </div>
  </div>
};

export default NotFound;
