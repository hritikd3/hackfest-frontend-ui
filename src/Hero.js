import React from "react";
import phoneImg from "./images/Online calendar-bro.svg";
import { useGlobalContext } from "./context";
import { imagu } from "./images/card1.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <>
      <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="hero-info">
            <h1>
              Mock <span>Interviews</span> <br />
              Made <span>Easy </span>
            </h1>
            <p>
              Mock
              <b>
                <span>Int </span>
              </b>{" "}
              - A platform where you can easily schedule your mock or either
              take mock of someone else . Isn't this is interesting ? Try It Now
            </p>
            <button className="btn">Start now </button>
          </article>
          <article className="hero-images">
            <img src={phoneImg} className="phone-img" alt="phone" />
          </article>
        </div>
      </section>

      <section className="mid-section">
        <div className="home-section">
          <h2>
            {" "}
            schedule interview with users <br />{" "}
            <span>
              {" "}
              <b>worldwide </b>{" "}
            </span>
          </h2>
        </div>
      </section>
      <div className="card-container">
        <article className="cards">
          <div className="card-wrapper">
            <h3 className="card-text">
              Create <span> slot </span> <br />
              ...
            </h3>
            <p className="card-para">
              {" "}
              It's Simple and easy to open your slot for Mock .{" "}
            </p>
          </div>
        </article>

        <article className="cards">
          <div className="card-wrapper">
            <h3 className="card-text">
              share your <span>code </span> <span>...</span>
            </h3>
            <p className="card-para">
              {" "}
              After creating slot simply share your code with the pewrson you
              want to schedule or go withg our random selection.{" "}
            </p>
          </div>
        </article>
        <article className="cards">
          <div className="card-wrapper">
            <h3 className="card-text">
              Get <span>Booked </span> <br />
              ...
            </h3>
            <p className="card-para">
              {" "}
              You slot is booked now , get ready for your Mock . Enjoy with
              MockInt{" "}
            </p>
          </div>
        </article>
      </div>

      <footer className="footer">
        <div className="footer-wrapper">
          <aside className="credit ">hey</aside>
        </div>
      </footer>
    </>
  );
};

export default Hero;
