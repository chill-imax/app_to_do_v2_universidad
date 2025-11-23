import React from "react";
import { NavbarHP } from "../components/NavbarHP";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <NavbarHP />

      <div
        className="tarjetasjtron"
        style={{
          alignItems: "center",
          fontSize: "x-large",
        }}
      >
        <div className="card" style={{ width: "60rem", margin: "25px" }}>
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-time-management-concept-illustration_52683-54970.jpg?t=st=1685309788~exp=1685310388~hmac=c8758ff4c09bd562db7ae27e195ff3a01b18e850d4b8db48e530f98f4817e78f"
            alt="order"
          />

          <div className="card-body">
            <p className="card-text">
              "With order and time lies the secret of doing everything, and
              doing it well"
            </p>
            <p className="fs-6 text-end">Pythagoras.</p>
          </div>
        </div>
      </div>
      <div>
        <h2
          className="fs-1"
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            color: "white",
            fontSize: "xx-large",
            margin: "2% 5%",
          }}
        >
          KEEP YOUR LIFE ORGANIZED
        </h2>
      </div>
      <div className="d-grid gap-2">
        <div className="">
          <Link to="/signup">
            <button
              className="btn btn-light"
              style={{
                maxWidth: "60rem",
                width: "89%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "x-large",
                margin: "0 auto",
              }}
              type="button"
            >
              JOIN US
            </button>
          </Link>
        </div>
      </div>
      <div
        className="tarjetas"
        style={{
          maxWidth: "60rem",
          marginTop: "40px",
        }}
      >
        <div
          className="card"
          style={{ width: "18rem", alignItems: "center", fontSize: "large" }}
        >
          <img
            src="https://img.freepik.com/free-vector/flat-time-management-concept-illustration-with-hourglass-human-character_1284-63671.jpg?t=st=1685306961~exp=1685307561~hmac=7f7964801f68d52e208fd04d5a5b2b0a207b520d8fc437bb58b31bdaf7fe2c1e"
            alt="Save Time"
          />
          <div className="card-body">
            <p className="card-text text-uppercase">Save time</p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "18rem",
            alignItems: "center",
            fontSize: "large",
          }}
        >
          <img
            src="https://img.freepik.com/free-psd/3d-rendering-graphic-design-element_23-2149412223.jpg?t=st=1685158091~exp=1685158691~hmac=28ef2deedc8e79c5ddf766306b1b791e4edb5626786c761df2bf2d7d14bb7f65"
            alt="Organization"
          />
          <div className="card-body">
            <p className="card-text">PRIORIZE YOUR TASKS</p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "18rem",
            alignItems: "center",
            fontSize: "large",
          }}
        >
          <img
            src="https://img.freepik.com/free-vector/inside-country-traveling-abstract-concept-illustration_335657-3912.jpg?t=st=1685157271~exp=1685157871~hmac=e7c219ecb88e437f64c57bcdcb0f420912856284ab0db44d1c1e77d2135c52de"
            alt="Where you Want"
          />
          <div className="card-body">
            <p className="card-text text-uppercase">USE IT ANYWHERE</p>
          </div>
        </div>
      </div>

      <footer className="py-3 my-4 border-top">
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <p className="fs-6">© 2023 - CHILLIMAX - ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
