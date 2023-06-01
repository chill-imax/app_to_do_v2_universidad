import { useState } from "react";
import "../App.css";
import { useAuth } from "../contex/authContex";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
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
                <div className="card-body p-5 ">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Hello Again!!
                    </h2>
                    <p className="text-white-50 mb-5">
                      We are happy to have you back.
                    </p>

                    {error && <p>{error}</p>}

                    <form className="needs-validation" onSubmit={handleSubmit}>
                      <div className="form-outline form-white mb-4 was-validated">
                        <label className="form-label" htmlFor="typeEmailX">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          placeholder="Write your Email"
                          onChange={handleChange}
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
                          id="password"
                          className="form-control form-control-lg"
                          placeholder="Write your Password"
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password
                        </div>
                      </div>

                      <div className="input-group mb-3 d-flex justify-content-between">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            id="remember-me"
                            className="form-check-input"
                          ></input>
                          <label
                            htmlFor="check"
                            className="form-check-label text-secondary"
                          >
                            Remember me!
                          </label>
                        </div>
                        <div className="forgot">
                          <p className="small mb-5 pb-lg-2">
                            <a className="text-white-50" href="#!">
                              Forgot Password?
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          className="btn btn-outline-light btn-lg mb-4 w-100"
                          type="submit"
                        >
                          Login
                        </button>

                        <p>Or sign in with</p>

                        <div className="d-flex justify-content-center">
                          <a href="#!" className="text-white">
                            <i className="fab fa-facebook-f fa-lg"></i>
                          </a>
                          <a href="#!" className="text-white">
                            <i className="fab fa-github fa-lg mx-4 px-2"></i>
                          </a>
                          <a href="#!" className="text-white">
                            <i className="fab fa-google fa-lg"></i>
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="text-center">
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
