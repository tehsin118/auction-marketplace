import React, { useState } from "react";
import "./editprofile.scss";
import { Icon } from "@iconify/react";
import { Tab, Tabs } from "react-bootstrap";
const EditProfile = () => {
  const [key, setKey] = useState("mail");

  return (
    <div>
      <section className="edit-profile">
        <div className="back-btn">
          <a href="#">back</a>
        </div>

        <div className="profile-banner">
          <h1>upload image</h1>
          <img src="\profile\editBanner1.png" alt="" />
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
              <label htmlFor="dp"></label>
              <input type="file" id="dp" accept=".jepg,png,.gif" />
              {/* onUploading dp following img will be shown */}
              <img src="" alt="" className="profile-dp" />
            </div>

            <div className="user-details">
              <div className="user-name">
                <h6>Shan Jacks</h6>
                <div className="user-address ">
                  <Icon
                    icon="mdi:ethereum"
                    color="#979797"
                    width="25"
                    height="20"
                    className="ico"
                  />
                  <p>0xD5…1234</p>
                  <img src="\profile\copy.svg" alt="" />
                </div>
                <div className="user-share">
                  <Icon
                    icon="mdi:like"
                    color="#000"
                    width="32"
                    height="32"
                    className="ico"
                  />
                  <Icon
                    icon="material-symbols:share-reviews"
                    color="#000"
                    width="32"
                    height="32"
                    className="ico"
                  />
                </div>
              </div>
            </div>
            <div className="followers">
              <div>
                <h3>101</h3>
                <p>followers</p>
              </div>
              <div>
                <h3>20</h3>
                <p>Following</p>
              </div>
              <div>
                <h3>20</h3>
                <p>collections</p>
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

        <div className="profile-form">
          <div class="d-flex align-items-start">
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
                Pending
              </button>
              <button
                class="nav-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#HistoryTab"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                History
              </button>
            </div>

            <div class="tab-content " id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="profile"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="profile-form-content d-none">
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
                <div className="profile-data">
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                  >
                    <Tab eventKey="mail" title={<span>My Items (3)</span>}>
                      <img src="\profile\empty.png" alt="" />
                    </Tab>

                    <Tab
                      eventKey="phone"
                      title={<span>My Collection（3）</span>}
                    ></Tab>
                    <Tab
                      eventKey="fav"
                      title={<span>Favorites（3）</span>}
                    ></Tab>
                    <Tab eventKey="offer" title={<span>Offer</span>}></Tab>
                    <Tab
                      eventKey="Activities"
                      title={<span>Activities</span>}
                    ></Tab>
                  </Tabs>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="accountTab"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                accountTab
              </div>
              <div
                class="tab-pane fade"
                id="settingTab"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                setting tav
              </div>
              <div
                class="tab-pane fade"
                id="sellnfttab"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                .sellnfttab
              </div>
              <div
                class="tab-pane fade"
                id="HistoryTab"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                .HistoryTab
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProfile;
