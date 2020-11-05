import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="admin-header-container">
      <Link to="/" className="logo"></Link>
      {/* <div className="search-container">
        <input placeholder="Search" />
      </div> */}
    </div>
  )
}
