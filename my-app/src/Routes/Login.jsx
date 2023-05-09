import React from "react";
import "../App.css";

export function Login() {
  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                Style="border-radius: 1rem;"
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>
                    <form className="needs-validation">
                      <div className="form-outline form-white mb-4 was-validated">
                        <label className="form-label" for="typeEmailX">
                          Email
                        </label>
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="Write your Email"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your email
                        </div>
                      </div>

                      <div className="form-outline was-validated form-white mb-4">
                        <label className="form-label" typeof="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          placeholder="Write your Password"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="checkbox"
                          className="form-check-input"
                        ></input>
                        <label htmlFor="check" className="form-check-label">
                          Remember me!
                        </label>
                      </div>
                      <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>
                    </form>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a href="/register" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* <div>
      <form>
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="Write your e-mail"
        />
        <input
          type="password"
          name="Password"
          id="password"
          placeholder="Write your password"
        />
      </form>
    </div> */
