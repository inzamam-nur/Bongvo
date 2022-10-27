import React from "react";
import { useLoaderData } from "react-router-dom";
import Rightsidenav from "../Rightsidenav/Rightsidenav";

const Courses = () => {
  const course = useLoaderData();
  const { title, image_url, details } = course;
  return (
    <div
      style={{
        marginBottom: "300px",
        height: "100%",
        width: "100%",
        margin: "auto",
      }}
      className="bg-gray-200"
    >
      <div
        style={{ width: "80%", margin: "50px auto" }}
        className="grid grid-cols-3 gap-4"
      >
        <div className="col-span-2 ...">
          <div>
            <div className="card lg:card-side bg-base-100  mb-5">
              <div
                className="card-body "
                style={{
                  backgroundColor: "rgb(242,242,238)",
                  color: "rgb(0,0,0)",
                }}
              >
                <figure>
                  <img
                    style={{ height: "200px", width: "200px" }}
                    src={image_url}
                    alt="Album"
                  />
                </figure>
                <div style={{ margin: "" }} className="text-center">
                  {" "}
                  <h2>{title}</h2>
                  <p>{details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "100px" }} className="text-center ">
          <Rightsidenav></Rightsidenav>
        </div>
      </div>
    </div>
  );
};

export default Courses;
