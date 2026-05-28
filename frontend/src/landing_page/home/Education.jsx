import React from "react";

function Education() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <img src="media/images/education.svg" alt="varsity img" style={{width: "80%"}}/>
        </div>
        <div className="col">
          <h2 className="mb-4 mt-4 fs-3 ">Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="">
            Varsity <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="">
            Trading Q&A <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
