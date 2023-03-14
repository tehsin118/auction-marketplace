import React, { useState } from "react";

import "./mindfullness.css";

const MindFullness = () => {
  return (
    <>
      <div className="mind-sec">
        <div className="upper-section">
          <div className="content">
            <img
              className="img-fluid"
              src="..\asset\mindfullness\girlpic.png"
              alt="pic"
            />
            <div className="details">
              <div className="name">JIANG MIAO</div>
              <div className="work">16 Artworks ｜3 Collectors</div>
            </div>
          </div>

          <div className="bottom-section">
            <img
              className="img-fluid"
              src="..\asset\mindfullness\2.png"
              alt="banner-img"
            />
            <div className="bottom-content">
              <div className="left">Mindfulness No.20</div>
              <div className="right">
                <div className="release">RELEASE DATE</div>
                <div className="date">Nov 4, 2022, 12AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MindFullness;
