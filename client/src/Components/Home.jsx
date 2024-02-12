import React from 'react';
import '../styles/Home.css';
const Home = () => {
  return (
    <div>
      <header>
        <div id="header-hero">
          <div className="header-bg"> <img src="https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3164&q=80" alt="header-image" /> </div>
          <div className="header-content">
            <h1>Welcome to Shelf Shar<span className="logo-style">e</span></h1>
            <p className="description">Secondhand Treasures, Firsthand Connections: Join Shelf Share now !</p>
            <div className="button">
              <p>Explore</p>
            </div>
          </div>
        </div>
      </header>
      <section id="summer-collection">
        <div className="container">
          <div className="sc-content">
            <h1>Shelf Share</h1>
            <p className="description">
              Are you a book lover with a collection that's bursting at the seams? Or perhaps you're on the lookout for your next great read at an affordable price? Look no further than Shelf Share, the ultimate peer-to-peer book reselling website designed by book enthusiasts, for book enthusiasts.</p>
            <a href="#">discover now</a>
          </div>
          <div className="sc-media">
            <div className="sc-media-bg"> <img src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="sc-image" /> </div>
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="container">
          <div className="blog-header">
            <h2>What others Say</h2>
          </div>
          <div className="blog-content">
            <div className="blog-1">
              <div className="blog-1-image-holder"> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412548/E-commerce%20landing%20page/blog/blog-2-img_3x.jpg" alt="image" /> </div>
              <div className="blog-1-content">
                <h4>Alex P</h4>
                <h3>Simply Amazing.</h3>
                <p className="description">Shelf Share has transformed how I buy and sell books! Not only have I found amazing reads at unbeatable prices, but I've also connected with fellow bookworms who share my passion. It's a community where books continue to inspire and bring people together.</p>
                <p className="button">view post</p>
              </div>
            </div>
            <div className="blog-2">
              <div className="blog-2-image-holder"> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412543/E-commerce%20landing%20page/blog/blog-1-img_3x.jpg" alt="image" /> </div>
              <div className="blog-2-content">
                <h4>David M</h4>
                <h3>Fantastic.</h3>
                <p className="description">As a book collector, I've been searching for a platform that resonates with my values. Shelf Share's commitment to sustainability and community is commendable. I've found rare editions and helped others complete their collections. It's a win-win for readers!".</p>
                <p className="button">view post</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
