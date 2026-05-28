import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5 p-5">
      <div className="row ">
        <div className="col-5">
          <h2 className="mb-4">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div className="col-7 row d-flex flex-wrap align-items-center">
          
            <div className="pricing-box col d-flex align-items-end">
              <img
                src="media/images/pricingEquity.svg"
                alt="pricing-image"
                className="pricing-img"
              />
              <p className="pricing-img-text">
                Free Account <br /> Opening
              </p>
            </div>
            <div className="pricing-box col d-flex align-items-end">
              <img
                src="media/images/pricingEquity.svg"
                alt="pricing-image"
                className="pricing-img"
              />
              <p className="pricing-img-text">
                Free equity delivery 
                and direct mutual funds
              </p>
            </div>
            <div className="pricing-box col d-flex align-items-end">
              <img
                src="https://zerodha.com/static/images/other-trades.svg"
                alt="pricing-image"
                className="pricing-img"
              />
              <p className="pricing-img-text">
                Intraday and <br />
                F&O
              </p>
            </div>
        </div>
      </div>
      <div className="pricing-link">
        <a href="">
          See pricing <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    </div>
  );
}

export default Pricing;
