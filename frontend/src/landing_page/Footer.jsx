/* eslint-disable no-irregular-whitespace */
function Footer() {
  return (
      <footer>
    <div className="container">
      <div className="row">
        <div className="col-3">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "50%" }}
            className="mb-4"
          />
          <p>&copy; 2010 - 2025, Zerodha Broking Ltd.</p>
          <p>All rights reserved</p>
        </div>
        <div className="col-2">
          <ul className="list-unstyled">
            <li className="fs-5 text-dark mb-3">Account</li>
            <li className="mb-3">Open demat account</li>
            <li className="mb-3">Minor demat account</li>
            <li className="mb-3">NRI demat account</li>
            <li className="mb-3">Commodity</li>
            <li className="mb-3">Dematerialisation</li>
            <li className="mb-3">Fund transfer</li>
            <li className="mb-3">MTF</li>
            <li className="mb-3">Referral program</li>
          </ul>
        </div>
        <div className="col-2">
          <ul className="list-unstyled">
            <li className="fs-5 text-dark mb-3">Support</li>
            <li className="mb-3">Contact us</li>
            <li className="mb-3">Support portal</li>
            <li className="mb-3">How to file a complaint?</li>
            <li className="mb-3">Status of your complaints</li>
            <li className="mb-3">Bulletin</li>
            <li className="mb-3">Circular</li>
            <li className="mb-3">Z-Connect blog</li>
            <li className="mb-3">Downloads</li>
          </ul>
        </div>
        <div className="col-2">
          <ul className="list-unstyled">
            <li className="fs-5 text-dark mb-3">Company</li>
            <li className="mb-3">About</li>
            <li className="mb-3">Philosophy</li>
            <li className="mb-3">Press & media</li>
            <li className="mb-3">Careers</li>
            <li className="mb-3">Zerodha Cares (CSR)</li>
            <li className="mb-3">Zerodha.tech</li>
            <li className="mb-3">Open source</li>
          </ul>
        </div>
        <div className="col-2">
          <ul className="list-unstyled">
            <li className="fs-5 text-dark mb-3">Quick links</li>
            <li className="mb-3">Upcoming IPOs</li>
            <li className="mb-3">Brokerage charges</li>
            <li className="mb-3">Market holidays</li>
            <li className="mb-3">Economic calendar</li>
            <li className="mb-3">Calculators</li>
            <li className="mb-3">Markets</li>
            <li className="mb-3">Z-Connect blog</li>
            <li className="mb-3">Sectors</li>
          </ul>
        </div>
      </div>
      <div className="footer-text mt-5">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration
          no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
          4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p>
          India's largest broker based on networth as per NSE.{" "}
          <a href="">NSE broker factsheet</a>
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please{" "}
          <a href="">create a ticket here.</a>
        </p>
      </div>
    </div>
    <div className="footer-links text-center">
        <ul className="list-inline">
            <li className="list-inline-item"><a href="">NSE</a></li>
            <li className="list-inline-item"><a href="">BSE</a></li>
            <li className="list-inline-item"><a href="">MCX</a></li>
            <li className="list-inline-item"><a href="">Terms & Conditions</a></li>
            <li className="list-inline-item"><a href="">Policies and procedures</a></li>
            <li className="list-inline-item"><a href="">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="">Disclosure</a></li>
            <li className="list-inline-item"><a href="">For inverstor's Attention</a></li>
            <li className="list-inline-item"><a href="">Investor charter</a></li>
        </ul>
    </div>
    </footer>
  );
}

export default Footer;
