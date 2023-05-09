import React from "react";

export function Register() {
  return (
    <div>
      <section className="vh-100 gradient-custom ">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                Style="border-radius: 1rem;"
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-6">
                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up Now</h2>
                    <form className="needs-validation">
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline was-validated">
                            <input
                              type="text"
                              id="form3Example1"
                              className="form-control"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your Name
                            </div>
                            <label
                              className="form-label"
                              htmlFor="form3Example1"
                            >
                              First name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline was-validated">
                            <input
                              type="text"
                              id="form3Example2"
                              className="form-control"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your Last Name
                            </div>
                            <label
                              className="form-label"
                              htmlFor="form3Example2"
                            >
                              Last name
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-outline was-validated mb-4">
                        <input
                          type="text"
                          id="form3Example3"
                          className="form-control"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your Username
                        </div>
                        <label className="form-label" htmlFor="form3Example3">
                          Username
                        </label>
                      </div>
                      <div className="form-outline was-validated mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your email
                        </div>
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline was-validated mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password
                        </div>
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-1 btn-lg"
                      >
                        Sign up
                      </button>
                    </form>
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

/*
  <div class="form-check d-flex justify-content-center mb-4">
    <input
      class="form-check-input me-2"
      type="checkbox"
      value=""
      id="form2Example33"
      checked
    />
    <label class="form-check-label" for="form2Example33">
      Keep account active
    </label>
  </div>
  <section class="text-center text-lg-start">
        <style></style>
        <div class="container py-4">
          <div class="row g-0 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div
                class="card cascading-right"
                Style="
                background: hsla(0, 0%, 100%, 0.55);
                backdrop-filter: blur(30px);
                "
              >

 <form>
                    <div class="text-center">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        class="btn btn-link btn-floating mx-1"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-link btn-floating mx-1"
                      >
                        <i class="fab fa-google"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-link btn-floating mx-1"
                      >
                        <i class="fab fa-twitter"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-link btn-floating mx-1"
                      >
                        <i class="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                */
