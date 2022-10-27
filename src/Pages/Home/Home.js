import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="hero bg-cover"
        style={{
          backgroundImage: `url("https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/11/banner_image5.jpg?id=1219")`,
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div
            className=" "
            style={{ marginTop: "300px", marginBottom: "300px" }}
          >
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-5xl">
              Learn a new skill online on your time 57,000 Online Courses.
            </p>
            <Link to='/courses'><button className="btn btn-primary">Start A Free TRial</button></Link>
          </div>
        </div>
      </div>

      {/* Student Review */}
    </div>
  );
};

export default Home;
