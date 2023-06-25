import React from "react";
import { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { SignUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("كلمتا السر ليستا متطابقتان");
    }

    try {
      setError("");
      setLoading(true);

      await SignUp(emailRef.current.value, passwordRef.current.value);
      navigate("/Profile");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="col col-md-9 col-lg-12  mt-5 ">
      <div className="row justify-content-center mt-5 mx-0">
        <div className="sign-up-container p-4 col col-md-5" id="lodin-reg-card">
          <div className="row text-center mt-md-2 mb-md-1">
            <h4 className="" style={{ color: "#27374D" }}>
              إنشاء حساب
            </h4>
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          <form className="mb-5" onSubmit={handleSubmit}>
            {/* {<!-- First Name input -->} */}
            <div className="form-outline mb-4">
              <label
                className="form-label"
                for="firstName"
                style={{ color: "#27374D" }}
              >
                الاسم الأول
              </label>
              <input
                type="text"
                id="firstName"
                class="form-control"
                ref={firstNameRef}
                required
              />
            </div>
            {/* {<!-- Second Name input -->} */}
            <div className="form-outline mb-4">
              <label
                className="form-label"
                for="secondName"
                style={{ color: "#27374D" }}
              >
                اسم العائلة
              </label>
              <input
                type="text"
                id="secondName"
                class="form-control"
                ref={lastNameRef}
                required
              />
            </div>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <label
                className="form-label"
                for="email"
                style={{ color: "#27374D" }}
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                class="form-control"
                ref={emailRef}
                required
              />
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              <label
                className="form-label"
                for="pass"
                style={{ color: "#27374D" }}
              >
                الرقم السري
              </label>
              <input
                type="password"
                id="pass"
                class="form-control"
                ref={passwordRef}
                required
              />
            </div>

            {/* <!-- Confirm Password input --> */}
            <div className="form-outline mb-4">
              <label
                className="form-label"
                for="ConPass"
                style={{ color: "#27374D" }}
              >
                تأكيد الرقم السري
              </label>
              <input
                type="password"
                id="conPass"
                class="form-control"
                ref={passwordConfirmRef}
                required
              />
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}

            {/* <!-- Submit button --> */}
            <div className="row px-5">
              <button
                type="submit"
                id="signUp-btn"
                class="btn btn-block mb-4 login-btn"
                disabled={loading}
                style={{
                  color: "#fff",
                  backgroundColor: "#27374D",
                  width: "7rem",
                }}
                // onClick={handleSubmit}
              >
                أنشئ حساب
              </button>
              <p>
                عندك حساب؟{" "}
                <Link to="/signIn" style={{ color: "#27374D" }}>
                  {" "}
                  تسجيل دخول
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
