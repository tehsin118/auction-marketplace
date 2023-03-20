import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Tab, Tabs } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import "./logins.scss";
const PhoneLogin = () => {
  const [key, setKey] = useState("mail");
  const [showMailPopup, setshowMailPopup] = useState(false);
  const [showPhonePopup, setshowPhonePopup] = useState(false);

  const handleClose = () => setshowMailPopup(false);
  const handleShow = () => setshowMailPopup(true);
  const handleClose1 = () => setshowPhonePopup(false);
  const handleShow1 = () => setshowPhonePopup(true);

  return (
    <div>
      <section className="phone-logins">
        <div className="left-phone-logins">
          <Link to="/">
            <img src="\logins\log.png" alt="" className="img-fluid" />
          </Link>
          <h1>Join Our Community</h1>
          <div className="social-icons">
            <a href="" target="v">
              <Icon icon="mdi:twitter" color="black" width="40" height="40" />
            </a>
            <a href="" target="v">
              <Icon
                icon="ic:baseline-discord"
                color="black"
                width="40"
                height="40"
              />
            </a>
            <a href="" target="v">
              <Icon
                icon="ic:baseline-telegram"
                color="black"
                width="40"
                height="40"
              />
            </a>
            <a href="" target="v">
              <Icon
                icon="ri:medium-fill"
                color="black"
                width="40"
                height="40"
              />
            </a>
          </div>
        </div>
        <div className="right-phone-logins">
          <div className="right-wlogin">
            <h2>log In & Sign up</h2>
            <p>Exploring your Favourite Product journey with Auction Market.</p>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab
                eventKey="mail"
                title={
                  <span>
                    <img src="\logins\mail.svg" alt="My Image" />
                    Email
                  </span>
                }
              >
                <div className="login-input">
                  <input type="email" name="" id="" placeholder="Email" />
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="password"
                    className="mt-4"
                  />
                  <div>
                    <button className="conti" onClick={handleShow}>
                      continue
                    </button>
                  </div>
                  <div className="privacy-check">
                    <span>
                      <h6>
                        <input type="checkbox" name="" id="" />I have read and
                        agree to Auction Market
                        <a href="#" target="j">
                          Terms of Service
                        </a>
                        and
                        <a href="#" target="1">
                          Privacy Policy
                        </a>
                      </h6>
                    </span>
                  </div>
                </div>
              </Tab>

              <Tab
                eventKey="phone"
                title={
                  <span>
                    <img src="\logins\phone.svg" alt="phone" />
                    phone
                  </span>
                }
              >
                <div className="login-input">
                  <div className="d-flex justify-content-between">
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="92"
                      className="codePhone"
                    />
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="000 0000 000"
                      className="phone-numb"
                    />
                  </div>
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Password"
                    className="mt-4"
                  />
                  <div>
                    <button className="conti" onClick={handleShow1}>
                      continue
                    </button>
                  </div>
                  <div className="privacy-check">
                    <span>
                      <h6>
                        <input type="checkbox" name="" id="" />I have read and
                        agree to Auction Market
                        <a href="#" target="j">
                          Terms of Service
                        </a>
                        and
                        <a href="#" target="1">
                          Privacy Policy
                        </a>
                      </h6>
                    </span>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
        <Modal show={showMailPopup} onHide={handleClose} centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="mail-login-modal">
            <p className="login-modal-head">
              Enter the 6-digit code we emailed to
            </p>
            <h6>xxx@xxx.com</h6>
            <div className="mail-otp">
              <Icon
                icon="material-symbols:mail-rounded"
                color="black"
                width="48"
                height="48"
              />
              <span>
                <input type="number" name="" id="" placeholder="0" />
                <input type="number" name="" id="" placeholder="0" />
                <input type="number" name="" id="" placeholder="0" />
              </span>
              <span>
                <input type="number" name="" id="" placeholder="0" />
                <input type="number" name="" id="" placeholder="0" />
                <input type="number" name="" id="" placeholder="0" />
              </span>
            </div>
            <h5>
              Your code will arrive in a few seconds.
              <br />
              <span>Resend Code</span>
            </h5>
          </Modal.Body>
        </Modal>
        <Modal show={showPhonePopup} onHide={handleClose1} centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="mail-login-modal">
            <p className="login-modal-head">
              Enter the 6-digit code we sent via SMS to
            </p>
            <h6>xxxxx..xxx..xx</h6>
            <div className="mail-otp">
              <Icon
                icon="material-symbols:phone-enabled-sharp"
                color="black"
                width="48"
                height="48"
              />
              <span>
                <input type="number" name="" id="" placeholder="0" />
                <input type="number" name="" id="" placeholder="0" />
                <input type="number" name="" id="" placeholder="0" />
              </span>
              <span>
                <input type="number" name="" id="" placeholder="0" />
                <input type="number" name="" id="" placeholder="0" />
                <input type="number" name="" id="" placeholder="0" />
              </span>
            </div>
            <h5>
              Your code will arrive in a few seconds.
              <br />
              <span>Resend Code</span>
            </h5>
          </Modal.Body>
        </Modal>
      </section>
    </div>
  );
};

export default PhoneLogin;
