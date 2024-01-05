import "./hero.scss";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: "url(images/air.png)" }}
    >
      <div className="hero__container"></div>
      <svg className="hero__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#131b25"
          fillOpacity="1"
          d="M0,288L34.3,250.7C68.6,213,137,139,206,122.7C274.3,107,343,149,411,160C480,171,549,149,617,154.7C685.7,160,754,192,823,181.3C891.4,171,960,117,1029,101.3C1097.1,85,1166,107,1234,138.7C1302.9,171,1371,213,1406,234.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
