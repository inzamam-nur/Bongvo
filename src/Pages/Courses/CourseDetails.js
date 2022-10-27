import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { title, details, image_url } = course;
    return (
      <div>
        <div className="card lg:card-side bg-base-100  mb-5">
          <figure>
            
          </figure>
          <div
            className="card-body "
            style={{ backgroundColor: "rgb(242,242,238)", color: "rgb(0,0,0)" }}
          >
            <img src={image_url} alt="Album" />
            <h2 className="card-title">{title}</h2>
            <p>
              <p>{details}</p>
            </p>
          </div>
        </div>
        </div>
    );
};

export default CourseDetails;