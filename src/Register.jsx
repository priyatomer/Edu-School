import React from "react";
import web from "../src/Images/register.svg";

import Footer from "./Footer";

const Register = () => {
  return (
    <>
      <div className="contact_div ">
        <h1 className=" text-center register_heading ">REGISTRATION</h1>
        <hr className="about_hr mx-auto mb-5" />
        <section id="header" className="d-flex align-items-center ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6  order-1 order-lg-2 header-img">
                    <img src={web} alt="pic" className="register" />
                  </div>
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <form>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control form-control-lg p-3"
                          id="exampleFormControlInput1"
                          placeholder="Fullname"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control form-control-lg p-3"
                          id="exampleFormControlInput1"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="number"
                          className="form-control form-control-lg p-3"
                          id="exampleFormControlInput1"
                          placeholder="Mobile"
                        />
                      </div>
                      <select
                        className="form-select form-select-lg mb-5 p-3"
                        aria-label=".form-select-lg example"
                      >
                        <option selected>Select Course</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div className="col-auto">
                        <button
                          type="submit"
                          style={{ backgroundColor: "#190061" }}
                          className="btn btn-block mb-3 text-white "
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Register;
