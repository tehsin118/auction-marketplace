import React, { useEffect, useState, PureComponent } from "react";
import "./editprofile.scss";

import { Icon } from "@iconify/react";
import { Tab, Tabs } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-bootstrap/Modal";
const EditProfile = () => {
  const [key, setKey] = useState("mail");
  const [key1, setKey1] = useState("eth");
  const [sellkey, setSellKey] = useState("sell");
  const [histroyKey, setHistroyKey] = useState("account");

  const [show, setShow] = useState(false);
  const [showPhonePopup, setshowPhonePopup] = useState(false);
  const [showWalletPopup, setshowWalletPopup] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setshowPhonePopup(false);
  const handleShow1 = () => setshowPhonePopup(true);
  const handleShow2 = () => setshowWalletPopup(true);
  const handleClose2 = () => setshowWalletPopup(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const liveAuctionCard = [
    {
      name: "The Hammer",
      nftID: 16,
      price: 0.33,
    },

    {
      name: "Iron Man",
      nftID: 36,
      price: 0.3,
    },

    {
      name: "Cat",
      nftID: 22,
      price: 0.03,
    },

    {
      name: "Bull Dog",
      nftID: 26,
      price: 0.31,
    },

    {
      name: "The Armsman",
      nftID: 262,
      price: 0.223,
    },
  ];

  return (
    <div>
      <section className="edit-profile">
        <div className="back-btn">
          <a href="#">back</a>
        </div>

        <div className="profile-banner">
          <h1>upload image</h1>
          <img src="\profile\editBanner.png" alt="" />
          <button>
            <Icon
              icon="ic:outline-photo-camera"
              color="#444"
              width="48"
              height="48"
            />
          </button>
          <button>Edit Profile</button>
        </div>

        <div className="profile-header">
          <div className="left">
            <div className="user-dp">
              <Icon
                icon="mdi:cloud-upload-outline"
                color="#979797"
                width="32"
                height="32"
              />
              <h6>
                Drop file to upload
                <br />
                Or <span>browse</span>
              </h6>
              <p>
                Supported file formated: .jepg, .png, and .gif <br /> Max File
                size is 10 MB
              </p>
              <label htmlFor="dp" style={{ zIndex: 3 }}></label>
              <input type="file" id="dp" accept=".jepg,png,.gif" />
              {/* onUploading dp following img will be shown */}
              <img src="" alt="" className="profile-dp" style={{ zIndex: 2 }} />
            </div>
            <div className="res-profile">
              <div className="user-details">
                <div className="user-name">
                  <h6>Shan Jacks</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Diam cras mi mauris
              facilisis pharetra. Ipsum diam fames morbi. Laoreet nunc imperdiet
              pulvinar lacinia faucibus nibh dui.
            </p>
            <div className="social-ico">
              <a href="#" target="">
                <Icon
                  icon="ant-design:twitter-circle-filled"
                  color="#000"
                  width="32"
                  height="32"
                  className="ico"
                />
              </a>
              <a href="#" target="">
                <Icon
                  icon="ic:baseline-facebook"
                  color="#000"
                  width="32"
                  height="32"
                  className="ico"
                />
              </a>
              <a href="#" target="">
                <Icon
                  icon="ic:baseline-telegram"
                  color="#000"
                  width="32"
                  height="32"
                  className="ico"
                />
              </a>
              <a href="#" target="">
                <Icon
                  icon="majesticons:link-circle"
                  color="#000"
                  width="32"
                  height="32"
                  className="ico"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="profile-form ">
          <div class="d-flex align-items-start sideTab">
            <div
              className="nav flex-column nav-pills me-3 profileTab-btn"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                class="nav-link active"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Profile
              </button>
              <button
                class="nav-link"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#accountTab"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Account
              </button>
              <button
                class="nav-link"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#settingTab"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                setting
              </button>
              <button
                class="nav-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#sellnfttab"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Products
              </button>
            </div>

            <div class="tab-content " id="v-pills-tabContent">
              {/* Profile */}

              <div
                class="tab-pane fade show active "
                id="profile"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="profile-data ">
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 "
                  >
                    {/* My Items */}
                    <Tab eventKey="mail" title={<span>My Items (3)</span>}>
                      {/* items if empty */}
                      <img src="\profile\empty.png" alt="" />
                      {/* else */}
                      {/* My items */}

                      <div className="my-items">
                        <div className="my-item-card">
                          <div className="left">
                            <img src="\profile\itemcard.png" alt="" />
                          </div>
                          <div className="right">
                            <h1>Angry Cat</h1>
                            <p>
                              Lorem ipsum dolor sit amet consectetur. Diam cras
                              mi mauris facilisis pharetra. Ipsum diam fames
                              morbi. Laor eet nunc imperdiet pulvinar lacinia
                              faucibus nibh dui. Lorem ipsum dolor sit amet
                              consectetur. Diam cras mi mauris facilisis
                              pharetra. Ipsum diam fames morbi. Laor eet nunc
                              imperdiet pulvinar lacinia faucibus nibh dui
                              mauris facilisis pharetra. Ipsum diam fames morbi.
                              Laor eet nunc imperdiet pulvinar lacinia faucibus
                              nibh dui
                            </p>
                            <div>
                              <h2>item 1</h2>
                              <a href="#">View</a>
                            </div>
                            <div className="dlt">
                              <img src="\profile\delete.png" alt="" />
                            </div>
                          </div>
                        </div>

                        <div className="my-item-card">
                          <div className="left">
                            <img src="\profile\itemcard.png" alt="" />
                          </div>
                          <div className="right">
                            <h1>Angry Cat</h1>
                            <p>
                              Lorem ipsum dolor sit amet consectetur. Diam cras
                              mi mauris facilisis pharetra. Ipsum diam fames
                              morbi. Laor eet nunc imperdiet pulvinar lacinia
                              faucibus nibh dui. Lorem ipsum dolor sit amet
                              consectetur. Diam cras mi mauris facilisis
                              pharetra. Ipsum diam fames morbi. Laor eet nunc
                              imperdiet pulvinar lacinia faucibus nibh dui
                              mauris facilisis pharetra. Ipsum diam fames morbi.
                              Laor eet nunc imperdiet pulvinar lacinia faucibus
                              nibh dui
                            </p>
                            <div>
                              <h2>item 1</h2>
                              <a href="#">View</a>
                            </div>
                          </div>
                        </div>

                        <div className="my-item-card">
                          <div className="left">
                            <img src="\profile\itemcard.png" alt="" />
                          </div>
                          <div className="right">
                            <h1>Angry Cat</h1>
                            <p>
                              Lorem ipsum dolor sit amet consectetur. Diam cras
                              mi mauris facilisis pharetra. Ipsum diam fames
                              morbi. Laor eet nunc imperdiet pulvinar lacinia
                              faucibus nibh dui. Lorem ipsum dolor sit amet
                              consectetur. Diam cras mi mauris facilisis
                              pharetra. Ipsum diam fames morbi. Laor eet nunc
                              imperdiet pulvinar lacinia faucibus nibh dui
                              mauris facilisis pharetra. Ipsum diam fames morbi.
                              Laor eet nunc imperdiet pulvinar lacinia faucibus
                              nibh dui
                            </p>
                            <div>
                              <h2>item 1</h2>
                              <a href="#">View</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>

                    {/* Offers */}
                    <Tab eventKey="offer" title={<span>Offer</span>}>
                      {/* Total offers */}

                      {/* offer-details */}
                      <div className="fav-offers-details">
                        <div className="fav-profile-card left">
                          <div className="fav-card  ">
                            <div className="fav-card-head">
                              <img src="\profile\favCard.png" alt="" />
                            </div>

                            <div className="fav-name">
                              <h1>The start</h1>
                              <div className="offeror">
                                <span>6+</span>
                                <div className="offeror-im">
                                  <img src="\profile\offer.png" alt="" />
                                  <img src="\profile\offer.png" alt="" />
                                  <img src="\profile\offer.png" alt="" />
                                  <img src="\profile\offer.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <button>Accept Highest Offer</button>
                        </div>

                        <div className="right">
                          <h3>Abstrct Cat</h3>
                          <p>
                            Create by <img src="\profile\offer.png" alt="" />
                            Julia Sean
                          </p>
                          <h2>Bids</h2>

                          <div className="all-offers">
                            <div className="offerr">
                              <img src="\profile\offer.png" alt="" />
                              <div>
                                <p>
                                  2000 PKR by <span>Allen</span>
                                </p>
                                <h6>
                                  1 hr ago
                                  <span>Accept</span>
                                </h6>
                              </div>
                            </div>

                            <div className="offerr">
                              <img src="\profile\offer.png" alt="" />
                              <div>
                                <p>
                                  2000 PKR by <span>Allen</span>
                                </p>
                                <h6>
                                  1 hr ago
                                  <span>Accept</span>
                                </h6>
                              </div>
                            </div>

                            <div className="offerr">
                              <img src="\profile\offer.png" alt="" />
                              <div>
                                <p>
                                  2000 PKR by <span>Allen</span>
                                </p>
                                <h6>
                                  1 hr ago
                                  <span>Accept</span>
                                </h6>
                              </div>
                            </div>

                            <div className="offerr">
                              <img src="\profile\offer.png" alt="" />
                              <div>
                                <p>
                                  2000 PKR by <span>Allen</span>
                                </p>
                                <h6>
                                  1 hr ago
                                  <span>Accept</span>
                                </h6>
                              </div>
                            </div>

                            <div className="offerr">
                              <img src="\profile\offer.png" alt="" />
                              <div>
                                <p>
                                  2000 PKR by <span>Allen</span>
                                </p>
                                <h6>
                                  1 hr ago
                                  <span>Accept</span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>

                    {/* Activites */}
                    <Tab eventKey="Activities" title={<span>Activities</span>}>
                      <div className="nftList-table">
                        <div className="nftList-table-content activity-table-content">
                          <div className="head">
                            <h6>Event</h6>
                            <p>Listed</p>
                          </div>
                          <div className="head">
                            <h6>item</h6>
                            <div>
                              <img src="\profile\itemcard.png" alt="" />
                              <p>Tree Ball</p>
                            </div>
                          </div>
                          <div className="head">
                            <h6>price</h6>
                            <p>2000 PKR</p>
                          </div>
                          <div className="head">
                            <h6>Total Bid</h6>
                            <p>30</p>
                          </div>
                          <div className="head">
                            <h6>Highest</h6>
                            <p>600</p>
                          </div>
                          <div className="head">
                            <h6>time</h6>
                            <p>6 minutes ago</p>
                          </div>
                          <div className="head">
                            <h6>tx ID</h6>
                            <p>0xd45665..56</p>
                          </div>
                        </div>

                        <div className="nftList-table-content activity-table-content">
                          <div className="head">
                            <h6>Event</h6>
                            <p>Listed</p>
                          </div>
                          <div className="head">
                            <h6>item</h6>
                            <div>
                              <img src="\profile\itemcard.png" alt="" />
                              <p>Tree Ball</p>
                            </div>
                          </div>
                          <div className="head">
                            <h6>price</h6>
                            <p>2000 PKR</p>
                          </div>
                          <div className="head">
                            <h6>from</h6>
                            <p>0x5656....56546</p>
                          </div>
                          <div className="head">
                            <h6>To</h6>
                            <p>0x5656....56546</p>
                          </div>
                          <div className="head">
                            <h6>time</h6>
                            <p>6 minutes ago</p>
                          </div>
                          <div className="head">
                            <h6>tx ID</h6>
                            <p>0xd45665..56</p>
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>

              {/* Account */}

              <div
                class="tab-pane fade"
                id="accountTab"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div className="account-tab-content">
                  {/* if wallet is connected */}

                  {/* mail number */}
                  <div className="account-inpt">
                    <p>Email</p>
                    <div>
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="mail@gmail.com"
                      />
                      <button>change</button>
                      {/* replace with bind when wallet is connected */}
                      {/* <button>Bind</button> */}
                    </div>
                  </div>

                  <div className="account-inpt">
                    <p>Phone Number</p>
                    <div>
                      <input
                        type="number"
                        placeholder="Code"
                        className="code-number"
                      />
                      <input
                        type="number"
                        name=""
                        id=""
                        placeholder="1237**********4546"
                        className="p-numb"
                      />
                      <button onClick={handleShow1}>change</button>
                      {/* replace with bind when wallet is connected */}
                      {/* <button>Bind</button> */}
                    </div>
                  </div>
                </div>

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
                        rotate={1}
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

                <Modal show={showWalletPopup} onHide={handleClose2} centered>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body className="wallet-login-modal">
                    <div className="right-wlogin">
                      <h2>Connect a Wallet to continue</h2>
                      <p>Connect your wallet to log in or create an account</p>
                      <Tabs
                        id="controlled-tab-example"
                        activeKey={key1}
                        onSelect={(k) => setKey1(k)}
                        className="mb-3"
                      >
                        <Tab
                          eventKey="eth"
                          title={
                            <span>
                              <img src="\logins\ether.svg" alt="My Image" />
                              Ethereum
                            </span>
                          }
                        >
                          <div className="wallet-connect">
                            <img src="\logins\meta.svg" alt="" />
                            <p>MetaMask</p>
                          </div>

                          <div className="wallet-connect">
                            <img src="\logins\connectWallet.svg" alt="" />
                            <p>Wallet Connect</p>
                          </div>

                          <div className="wallet-connect">
                            <img src="\logins\coinbase.png" alt="" />
                            <p>Coin Base</p>
                          </div>

                          <div className="wallet-connect">
                            <img src="\logins\crypto.svg" alt="" />
                            <p>Crypto</p>
                          </div>
                        </Tab>

                        <Tab
                          eventKey="binance"
                          title={
                            <span>
                              <img src="\logins\binance.svg" alt="binance" />
                              binance chain
                            </span>
                          }
                          disabled
                        ></Tab>

                        <Tab
                          eventKey="Polygon"
                          title={
                            <span>
                              <img src="\logins\poly.svg" alt="Polygon" />
                              Polygon
                            </span>
                          }
                          disabled
                        ></Tab>

                        <Tab
                          eventKey="apt"
                          title={
                            <span>
                              <img src="\logins\apt.svg" alt="apt" />
                              Aptos
                            </span>
                          }
                          disabled
                        ></Tab>
                        <Tab
                          eventKey="Sui"
                          title={
                            <span>
                              <img src="\logins\sui.svg" alt="Sui" />
                              Sui
                            </span>
                          }
                          disabled
                        ></Tab>
                      </Tabs>
                      <h6>New to NFT? Learn more about wallets</h6>
                      <h6>
                        By clicking contine you indicate that you have read and
                        agree to our
                        <a href="#" target="j">
                          Terms of Service
                        </a>
                        and
                        <a href="#" target="1">
                          Privacy Policy
                        </a>
                      </h6>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>

              {/* Setting */}

              <div
                class="tab-pane fade"
                id="settingTab"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <div className="profile-form-content">
                  <input
                    type="text"
                    placeholder="Display Name"
                    className="d-name"
                  />
                  <input
                    type="text"
                    placeholder="User Name"
                    className="d-name"
                  />
                  <div className="social-links">
                    <p>social links</p>
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <input
                          type="text"
                          className="d-name"
                          placeholder="Twitter"
                        />
                      </div>
                      <div className="col-md-4 col-12">
                        <input
                          type="text"
                          className="d-name"
                          placeholder="Facebook"
                        />
                      </div>
                      <div className="col-md-4 col-12">
                        <input
                          type="text"
                          className="d-name"
                          placeholder="Discord"
                        />
                      </div>
                    </div>
                  </div>
                  <textarea
                    name=""
                    id=""
                    className="d-name profile-description"
                    placeholder="Bio Detail"
                  />

                  <button>Save</button>
                </div>
              </div>

              {/* Sell NFT */}

              <div
                class="tab-pane fade"
                id="sellnfttab"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <div className="sellnft-profile">
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={sellkey}
                    onSelect={(k) => setSellKey(k)}
                    className="mb-3 "
                  >
                    {/* nft List */}

                    <Tab eventKey="sell" title={<span>Products</span>}>
                      <div className="nftList-table">
                        <div className="nftList-table-content">
                          <div className="head">
                            <h6>Event</h6>
                            <p>Listed</p>
                          </div>
                          <div className="head">
                            <h6>item</h6>
                            <div>
                              <img src="\profile\itemcard.png" alt="" />
                              <p>Tree Ball</p>
                            </div>
                          </div>
                          <div className="head">
                            <h6>price</h6>
                            <p>2000 PKR</p>
                          </div>
                          <div className="head">
                            <h6>Total bid</h6>
                            <p>30</p>
                          </div>
                          <div className="head">
                            <h6>Highest</h6>
                            <p>600</p>
                          </div>
                          <div className="head">
                            <h6>time</h6>
                            <p>6 minutes ago</p>
                          </div>
                          <div className="head">
                            <h6>tx ID</h6>
                            <p>0xd45665..56</p>
                            <div className="sell-btn">
                              <button>delete</button>
                            </div>
                          </div>
                        </div>

                        <div className="nftList-table-content">
                          <div className="head">
                            <h6>Event</h6>
                            <p>Listed</p>
                          </div>
                          <div className="head">
                            <h6>item</h6>
                            <div>
                              <img src="\profile\itemcard.png" alt="" />
                              <p>Tree Ball</p>
                            </div>
                          </div>
                          <div className="head">
                            <h6>price</h6>
                            <p>2000 PKR</p>
                          </div>
                          <div className="head">
                            <h6>from</h6>
                            <p>0x5656....56546</p>
                          </div>
                          <div className="head">
                            <h6>To</h6>
                            <p>0x5656....56546</p>
                          </div>
                          <div className="head">
                            <h6>time</h6>
                            <p>6 minutes ago</p>
                          </div>
                          <div className="head">
                            <h6>tx ID</h6>
                            <p>0xd45665..56</p>
                            <div className="sell-btn">
                              <button>delete</button>
                            </div>
                          </div>
                        </div>

                        <div className="nftList-table-content">
                          <div className="head">
                            <h6>Event</h6>
                            <p>Listed</p>
                          </div>
                          <div className="head">
                            <h6>item</h6>
                            <div>
                              <img src="\profile\itemcard.png" alt="" />
                              <p>Tree Ball</p>
                            </div>
                          </div>
                          <div className="head">
                            <h6>price</h6>
                            <p>2000 PKR</p>
                          </div>
                          <div className="head">
                            <h6>from</h6>
                            <p>0x5656....56546</p>
                          </div>
                          <div className="head">
                            <h6>To</h6>
                            <p>0x5656....56546</p>
                          </div>
                          <div className="head">
                            <h6>time</h6>
                            <p>6 minutes ago</p>
                          </div>
                          <div className="head">
                            <h6>tx ID</h6>
                            <p>0xd45665..56</p>
                            <div className="sell-btn">
                              <button>delete</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProfile;
