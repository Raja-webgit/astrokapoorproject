import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import Slider from "react-slick";
import "../styles/OurServices.scss";
import image1 from "../images/safrron-xd.png";
import image2 from "../images/predictionofmarraige.jpg";
import image3 from "../images/marraigeorlove.jpg";
import image4 from "../images/remedial.jpg";
import image5 from "../images/spouse.jpg";
import image6 from "../images/marital.jpg";
import image7 from "../images/spouse.jpg";
import image8 from "../images/vedic.jpg";
import image9 from "../images/marriedlife.jpg";
import image10 from "../images/loveanrel.png";
import image11 from "../images/vedicastro.png";
import image12 from "../images/medicalastro.png";
import image13 from "../images/carrerastro.png";
import image14 from "../images/astroreport.png";
import image15 from "../images/corporateastro.png";
import image16 from "../images/childastro.png";
import image17 from "../images/counselling.png";  

import image19 from "../images/vedicyagyas.png";
import image20 from "../images/bollywood.png"; 
import image21 from "../images/rudraksha.png";  
import image22 from "../images/vedicmuhurta.png"; 
import image23 from "../images/numerology.png";
import image24 from "../images/stockmarket.png"; 
import image25 from "../images/tarotastro.png";
import { arrow } from "@popperjs/core";


const OurServices = () => {
  const settings = {
      dots: false,
      infinite:false,
      speed: 500,
      arrows: true,
      autoplay: false,
      slidesToShow: 5,
      slidesToScroll: 2,
      className: 'slider',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };

  return (
    <>
    <div className="container py-4">
        <div className="row">
          <div class="col text-center"></div>
          <p className="services-heading text-center">Our Services</p>
          <p className=" text-center">
            We at AstroKapoor believe in "Health,Wealth and Prosperity" <br />
            In AstroKapoor we provide various consulting services, among which
            Medical Astrology and Corporate Astrology are key services.
          </p>
        </div>
        </div>
     <div className="container slide-items">
     
        <Slider {...settings}>
          <div className="right-menu">
          <a href="/services/17981"><img src={image10} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="/servicedetails/6361">Vedic Matchmaking</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8558">Vedic Matchmaking Package</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8574">When Solemnization of My Marriage</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8578">Muhurata for Marriage
</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8617">Compatibility Analysis</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8627">Marital Problems Solutions
</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/11212">How Will Be My Married Life</a></li>
            </ul>
          </div>
          </div>
          <div className="right-side-items slider-img">
          <a href="/services/18002"><img src={image11} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="/servicedetails/8665">Astro Consultation Single Question</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8934">Astrology Consultancy</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8939">Palm Reading</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8950">Property Vehicle Sale and Buy Analysis</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8960">Handmade Horoscope-Kundli</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8967">Prashna Kundli</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8972">Family Astrology</a></li>
            </ul>
          </div>
          </div>
          <div className="right-side-items slider-img">
          <a href="/services/18004"><img src={image12} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="/servicedetails/6362">Medical Astrology Consultation</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8140">Azoospermia Treatment in Medical Astrology</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8142">Female Infertility Treatment in Medical Astrology</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8681">Infertility solution for Couples</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8688">PCOD Treatment in Medical Astrology</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8691">Oligospermia Treatment in Medical Astrology</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8696">Obesity Treatment in Medical Astrology</a></li>
            </ul>
          </div>
          </div>
          <div className="right-side-items slider-img">
          <a href="/services/18126"><img src={image13} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="/servicedetails/8692">Career Astrology Foreign Settlement</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/9061">Child Career Report One Year</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/9216">Money and Career Astrology</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
              <li className="item text-center"><a className="text-white" href="#">about</a></li>
              <li className="item text-center"><a className="text-white" href="#">services</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
            </ul>
          </div>
          </div>
          <div className="right-side-items slider-img">
          <a href="/services/18137"><img src={image14} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="/servicedetails/8700">Vedic Education Report Predictions</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8716">Career Astrology Report Online</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8724">Finance Report Astrology</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8735">Business Report</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8749">Love Compatibility Astrology Check</a></li>
              <li className="item text-center"><a className="text-white" href="#">Acquisition Report</a></li>
              <li className="item text-center"><a className="text-white" href="#">Partnership Analysis</a></li>
            </ul>
          </div>
          </div>
          <div className="right-side-items slider-img">
          <a href="/services/18154"><img src={image15} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="/servicedetails/8761">Compatibility Analysis Report</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8772">Current business analysis</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8776">New Venture Analysis
</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8780">Raising finance</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8784">Diversification Analysis</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8802">Acquisition Report</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8817">Partnership Analysis</a></li>
            </ul>
          </div>
          </div>
          <div className="right-side-items slider-img">
          <a href="/services/18158"><img src={image16} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="/servicedetails/8459">Child Astrology Consultation</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/9045">Birth Time Selection</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/9053">Child Education</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/12272">Baby Name Selection</a></li>
              <li className="item text-center"><a className="text-white" href="#">about</a></li>
              <li className="item text-center"><a className="text-white" href="#">services</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
            </ul>
          </div>
          </div>
          <div className="right-side-items slider-img">
          <a href="/services/18187"><img src={image17} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="/servicedetails/15953">Marriage and Family Counselling</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/15954">Career Counselling and Guidance</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/15955">Mental Health Counselling
</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
              <li className="item text-center"><a className="text-white" href="#">about</a></li>
              <li className="item text-center"><a className="text-white" href="#">services</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
            </ul>
          </div>
          </div>
          <div className="right-side-items slider-img">
          <a href="/services/18211"><img src={image19} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="/servicedetails/8513">Maha Ganapati Yagya</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8561">Maha Saraswati Yagya</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8577">Maha Lakshmi Yagya</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8601">Maha Vishnu Yagya</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8605">Kanak Dhara Yagya</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8612">Bhagavad Gita Yagya</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/8618">Maha Durga Yagya or Maha Shakti Pooja</a></li>
            </ul>
          </div>
          </div>
          <div className="right-side-items slider-img">
          <a href="/services/18214"><img src={image20} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="/servicedetails/10834">Movie Naming Convention Bollywood Astrology</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/10835">Kundali Match of the Cast & Crew</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/10836">Shubh Muhurat-Date Day Time</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/10837">Movie Set-Location Finalization</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/10836">Bollywood Astrology Consultation</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/10837">Bollywood Astrological Career Growth Report</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/10838">Financial Stability in Bollywood</a></li>
            </ul>
          </div>
          </div>
          <div className="right-side-items slider-img">
          <a href="/services/18216"><img src={image21} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="Rudraksha Therapy Consultation">Rudraksha Therapy Consultation</a></li>
              <li className="item text-center"><a className="text-white" href="#">about</a></li>
              <li className="item text-center"><a className="text-white" href="#">services</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
              <li className="item text-center"><a className="text-white" href="#">about</a></li>
              <li className="item text-center"><a className="text-white" href="#">services</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
            </ul>
          </div>
          </div>
          <div className="right-side-items slider-img">
          <a href="/services/18219"><img src={image22} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="/servicedetails/8477">Auspicious Muhurat</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/9034">Mundan Sanskar</a></li>
              <li className="item text-center"><a className="text-white" href="#">services</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
              <li className="item text-center"><a className="text-white" href="#">about</a></li>
              <li className="item text-center"><a className="text-white" href="#">services</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
            </ul>
          </div>
          </div>
          <div className="right-side-items slider-img">
          <a href="/services/18221"><img src={image23} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="/servicedetails/13432">Name Change By Numerology</a></li>
              <li className="item text-center"><a className="text-white" href="/servicedetails/15198">Numerology Consultation</a></li>
              <li className="item text-center"><a className="text-white" href="#">services</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
              <li className="item text-center"><a className="text-white" href="#">about</a></li>
              <li className="item text-center"><a className="text-white" href="#">services</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
            </ul>
          </div>
          </div>
          <div className="right-side-items slider-img">
          <a href="/services/18223"><img src={image24} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="/servicedetails/8408">Stock Market Astrology Predictions</a></li>
              <li className="item text-center"><a className="text-white" href="#">about</a></li>
              <li className="item text-center"><a className="text-white" href="#">services</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
              <li className="item text-center"><a className="text-white" href="#">about</a></li>
              <li className="item text-center"><a className="text-white" href="#">services</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
            </ul>
          </div>
          </div>
          <div className="right-side-items slider-img">
          <a href="/services/18226"><img src={image25} class="img-fluid" alt="..."/></a>
          <div className="dropdown-items">
            <ul className="items">
              <li className="item text-center"><a className="text-white" href="/servicedetails/9111">Tarot Card Consultation</a></li>
              <li className="item text-center"><a className="text-white" href="#">about</a></li>
              <li className="item text-center"><a className="text-white" href="#">services</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
              <li className="item text-center"><a className="text-white" href="#">about</a></li>
              <li className="item text-center"><a className="text-white" href="#">services</a></li>
              <li className="item text-center"><a className="text-white" href="#">extras</a></li>
            </ul>
          </div>
          </div>
        </Slider>
      </div>




    {/*
      <div className="container py-5">
        <div className="row">
          <div class="col text-center"></div>
          <p className="services-heading text-center">Our Services</p>
          <p className=" text-center">
            We at AstroKapoor believe in "Health,Wealth and Prosperity" <br />
            In AstroKapoor we provide various consulting services, among which
            Medical Astrology and Corporate Astrology are key services.
          </p>
        </div>
        <div class="container">
  <div class="row g-0">
    <div class="col ">
    <div class="card service-card">
    <img class="card-img-top "src={image10} alt="Card image cap"/>
  </div>
    </div>
    <div class="col ">
    <div class="card service-card">
    <img class="card-img-top "src={image11} alt="Card image cap"/>
  </div>
    </div>
    <div class="col ">
    <div class="card service-card">
    <img class="card-img-top "src={image12} alt="Card image cap"/>
  </div>
    </div>
    <div class="col ">
    <div class="card service-card">
    <img class="card-img-top "src={image13} alt="Card image cap"/>
  </div>
    </div>
    <div class="col ">
    <div class="card service-card mt-2">
    <img class="card-img-top "src={image14} alt="Card image cap"/>
  </div>
    </div>
    <div class="col  ">
    <div class="card service-card">
    <img class="card-img-top "src={image15} alt="Card image cap"/>
  </div>
    </div>
    <div class="col ">
    <div class="card service-card">
    <img class="card-img-top "src={image16} alt="Card image cap"/>
  </div>
    </div>
    <div class="col ">
    <div class="card service-card">
    <img class="card-img-top"src={image17} alt="Card image cap"/>
  </div>
    </div>
  </div>
  
</div>
        <div class="row mx-auto pt-3 g-0">
          <div class="col">
            <div class="card-group">
              <div class="card service-card  ps-5 ms-1 d-flex justify-content-center ps-1">
                <a href="#">
                  {" "}
                  <img src={image19} class="img-fluid card-img-top img-size ms-2" alt="..." />
                </a>
               
              </div>
              <div class="card service-card ">
                <a href="#">
                  {" "}
                  <img src={image20} class="img-fluid card-img-top img-size  " alt="..." />
                </a>
               
              </div>
              <div class="card service-card">
                <a href="#">
                  {" "}
                  <img src={image21} class="img-fluid card-img-top img-size ms-1 " alt="..." />
                </a>
                
              </div>
              <div class="card service-card ">
                <a href="#">
                  {" "}
                  <img src={image22} class="img-fluid card-img-top img-size ms-3 " alt="..." />
                </a>
               
              </div>
      
              <div class="card service-card ">
                <a href="#">
                  {" "}
                  <img src={image23} class="img-fluid card-img-top img-size ms-3 " alt="..." />
                </a>
               
              </div>
              <div class="card service-card  ">
                <a href="#">
                  {" "}
                  <img src={image24} class="img-fluid card-img-top img-size ms-3 " alt="..." />
                </a>
               
              </div>
              <div class="card service-card pe-5 ">
                <a href="#">
                  {" "}
                  <img
                    src={image25}
                    class="img-fluid card-img-top img-size ms-2 "
                    alt="..."
                  />
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
{/*
      <div className="container py-2">
        <div class="row px-auto">
          <div class="col-lg-3">
            <div class="card">
              <img src={image2} class="card-img-top" alt="..." />
              <div class="card-body  ">
                <h6 class="card-title text-center">
                  Prediction Of My Marriage
                </h6>
                <p class=" text-center marraige-prediction">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card">
              <img src={image3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title text-center">
                  My Marriage Will Be Love Or Arranged
                </h6>
                <p class=" text-center">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹2,100.00</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={image4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title text-center">
                  Remedial Astrology For Delay In Marriage
                </h6>
                <p class=" text-center ">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 ">
            <div class="card">
              <img src={image5} class="card-img-top" alt="..." />
              <div class="card-body ">
                <h6 class="card-title text-center">
                  Spouse Search Name Report
                </h6>
                <p class=" text-center  marraige-prediction">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row px-auto">
          <div class="col-lg-3 py-4">
            <div class="card">
              <img src={image6} class="card-img-top" alt="..." />
              <div class="card-body  ">
                <h6 class="card-title text-center">
                  Marital Problems Solutions
                </h6>
                <p class=" text-center ">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 py-4">
            <div class="card">
              <img src={image7} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title text-center">
                  Spouse Search Name Report
                </h6>
                <p class=" text-center">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹2,100.00</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 py-4">
            <div class="card">
              <img src={image8} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title text-center">Vedic Matchmaking</h6>
                <p class=" text-center ">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 py-4 ">
            <div class="card">
              <img src={image9} class="card-img-top" alt="..." />
              <div class="card-body ">
                <h6 class="card-title text-center">
                  How Will Be My Married Life
                </h6>
                <p class=" text-center">
                  <span class="card-text text-line text-center">
                    ₹5,400.00{" "}
                  </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button type="button" class="btn  services-btn">
            VIEW MORE
          </button>
        </div>
      </div>
   */}
      </>
  );
};
export default OurServices;
