import React, { useState } from "react";

export default function Homebox() {
  return (
    <div
      style={{
        height: "23vw",
        width: "30vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: "10px 10px 10px #cfcfcf",
        borderRadius: "5px",
        backgroundColor: "#fffdf5"
      }}
    >
      <img
        src="https://atasouthport.com/wp-content/uploads/2017/04/default-image.jpg"
        style={{ width: "100%", maxHeight: "40vh", borderRadius: "5px" }}
      />
      <div>
        <h3>Product Name</h3>
      </div>
    </div>
  );
}
