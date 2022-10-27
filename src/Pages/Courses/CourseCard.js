import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { id, title, image_url, details, tutor, rating } = course;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 mt-5 mb-5">
        <figure>
          <img src={image_url} alt="Album" />
        </figure>
        <div
          className="card-body "
          style={{ backgroundColor: "rgb(242,242,238)", color: "rgb(0,0,0)" }}
        >
          <h2 className="card-title">{title}</h2>
          <p>
            {" "}
            {details?.length > 100 ? (
              <>
                {details.slice(0, 100) + "..."}
                <Link className="text-blue" to={`/course/${id}`}>
                  Read more
                </Link>
              </>
            ) : (
              <p>{details}</p>
            )}
          </p>
          <div>
            <div className="flex flex-row">
              <h3 className="mr-5 font-bold	">Course Tutor</h3>
              <div className="flex flex-row ">
                <h4 className="mr-5">{tutor.name}</h4>
                <img
                  style={{ height: "30px" }}
                  className="rounded-full"
                  src={tutor.img}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-5">
              <>
                <small className="mr-3">{rating.number}</small>
              </>
              <>
                <small className="mr-5">{rating.badge}</small>
              </>
              <>
                <Link to= {`/course/${id}`}><button  className="btn btn-outline ">Details</button></Link>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
