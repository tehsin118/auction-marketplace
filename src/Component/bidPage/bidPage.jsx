import React from "react";
import "./bidpage.scss";
import Footer from "../home/Footer/Footer";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const BidPage = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "0px",
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const liveAuctionCard = [
    {
      name: "The Hammer",
      productID: 16,
      price: 0.33,
    },

    {
      name: "Iron Man",
      productID: 36,
      price: 0.3,
    },

    {
      name: "Cat",
      productID: 22,
      price: 0.03,
    },

    {
      name: "Bull Dog",
      productID: 26,
      price: 0.31,
    },

    {
      name: "The Armsman",
      productID: 262,
      price: 0.223,
    },
  ];
  const navigate = useNavigate();

  const bidPageRoute = () => {
    navigate("/bidPage");
  };
  const liveAuctionPage = () => {
    navigate("/liveAuction");
  };
  const paymentinfo = () => {
    navigate("/payment-info");
  };
  return (
    <div>
      <section className="bid-page">
        <div className="bid-page-content container ">
          <div className="bid-top">
            <div className=" left-bid">
              <img
                src="\bidding\bidThumbnail.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className=" right-bid">
              <h6>Products</h6>
              <h1 className="product-name">Neon Face Paint</h1>

              <div className="bidding-box">
                <div className="highest-bid">
                  <p>
                    Highest bid by
                    <span>Jabke</span>
                  </p>
                  <h2>~ $ 2,764.99</h2>
                </div>
                <div className="auction-end">
                  <p>Auction ends in</p>
                  <div className="timer">
                    <div className="days">
                      <h4>00</h4>
                      <p>days</p>
                    </div>
                    <div className="days">
                      <h4>00</h4>
                      <p>Hours</p>
                    </div>
                    <div className="days">
                      <h4>00</h4>
                      <p>Mins</p>
                    </div>
                    <div className="days">
                      <h4>00</h4>
                      <p>Secs</p>
                    </div>
                  </div>
                </div>
                <div className="your-bid">
                  <h1>your bid</h1>
                  <div>
                    <input type="number" />
                    <button onClick={paymentinfo}>Place a Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bid-discription">
            <div className="left-bid-discript">
              <h2>discription</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Diam cras mi mauris
                facilisis pharetra. Ipsum diam consequat ac purus duis fames
                morbi.Laoreet nunc imperdiet pulvinar lacinia faucibus nibh dui.
                Odio ornarenu.
              </p>
            </div>

            <div className="right-bid-discript">
              <h2>Bids</h2>
              <div className="last-bid-place">
                <div className="left">
                  <img src="\mint\mintUser2.png" alt="" className="img-fluid" />
                  <div>
                    <h4>
                      Bid placed by <span>@jay</span>
                    </h4>
                    <h5>November 20,2022 11:21 Am</h5>
                  </div>
                </div>
                <div className="right">
                  <h4>~ $ 2,769</h4>
                </div>
              </div>

              <div className="last-bid-place">
                <div className="left">
                  <img src="\mint\mintUser2.png" alt="" className="img-fluid" />
                  <div>
                    <h4>
                      Bid placed by <span>@jay</span>
                    </h4>
                    <h5>November 20,2022 11:21 Am</h5>
                  </div>
                </div>
                <div className="right">
                  <h4>~ $ 2,76.9</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="bid-bottom">
            <div className="bid-detail">
              <h2>Details</h2>
              <div className="bid-detail-content">
                <div className="w-50">
                  <h4>Medium</h4>
                </div>
                <div className="w-50">
                  <p>jpeg</p>
                </div>
              </div>
              <div className="bid-detail-content">
                <div className="w-50">
                  <h4>Dimensions</h4>
                </div>
                <div className="w-50">
                  <p>4400x5700</p>
                </div>
              </div>
              <div className="bid-detail-content">
                <div className="w-50">
                  <h4>Model</h4>
                </div>
                <div className="w-50">
                  <p>2019</p>
                </div>
              </div>
              <div className="bid-detail-content">
                <div className="w-50">
                  <h4>Manufacure </h4>
                </div>
                <div className="w-50">
                  <p>xyz</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mt-3">Review</h3>
          <div className="review-product mt-2">
            <div className="review-container">
              <div className="left d-flex align-items-center">
                <img src="\bidding\bidder.png" alt="" />
                <div>
                  <h6>
                    Cobus Bester
                    <span>– June 7, 2013</span>
                  </h6>
                  <p>
                    This album proves why The Woo are the best band ever. Best
                    music ever!
                  </p>
                </div>
              </div>
              <div className="right">
                <Icon
                  icon="ic:round-star"
                  color="#000"
                  width="24"
                  height="24"
                  className="ico"
                />
                <Icon
                  icon="ic:round-star"
                  color="#000"
                  width="24"
                  height="24"
                  className="ico"
                />
                <Icon
                  icon="ic:round-star"
                  color="#000"
                  width="24"
                  height="24"
                  className="ico"
                />
                <Icon
                  icon="ic:round-star"
                  color="#000"
                  width="24"
                  height="24"
                  className="ico"
                />
                <Icon
                  icon="ic:round-star-border"
                  color="#000"
                  width="24"
                  height="24"
                  className="ico"
                />
              </div>
            </div>
            <div className="review-wrapper">
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <p>
                Your rating *
                <div className="icon">
                  <Icon
                    icon="ic:round-star-border"
                    color="#000"
                    width="24"
                    height="24"
                    className="r-ico"
                  />
                  <Icon
                    icon="ic:round-star-border"
                    color="#000"
                    width="24"
                    height="24"
                    className="r-ico"
                  />
                  <Icon
                    icon="ic:round-star-border"
                    color="#000"
                    width="24"
                    height="24"
                    className="r-ico"
                  />
                  <Icon
                    icon="ic:round-star-border"
                    color="#000"
                    width="24"
                    height="24"
                    className="r-ico"
                  />
                  <Icon
                    icon="ic:round-star-border"
                    color="#000"
                    width="24"
                    height="24"
                    className="r-ico"
                  />
                </div>
              </p>
              <p>Your review *</p>

              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Review"
                className="review-area"
              ></textarea>

              <div className="name-mail">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
              </div>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </section>
      <div className="multiArtproduct">
        <div className="containers">
          <div className="explore-live-auction">
            <div className="multiArtproduct-heading">
              <h2>Live Auctions</h2>
              <h6 onClick={liveAuctionPage} style={{ cursor: "pointer" }}>
                View All
              </h6>
            </div>

            <div className="live-auction-cards">
              <Slider {...settings}>
                {liveAuctionCard.map((item) => {
                  return (
                    <div className="l-auction-card">
                      <div className="card-head">
                        <img
                          src="\productcollection\productCard.png"
                          alt=""
                          className="img-fluid"
                        />

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
                          <span>#{item.productID}</span>
                        </h2>
                        <h3>
                          Price
                          <span>
                            {item.price + " "}
                            USD
                          </span>
                        </h3>
                        <button onClick={bidPageRoute}>Place Bid</button>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BidPage;
