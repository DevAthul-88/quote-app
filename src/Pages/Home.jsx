import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Ill from "../assets/image.png";

function Home() {
  return (
    <>
      <Helmet>
        <title>Quote App - Home</title>
        <meta name="description" content="A app that gives you quotes" />
      </Helmet>
      <div className="mt-5">
        <div className="row gx-5">
          <div className="col-md-6 mt-5">
            <h1>Simple, Fast, Free Quote Generator.</h1>
            <p>
              Search and find the best Quotes for every occasion with the Quotes
              Generator. Whether for Instagram, Speeches, WhatsApp Statuses or
              just for you to think and inspire.
            </p>
            <Link to="/random" className="btn btn-primary">
              Get started
            </Link>
          </div>
          <div className="col-md-4">
            <img src={Ill} alt="hero_image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
