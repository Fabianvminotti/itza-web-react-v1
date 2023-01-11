export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>QUIENES SOMOS</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>¿Por qué elegirnos?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSejenjX-_V4mlfR6FioOKE13cSrd12U1yKfWyPD5uHAo9Z_yA/viewform?embedded=true" width="640" height="1528" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe> */}
    </div>
  );
};
