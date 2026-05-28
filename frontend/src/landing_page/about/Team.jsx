function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center fs-4">People</h1>
        <div className="col-5 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle w-75"
          />
          <h5 className="mt-4 mb-4">Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div className="col-7 p-5 lh-lg">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
