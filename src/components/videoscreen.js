import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../scss/App.scss';
import '../scss/font.scss';
import '../scss/about.scss';
import '../scss/blog.scss';
import fb from "../images/facebook.png";
import wp from "../images/twitter.png";
import yb from "../images/linkedin.png";
import insta from "../images/google-plus.png";
import calendar from "../images/calendar.png";
import ReactPlayer from 'react-player';
import comment from "../images/comment.png";

function Videoscreen() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.post('http://18.119.105.189:4000/api/product/getAllvideos')
      .then(res => {
        console.log(res);
        setPosts(res.data.data)
        console.log((res.data))
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const getDate = (date) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString([], options);
  }

  return (
    <div className="BlogScreen">
      <Navbar />
      <div className="header_image">
        <span className="header_text1">Videos</span>
       
      </div>
      <div className="Blogrow animate__animated animate__bounce" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%', flexWrap: 'wrap' }}>
        {posts.map(post => {
          return (
            <div>
              <Card style={{ width: '22rem', height: '29rem', marginBottom: '20px' }}>
              <div className="expert_image">
                           <ReactPlayer
                               url={post.videourl}
                               controls
                               
                               width="350px"
                               height="300px"
                           />
                       </div>
                <Card.Body>
                  <Card.Title className="blog_title">{post.videotitle}</Card.Title>
                  <div className="social">
                    <div className="calendar">
                      <img src={calendar} alt="calendar" />
                      <Card.Text style={{ color: 'blue' }} className="blog_content">{getDate(post.createdAt)}</Card.Text>
                    </div>
                    {/*
                    <div className="comment">
                      <img src={comment} alt="comment" />
                      <Card.Text style={{ color: 'blue' }} className="blog_content">{post.comments.length}</Card.Text>
                    </div>
                    */}
                  </div>
                  <Card.Text style={{ color: 'black' }} className="blog_content">
                    {post.content}
                  </Card.Text>
                  <div className="social">
                    <div className="icon">
                      <a href="http://www.facebook.com/sharer.php?u=https://astrokapoor.com/saturn-retrograde-2021/&amp;i=https://astrokapoor.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-17-at-10.27.22-PM-2.jpeg&amp;t=Saturn Retrograde 2021"><img src={fb} alt="fb" /></a>
                      <a href="https://twitter.com/intent/tweet?text=Saturn Retrograde 2021&amp;url=https://astrokapoor.com/saturn-retrograde-2021/"><img src={wp} alt="wp" /></a>
                      <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://astrokapoor.com/saturn-retrograde-2021/&amp;title=Saturn Retrograde 2021"><img src={yb} alt="insta" /></a>
                      <a href="https://plus.google.com/share?url=https://astrokapoor.com/saturn-retrograde-2021/"><img src={insta} alt="yb" /></a>

                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Videoscreen;
