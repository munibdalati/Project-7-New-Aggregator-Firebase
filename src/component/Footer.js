import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../assets/index.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-center">
      <Container fluid className="d-flex flex-column justify-content-center">
        <Row
          className="d-flex flex-column justify-content-center align-items-center p-3"
          style={{ backgroundColor: "#324", color: "#fff" }}
        >
          <p> كن أول من يعلم الخبر مع تطبيق "المحطة الإخبارية"</p>
          <p>حمّل التطبيق الآن</p>
          <div className="d-flex justify-content-center gap-2 footer-images">
            <img
              src={process.env.PUBLIC_URL + "/images/GooglePlay.png"}
              style={{ width: "8rem" }}
              alt=""
            />
            <img
              src={process.env.PUBLIC_URL + "/images/AppStore.png"}
              style={{ width: "8rem" }}
              alt=""
            />
          </div>
        </Row>
        <Row
          className="d-flex  justify-content-center align-items-center  p-3 mt-2"
          style={{ color: "#000" }}
        >
          <div className="d-flex justify-content-center align-items-center">
            {" "}
            <span className="px-4 py-2" style={{ background: "#ff0000" }}>
              {" "}
              <i class="fa-brands fa-google" style={{ color: "white" }}></i>
            </span>
            <span className="px-4 py-2" style={{ background: "#016cfe" }}>
              {" "}
              <i
                class="fa-brands fa-facebook-f "
                style={{ color: "white" }}
              ></i>
            </span>
            <span className="px-4 py-2" style={{ background: "#4cd4f2" }}>
              <i class="fa-brands fa-twitter " style={{ color: "white" }}></i>
            </span>
          </div>
        </Row>
        <Row className="mt-2">
          <p>سياسة الخصوصية | شروط الخدمة</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;