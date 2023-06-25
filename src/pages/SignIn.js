import React from "react";
import "../assets/index.css";
import { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { SignIn } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate  = useNavigate()

  

  async function handleSubmit(e){

    e.preventDefault()

    


    try {
      setError("")
      setLoading(true)

      await SignIn(emailRef.current.value, passwordRef.current.value)
      navigate("/Profile")

    }
    catch{
      setError("Failed to login")
    }
setLoading(false)
  }

  return (
    <section>
      <div className="col col-md-9 col-lg-12  mt-5">
        <div className="row justify-content-center mt-5 mx-0">
          <div
            className=" sign-in-container p-4 col col-md-5"
            id="lodin-reg-card"
          >
            <div className="row text-center mt-md-5 mb-md-5">
              <h4 style={{ color: "#27374D" }}>تسجيل الدخول</h4>
            </div>
          {error && <Alert variant="danger">{error}</Alert>}
          <form className="mb-5" onSubmit={handleSubmit}>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  placeholder="البريد الإلكتروني"
                  typeName="email"
                  id="email"
                  class="form-control"
                  ref={emailRef} required
                />
                <label
                  id="email-error"
                  className="form-label"
                  for="email"
                ></label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  placeholder="الرقم السري"
                  typeName="password"
                  id="pass"
                  class="form-control"
                  ref={passwordRef} required
                />
                <label
                  id="pass-error"
                  className="form-label"
                  for="pass"
                ></label>
              </div>

              {/* <!-- 2 column grid layout for inline styling --> */}
              <div className="row mb-5">
                <div className="col d-flex justify-content-between">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <label className="form-check-label" for="form2Example31">
                      {" "}
                      تذكرني{" "}
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                    />
                  </div>
                </div>

                <div className="col">
                  {/* <!-- Simple link --> */}
                  <a href="#!" style={{ color: "#27374D" }}>
                    هل تواجه مشكلة؟
                  </a>
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <div class="row ps-5 pe-5 ">
                <button
                  type="submit"
                  id="signUp-btn"
                  disabled={loading}
                  className="btn btn-block mb-4 login-btn "
                  style={{
                    color: "#fff",
                    backgroundColor: "#27374D",
                    width: "7rem",
                  }}
                >
                  دخول
                </button>
              </div>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>
                  ليس لديك حساب؟{" "}
                  <Link to="/signUp" style={{ color: "#27374D" }}> أنشئ حساب</Link>
                </p>
                <p>أو سجل الدخول بواسطة:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i
                    className="fa-brands fa-facebook fa-2xl"
                    style={{ color: "#27374D" }}
                  ></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i
                    className="fab fa-google fa-2xl"
                    style={{ color: "#27374D" }}
                  ></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i
                    class="fab fa-twitter fa-2xl"
                    style={{ color: "#27374D" }}
                  ></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i
                    class="fab fa-github fa-2xl"
                    style={{ color: "#27374D" }}
                  ></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
