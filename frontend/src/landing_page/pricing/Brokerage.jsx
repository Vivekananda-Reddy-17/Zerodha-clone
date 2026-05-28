function Brokerage() {
  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="fs-4">Charges for Account Opening</h1>
      </div>
      <div className="row mb-5">
        <table className="table table-bordered mb-5">
          <thead>
            <tr>
              <th scope="col">Type of Account</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td><span className="bg-success p-1 text-light px-2">FREE</span></td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td><span className="bg-success p-1 text-light px-2">FREE</span></td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>&#8377;500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>&#8377;500</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="row mb-4 mt-5">
        <h1 className="fs-4">Charges for Optional value added services</h1>
      </div>
      <div className="row">
        <table className="table table-bordered mb-5">
          <thead>
            <tr>
              <th scope="col">Service</th>
              <th scope="col">Billing Frequency</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;
