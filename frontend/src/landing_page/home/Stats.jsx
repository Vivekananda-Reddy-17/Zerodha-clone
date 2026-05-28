import React from "react";

function Stats() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-5 p-5">
          <h3>Trust with confidence</h3>
          <h4 className="fs-4 mt-5">Customer-first always</h4>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h4 className="fs-4 mt-4">No spam or gimmicks</h4>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. <a href="">Our
            philosophies.</a>
          </p>
          <h4 className="fs-4 mt-4">The Zerodha universe</h4>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4 className="fs-4 mt-4">Do better with money</h4>
          <p>
            With initiatives like <a href="">Nudge</a> and <a href="">Kill Switch</a>, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-7 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem stats"
            className="w-100"
          />
          <div className="text-center mt-5">
            <a href="" className="mx-5">Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
            <a href="">Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
      <div className="w-100 text-center"><img src="media/images/pressLogos.png" alt="press logos" /></div>
    </div>
  );
}

export default Stats;
