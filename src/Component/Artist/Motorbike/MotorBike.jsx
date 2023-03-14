import React from "react";
import "./MotorBike.css";

const MotorBike = () => {
  return (
    <>
      <div className="bike row">
        <div className="col-lg-3">
          <div className="jiang-miao">
            <img
              className="img-fluid"
              src="..\asset\Artistpage\artistdp.png"
              alt="profile Pic"
            />
            <div>
              <h1 className="name"> JIANG MIAO</h1>
              <h4 className="work">16 Artworks ｜3 Collectors</h4>
            </div>
          </div>
        </div>

        <div className="col-lg-3">1</div>
        <div className="col-lg-3">1</div>
        <div className="col-lg-3">1</div>
      </div>

      <div className="bike-divider"></div>

      <div className="coming">
        <h2>Coming Soon</h2>
      </div>
    </>
  );
};

export default MotorBike;
