import React from "react";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const course = useLoaderData();
  const { title, image_url, details } = course;
  return (
    <div>
      <div className="card lg:card-side bg-base-100  mb-5">
        <div
          className="card-body "
          style={{ backgroundColor: "rgb(242,242,238)", color: "rgb(0,0,0)" }}
        >
          <figure>
            <img
              style={{ height: "400px", width: "400px" }}
              src={image_url}
              alt="Album"
            />
          </figure>
          <div style={{margin:'100px'}} className="text-center">
            {" "}
            <h2  >{title}</h2>
            <p>{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
