import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";

import { Tabs, Tab } from "react-bootstrap-tabs";
import "../styles/Clients.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../images/client1.jpg";
import client2 from "../images/client2.jpg";
import client3 from "../images/client3.jpg";
import client4 from "../images/client4.jpg";
import client5 from "../images/client5.jpg";
import client6 from "../images/client6.jpg";
import "../styles/Banner.scss";
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }
const Clients = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="container mb-3 py-5"
    >
      <Tab eventKey="contact" title="client" label="Corporates" className="">
        <div class="card client-card text-center">
          <div class="container client-container ">
            <h1 class="py-3 text-capitalize text-white">what clients are saying</h1>
            <div className="slider-parent">
              <Slider {...settings}>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client1}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title"> Aqeel Ahmed </h5>
                      <p class="client-sub-heading">
                        COO – RateGain January 29, 2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having started off his career as an IT professional, he
                        is definitely a very rational person who can advise you
                        very well about your potential and tendencies and how
                        you can tap them to the most and how to pretend your
                        weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client2}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Alberto Carneiro</h5>
                      <p class="client-sub-heading">
                        Childcare specialist & administration Mgr <br />
                        september 16,2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having starte, he is definitely a very rational person
                        who can advise you very well about your potential and
                        tendencies and how you can tap them to the most and how
                        to pretend your weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client3}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Adam smith</h5>
                      <p class="client-sub-heading">
                        Childcare specialist & administration Mgr <br />
                        september 16,2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having starte, he is definitely a very rational person
                        who can advise you very well about your potential and
                        tendencies and how you can tap them to the most and how
                        to pretend your weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client4}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">paul sentel</h5>
                      <p class="client-sub-heading">
                        Childcare specialist & administration Mgr <br />
                        september 16,2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having starte, he is definitely a very rational person
                        who can advise you very well about your potential and
                        tendencies and how you can tap them to the most and how
                        to pretend your weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client5}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Margaret Johri</h5>
                      <p class="client-sub-heading">
                        Childcare specialist & administration Mgr <br />
                        september 16,2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having starte, he is definitely a very rational person
                        who can advise you very well about your potential and
                        tendencies and how you can tap them to the most and how
                        to pretend your weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="contact" title="client" label="Celebreties" className="">
        <div class="card client-card text-center">
          <div class="container client-container ">
            <h1 class="py-3 text-capitalize text-white">what clients are saying</h1>
            <div className="slider-parent">
              <Slider {...settings}>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client6}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title"> Thomas Mark</h5>
                      <p class="client-sub-heading">
                        COO – RateGain January 29, 2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having started off his career as an IT professional, he
                        is definitely a very rational person who can advise you
                        very well about your potential and tendencies and how
                        you can tap them to the most and how to pretend your
                        weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client4}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Eizabeth mayere</h5>
                      <p class="client-sub-heading">
                        Childcare specialist & administration Mgr <br />
                        september 16,2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having starte, he is definitely a very rational person
                        who can advise you very well about your potential and
                        tendencies and how you can tap them to the most and how
                        to pretend your weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client5}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Margaret Johri</h5>
                      <p class="client-sub-heading">
                        Childcare specialist & administration Mgr <br />
                        september 16,2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having starte, he is definitely a very rational person
                        who can advise you very well about your potential and
                        tendencies and how you can tap them to the most and how
                        to pretend your weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client2}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Agostinho D’Mello</h5>
                      <p class="client-sub-heading">
                        Childcare specialist & administration Mgr <br />
                        september 16,2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having starte, he is definitely a very rational person
                        who can advise you very well about your potential and
                        tendencies and how you can tap them to the most and how
                        to pretend your weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client3}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Margaret Johri</h5>
                      <p class="client-sub-heading">
                        Childcare specialist & administration Mgr <br />
                        september 16,2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having starte, he is definitely a very rational person
                        who can advise you very well about your potential and
                        tendencies and how you can tap them to the most and how
                        to pretend your weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="contact" title="client" label="Others" className="">
        <div class="card client-card text-center">
          <div class="container client-container ">
            <h1 class="py-3 text-capitalize text-white">what clients are saying</h1>
            <div className="slider-parent">
              <Slider {...settings}>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client3}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title"> Aqeel Ahmed </h5>
                      <p class="client-sub-heading">
                        COO – RateGain January 29, 2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having started off his career as an IT professional, he
                        is definitely a very rational person who can advise you
                        very well about your potential and tendencies and how
                        you can tap them to the most and how to pretend your
                        weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client5}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Margaret Johri</h5>
                      <p class="client-sub-heading">
                        Childcare specialist & administration Mgr <br />
                        september 16,2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having starte, he is definitely a very rational person
                        who can advise you very well about your potential and
                        tendencies and how you can tap them to the most and how
                        to pretend your weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client6}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Margaret Johri</h5>
                      <p class="client-sub-heading">
                        Childcare specialist & administration Mgr <br />
                        september 16,2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having starte, he is definitely a very rational person
                        who can advise you very well about your potential and
                        tendencies and how you can tap them to the most and how
                        to pretend your weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client4}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Margaret Johri</h5>
                      <p class="client-sub-heading">
                        Childcare specialist & administration Mgr <br />
                        september 16,2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having starte, he is definitely a very rational person
                        who can advise you very well about your potential and
                        tendencies and how you can tap them to the most and how
                        to pretend your weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 py-1">
                  <div class="card">
                    <div class="text-center">
                      <img
                        src={client3}
                        class="card-img-top rounded-circle w-50 mx-auto d-block"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Margaret Johri</h5>
                      <p class="client-sub-heading">
                        Childcare specialist & administration Mgr <br />
                        september 16,2017
                      </p>
                      <p class="card-text">
                        {" "}
                        Prashant is an incredible astrologer and human being.
                        Having starte, he is definitely a very rational person
                        who can advise you very well about your potential and
                        tendencies and how you can tap them to the most and how
                        to pretend your weaknesses from retarding your growth.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
};
export default Clients;
