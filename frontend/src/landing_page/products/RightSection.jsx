function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 mt-5">
          <h1 className="fs-4">{productName}</h1>
          <p className="lh-lg mt-3">
            {productDescription}
          </p>
          <a href={learnMore}>Learn more →</a>
        </div>
        <div className="col-6 ms-5">
          <img src={imageURL} alt="Console" className="ms-5"/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
