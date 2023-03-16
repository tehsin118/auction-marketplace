import "./upcoming.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UpComing = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the date and time for the offer expiration
    const countDownDate = new Date("Mar 31, 2023 23:59:59").getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countDownDate - now;

      // Calculate days, hours, minutes and seconds left
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the state with the new countdown values
      setCountdown({ days, hours, minutes, seconds });

      // If the countdown is finished, clear the interval
      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "80px",
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 567,
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
        breakpoint: 1200,
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
          slidesToShow: 4,
        },
      },
    ],
  };
  const nfts = [
    {
      nftimg: "../../../../asset/upcoming/1.png",
      name: "proname",
    },
    {
      nftimg: "../../../../asset/upcoming/2.png",
      name: "proname",
    },
    {
      nftimg: "../../../../asset/upcoming/3.png",
      name: "proname",
    },
    {
      nftimg: "../../../../asset/upcoming/4.png",
      name: "proname",
    },
    {
      nftimg: "../../../../asset/upcoming/3.png",
      name: "proname",
    },
  ];

  return (
    <>
      <div className="upcoming-main ">
        {/* upcoming section */}

        <div className="keepnft">
          <div className="keepnft-content">
            <div className="keepnft-heading">
              <h1>Up coming</h1>
            </div>

            <Slider {...settings}>
              {nfts.map((item, index) => {
                return (
                  <div className="my-nfts" key={index}>
                    <div className="nft-card">
                      <div className="nft-card-header">
                        <img src={item.nftimg} alt="" className="img-fluid" />
                      </div>

                      <div className="nft-card-body">
                        <img
                          className="img-fluid line-img"
                          src="..\asset\upcoming\line.png"
                          alt="logo"
                        />

                        <div className="time-countdown-card">
                          <div className="card-timing-container">
                            <div className=" time-container">
                              <div className="timing">{countdown.days}</div>
                              <div className="time-unit">D'S</div>
                            </div>
                            <div className=" time-container">
                              <div className="timing">{countdown.hours}</div>
                              <div className="time-unit">H'S</div>
                            </div>
                            <div className="time-container">
                              <div className="timing">{countdown.minutes}</div>
                              <div className="time-unit">M'S</div>
                            </div>

                            <div className=" time-container">
                              <div className="timing"> {countdown.seconds}</div>
                              <div className="time-unit">SEC</div>
                            </div>
                          </div>
                          <div className="upcoming-eth">{item.name}</div>
                        </div>

                        <div className="card-btn">
                          <button className="item-btn">Total Bids 400</button>
                          <button className="price-btn">Bid 800 $</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div className="viewAllbtn">
              <button>view all</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpComing;
