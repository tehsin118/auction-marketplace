import React, { useState } from "react";

import "./createProduct.scss";

const CreateProduct = () => {
  return (
    <div>
      <section className="create-nft ">
        <div className="multiArtNFT-banner">
          <h1>New Product</h1>
          <div className="multiart-btns">
            <button>Create NFT</button>
            <button>Mint NFT</button>
          </div>
          <div className="shade"></div>
        </div>

        <div className="container">
          <div className="create-nft-content">
            <div className="left">
              <h5>upload file</h5>
              <h6>Drag or Choose your file to upload</h6>
              <div className="upload-file">
                <p>
                  PNG, GIF, WEBP, MP4 or MP3 . <br /> Max 100mb
                </p>
                <div className="uploader">
                  <label htmlFor="file">Upload File</label>
                  <input type="file" name="" id="file" />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="nft-data">
                <div className="nft-entries">
                  <p>item name</p>
                  <input type="text" />

                  <p className="mt-3">Description</p>
                  <textarea name="" id="" className="text-area" />
                </div>
                <div className="row mt-3 nft-entries custom-select">
                  <div className="col-md-4 col-12">
                    <p>Property 1</p>
                    <input type="text" placeholder="Properties" />
                  </div>
                  <div className="col-md-4 col-12">
                    <p>Property 2</p>
                    <input type="text" placeholder="properties" />
                  </div>
                  <div className="col-md-4 col-12">
                    <p>Property 3 </p>
                    <input type="text" placeholder="some text" />
                  </div>
                </div>

                <div className="row mt-3 nft-entries custom-select">
                  <div className="col-md-4 col-12">
                    <p>Start Date</p>
                    <input type="date" placeholder="Fixed Price" />
                  </div>
                  <div className="col-md-4 col-12">
                    <p>End Date</p>
                    <input type="date" placeholder="Fixed Price" />
                  </div>
                  <div className="col-md-4 col-12">
                    <p>Price</p>
                    <input type="number" placeholder="Starting Price" />
                  </div>
                </div>
                <button>create Product</button>
              </div>
              a
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateProduct;
