function Hero() {
  return (
    <div className="container-fluid bg-secondary bg-gradient">
      <div className="row mx-5">
        <div className="p-3 d-flex justify-content-between align-items-center mt-4">
          <span className="fs-2 text-dark fw-semibold">
            Support Portal
          </span>
          <button className="btn btn-primary fs-6">My Tickets</button>
        </div>
        <div class="input-group mb-3 mb-5">
          <span class="input-group-text p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </span>

          <input
            type="text"
            class="form-control"
            id="floatingInputGroup1"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
          <label for="floatingInputGroup1"></label>
        </div>
      </div>
    </div>
  );
}

export default Hero;
