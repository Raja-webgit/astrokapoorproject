import React, { useState, useEffect } from "react";
import axios from 'axios';
import Slider from "react-slick";
import '../scss/App.scss';
import '../scss/font.scss';
import divider from '../images/Line 61.png';
import ReactPlayer from 'react-player';
import expert1 from '../images/expert1.jpg';
import expert2 from '../images/expert2.jpg';
import expert3 from '../images/expert3.jpg';
import expert4 from '../images/expert4.png';
import icon1 from '../images/Vector (3).png';
import icon2 from '../images/Vector (4).png';
import icon3 from '../images/Vector(5).png';
function Vedios() {
    const [vedio, setVedio] = useState([])
    useEffect(() => {

        axios.post('http://18.119.105.189:4000/api/product/getAllvideos')

            .then(res => {
                //console.log(res.data);
                setVedio(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    })
    const getDate = (date) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString([], options);
    }
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
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
        <div className="Blogs" style={{ marginTop: '5%'}} >
           <hr></hr>
            <p className="services-heading text-center py-4">LATEST VIDEOS</p>
          
            
            <img className="divider" src={divider} alt="divider" />
            <div className="horoscope_carousel">
            <Slider {...settings} className="slider">
{vedio.map((row, index) => (
    <div key={index} className="expert_slider">
 
<div className="expert_image">
                           <ReactPlayer
                               url={row.videourl}
                               controls
                               
                               width="300px"
                               height="290px"
                               
                           />
                       </div>
                       <div className="expert_cart_text1">
                           <div className="expert_name">
                               <p className="expert_text">{row.videotitle}</p>
                               <p className="expert_text">{getDate(row.createdAt)}</p>
                           </div>
                       </div>

    
    </div>
))}

    

</Slider>
<div className=" container video-btn">
        <a href="/video" className="btn-video">
          VIEW ALL
        </a>
        <hr></hr>
      </div>

      


</div>
          </div>
    );
}

export default Vedios;
