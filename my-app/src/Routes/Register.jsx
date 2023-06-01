import { useState } from "react";
import { useAuth } from "../contex/authContex";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const { signup } = useAuth();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <section className="fondodegrade">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5">
                  <div className="mb-md-5 mt-md-4 pb-6">
                    <div className="text-center">
                      <h2 className="fw-bold mb-5 text-uppercase">Sign Up</h2>
                    </div>
                    {error && <p>{error}</p>}
                    <form className="needs-validation" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline was-validated">
                            <label className="form-label">First name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              required
                              onChange={handleChange}
                            />
                            <div className="invalid-feedback">
                              Please enter your Name
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline was-validated">
                            <label className="form-label">Last name</label>
                            <input
                              type="text"
                              name="lastName"
                              className="form-control"
                              required
                              onChange={handleChange}
                            />
                            <div className="invalid-feedback">
                              Please enter your Last Name
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-outline was-validated mb-4">
                        <label className="form-label">UserName</label>
                        <input
                          type="text"
                          id="userName"
                          name="userName"
                          className="form-control"
                          required
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          Please enter your Username
                        </div>
                      </div>
                      <div className="form-outline was-validated mb-4">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          required
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                          Please enter your email
                        </div>
                      </div>

                      <div className="form-outline was-validated mb-4">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          id="password1"
                          name="password"
                          className="form-control"
                          required
                          onChange={handleChange}
                        />

                        <div className="invalid-feedback">
                          Please enter your password
                        </div>
                      </div>

                      <div className="text-center mb-4">
                        <button
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </div>

                      <div className=" text-center">
                        <p>Or sign in with</p>
                      </div>

                      <div className="d-flex justify-content-center">
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f fa-lg"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fa-brands fa-github fa-lg mx-4 px-2"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-google fa-lg"></i>
                        </a>
                      </div>
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
                style="
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
