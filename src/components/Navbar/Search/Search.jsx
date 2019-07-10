import React, { useState } from "react";
import "./Search.css";

export default function Search(props) {
  const [user, setUser] = useState("");
  const handleChange = event => {
    setUser(event.target.value);
  };

  return (
    <React.Fragment>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={user}
        onChange={handleChange}
        data={user}
      />
    </React.Fragment>
  );
}
