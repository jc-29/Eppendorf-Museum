import React, { useState } from "react";
import Homebox from "../components/homebox";
import { Route, Link, Switch, withRouter, Redirect } from "react-router-dom";

export default function Homepage(props) {
  const handleClick = () => {
    console.log(props);
  };
  return (
    <>
      <h1
        style={{ textAlign: "center", paddingBottom: "10vh" }}
        onClick={handleClick()}
      >
        Welcome to the Eppendorf Gallery
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <Link to="/test" style={{ textDecoration: "none", color: "black" }}>
          <Homebox onClick={e => handleClick(e)} />
        </Link>
        <Link to="/test" style={{ textDecoration: "none", color: "black" }}>
          <Homebox onClick={e => handleClick(e)} />
        </Link>
        <Link to="/test" style={{ textDecoration: "none", color: "black" }}>
          <Homebox onClick={e => handleClick(e)} />
        </Link>
      </div>
    </>
  );
}
