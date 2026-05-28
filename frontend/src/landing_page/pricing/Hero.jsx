function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-5 mt-5">
        <h1 className="fs-3">Charges</h1>
        <p className="text-muted fs-5 mt-3">List of all charges and taxes</p>
      </div>
      <hr />
      <div className="row">
        <div className="col-4 p-4 text-center">
          <img src="media/images/pricing0.svg" alt="Zero"  className="p-5"/>
          <h1 className="fs-3 mb-4">Free Equity Delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4 text-center">
          <img src="media/images/pricing20.svg" alt="Zero" className="p-5"/>
          <h1 className="fs-3 mb-4">Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4 text-center">
          <img src="media/images/pricing0.svg" alt="Zero" className="p-5"/>
          <h1 className="fs-3 mb-4">Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
      <div className="row text-center mt-5 mb-5">
          <p className="fs-4"><a href="">Calculate your costs upfront</a> using our Brokerage Calculator</p>
      </div>
    </div>
  );
}

export default Hero;
