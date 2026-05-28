function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row ">
        <div className="col-8">
          <img src={imageURL} alt="Kite" />
        </div>
        <div className="col-4 mt-5 lh-lg">
          <h1 className="fs-4">{productName}</h1>
          <p className="mt-3">{productDescription}</p>
          <p>
            <a href={tryDemo}>Try demo →</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp; <a href={learnMore}>Learn more →</a>
          </p>
          <div>
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Play Store"
                className="me-5"
              />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
