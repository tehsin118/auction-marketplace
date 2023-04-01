import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./liveAuction.scss";
const LiveAuction = () => {
  const liveAuctionCard = [
    {
      name: "Bull Dog",
      profuctID: 26,
      price: 301,
      img: "/bidcollection/card2.png",
    },

    {
      name: "The Armsman",
      profuctID: 262,
      price: 9723,
      img: "/bidcollection/card2.png",
    },
    {
      name: "The Armsman",
      profuctID: 262,
      price: 3423,
      img: "/bidcollection/card2.png",
    },
    {
      name: "The Armsman",
      profuctID: 262,
      price: 3423,
      img: "/bidcollection/card2.png",
    },
    {
      name: "The Armsman",
      profuctID: 262,
      price: 2123,
      img: "/bidcollection/card2.png",
    },
  ];
  const navigate = useNavigate();

  const bidPage = () => {
    navigate("/bidPage");
  };

  return (
    <div>
      <section className="live-auction">
        <div className="multiArtproduct-banner">
          <h1>
            <span>Live </span>
            Auctions
          </h1>
          <p>Your Bid Your Choice Place A Bid On Live Auctions</p>
        </div>
        <div className="backTab">
          <a href="#">Back</a>
          <p>Product / Live Auction</p>
        </div>
        <div className="containers">
          <div className="live-auctions">
            <div className="Artproduct-heading">
              <h2>Live Auctions</h2>
            </div>

            <div className="live-auction-cards">
              {liveAuctionCard.map((item) => {
                return (
                  <div className="l-auction-card">
                    <div className="card-head">
                      <img src={item.img} alt="" className="img-fluid" />

                      <div className="auction-timer">
                        <div className="day">
                          <h1>06</h1>
                          <p>d's</p>
                        </div>

                        <div className="day">
                          <h1>16</h1>
                          <p>h's</p>
                        </div>

                        <div className="day">
                          <h1>36</h1>
                          <p>mn's</p>
                        </div>

                        <div className="day">
                          <h1>56</h1>
                          <p>sec</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-details">
                      <h2>
                        {item.name}
                        <span>#{item.profuctID}</span>
                      </h2>
                      <h3>
                        Details
                        <span>
                          {item.price}
                          <span> </span>
                          PKR
                        </span>
                      </h3>
                      <button onClick={bidPage}>Place Bid</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="live-auctions ">
            <div className="Artproduct-heading">
              <h2>Auctions Ended</h2>
            </div>

            <div className="live-auction-cards auction-ended">
              {liveAuctionCard.map((item) => {
                return (
                  <div className="l-auction-card">
                    <div className="card-head">
                      <img src={item.img} alt="" className="img-fluid" />
                    </div>
                    <div className="card-details">
                      <h2>
                        {item.name}
                        <span>#{item.profuctID}</span>
                      </h2>
                      <h3>
                        Details
                        <span>
                          {item.price + " "}
                          PKR
                        </span>
                      </h3>
                      <button>Ended</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="auction-winner">
            <div className="Artproduct-heading">
              <h2>Auctions Winner</h2>
            </div>

            <div className="winner-card-grid">
              {liveAuctionCard.map((item) => {
                return (
                  <div className="auction-winner-card">
                    <div className="left">
                      <img src="\mint\mintUser2.png" alt="" />
                      <div>
                        <h2>New Owner</h2>
                        <h3>The Hammer</h3>
                      </div>
                    </div>
                    <div className="right">
                      <h4>jack</h4>
                      <h4>
                        300.0<span> PKR</span>
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveAuction;
