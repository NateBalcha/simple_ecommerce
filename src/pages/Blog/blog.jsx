import React, { useEffect } from "react";
import "./blog.css";
export const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products! </p>
      </section>

      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src="/images/ps5.jpg" alt="b1img" />
          </div>
          <div className="blog-details">
            <h4>The brand new PlayStation 5 revleaved by Sony</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony, godard…
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="/images/macbook.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>MacBook Pro 2021</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony, godard…
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/04</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="/images/truck.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>The future is here!!</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony, godard…
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>12/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="/images/metaQuest.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>MetaQuest 2</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony, godard…
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>16/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="/images/goPro.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>GoPro</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony, godard…
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>10/03</h1>
        </div>
      </section>
    </div>
  );
};
