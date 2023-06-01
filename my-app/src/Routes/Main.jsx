import React from "react";
import SideBar from "../components/SideBar";
import "../App.css";

export function Main() {
  return (
    <div className="fondodegrade">
      <SideBar />
      <section className="row d-flex justify-content-center align-items-center h-100">
        <div className="card mb-2 main" style={{ width: "90%" }}>
          <h2>Welcome Alejandra!</h2>
          <br />
        </div>
        <div
          className="card mb-2 main2"
          style={{ width: "90%", height: "20cm" }}
        ></div>
      </section>
    </div>
  );
}
