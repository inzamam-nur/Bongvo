import React from "react";

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
            style={{ marginTop: "150px", marginBottom: "150px" }}
          >
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-5xl">
              Learn a new skill online on your time 57,000 Online Courses.
            </p>
            <button className="btn btn-primary">Start A Free TRial</button>
          </div>
        </div>
      </div>

      {/* Student Review */}
      <div
        className="hero bg-cover"
        style={{
          backgroundImage: `url("https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/11/background.jpg?id=1154")`,
        }}
      >
        <div className=""></div>
        <div  className="hero-content text-neutral-content ">
          <div
            className=" "
            style={{ marginTop: "150px", marginBottom: "150px" }}
          >
            <h1 className="mb-5 text-5xl font-bold">Our Happy Students</h1>
            <p   className=" mb-5 text-2xl">
            Excellent content and assignments that build on your knowledge, reinforce, and then expand. I recently secured new employment using PHP and couldn't have done so without the Professional Web Development courses.
            </p>
            <h4>David Fahim</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
