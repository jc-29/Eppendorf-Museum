import React, { useState } from "react";
import Homebox from "../components/homebox";
import { Route, Link, Switch, withRouter, Redirect } from "react-router-dom";

export default function Homepage(props) {
  return (
    <>
      <img src="https://static.eppendorf.com/assets/website/images/logoEppendorf.png" />
      <h1 style={{ textAlign: "center", paddingBottom: "10vh" }}>
        Welcome to the Eppendorf Gallery
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <Link
          to="/product/history"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Homebox />
        </Link>
        <Link
          to="/product/history"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Homebox />
        </Link>
        <Link
          to="/product/history"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Homebox />
        </Link>
      </div>
    </>
  );
}
