
const Footer = () => {
  return (
    <footer>
      <div
        className="row justify-content-center mt-0 pt-0 row-1 mb-0  px-sm-3 px-2"
        style={{ marginRight: "0px", paddingRight: "0px" }}
      >
        <div className="col-12">
          <div className="row my-4 row-1 no-gutters">
            <div className="col-sm-3 col-auto text-center">
              <small>&#9400; Amirhossein Rahmani</small>
            </div>
            <div className="col-md-3 col-auto "></div>
            <div className="col-md-3 col-auto"></div>
            <div className="col  my-auto text-md-left  text-right ">
              {" "}
              <small>
                {" "}
                <a href="https://www.linkedin.com/in/amirhosseinrahmani">
                  LinkedIn
                </a>{" "}
              </small>{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
