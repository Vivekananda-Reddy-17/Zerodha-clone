function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-4">
        <p className="fs-4 mb-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="">Zerodha.tech</a> blog.
        </p>
        <h1 className="fs-4 mt-5 mb-4">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row px-5">
        <div className="col-4 p-3 text-center">
          <img src="media/images/smallcaseLogo.png" className="w-75" />
          <p className="small text-muted mt-3">
            Thematic investing platform <br />
            that helps you invest in diversified baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img src="media/images/streakLogo.png" className="w-50" />
          <p className="small text-muted mt-4">
            Systematic trading platform <br />
            that allows you to create and backtest strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img src="media/images/sensibullLogo.svg" className="w-75" />
          <p className="small text-muted mt-4">
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine data points like
            open interest, FII/DII, and more.
          </p>
        </div>
      </div>

      <div className="row px-5">
        <div className="col-4 p-3 text-center">
          <img src="media/images/zerodhaFundhouse.png" className="w-50" />
          <p className="small text-muted mt-3">
            Our asset management venture <br /> that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img src="media/images/goldenpiLogo.png" className="w-50" />
          <p className="small text-muted mt-3">
            Simplifying fixed-income investments <br /> to help investors build wealth
            with high-rated bonds and corporate deposits
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img src="media/images/dittoLogo.png" className="w-25" />
          <p className="small text-muted mt-4    ">
            Personalized advice on life <br />
            and health insurance. No spam and no mis-selling. Sign up for free
          </p>
        </div>
      </div>
      
      <div className="row text-center mt-5 mb-5">
          <button style={{width: "25%", margin: "0 auto"}} className='btn fs-5 mb-5'>Signup for free</button>
      </div>
    </div>
  );
}

export default Universe;
