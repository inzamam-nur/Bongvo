import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Rightsidenav from "../Rightsidenav/Rightsidenav";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Courses = () => {
  const course = useLoaderData();
  const { id, title, image_url, details } = course;
  return (
    <div>
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          <div className=" col-span-2 ...">
          <div className="col-span-2  mt-5">
          <div>
            <div className="card lg:card-side bg-base-100  mb-5">
              <div
                className="card-body "
                style={{
                  backgroundColor: "rgb(242,242,238)",
                  color: "rgb(0,0,0)",
                }}
              >
                <Pdf  targetRef={ref} filename="code-example.pdf">
                  {({ toPdf }) => (
                    <button onClick={toPdf} className="btn btn-info">
                      Download Pdf
                    </button>
                  )}
                </Pdf>
                <div  ref={ref}>
                  <img
                    style={{
                      height: "200px",
                      width: "500px",
                      margin: "auto",
                      paddingBottom: "30px",
                    }}
                    src={image_url}
                    alt="Album"
                  />

                  <div style={{ margin: "" }} className="text-center">
                    {" "}
                    <h2 className="font-bold	">{title}</h2>
                    <p >{details}</p>
                  </div>
                </div>

                <Link to={`/checkout/${id}`}>
                  {" "}
                  <button className="mb-5 mt-5 btn btn-active  w-full">
                    Get Premium Access
                  </button>
                </Link>
                <Link className="mt-5" to="/courses">
                  {" "}
                  <button className="btn btn-active  w-full">GO Back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
          </div>
          <div
            className="hidden lg:block"
            style={{ width: "80%", margin: "50px auto" }}
          >
            <Rightsidenav></Rightsidenav>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Courses;
