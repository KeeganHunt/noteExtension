import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

export default Welcome;