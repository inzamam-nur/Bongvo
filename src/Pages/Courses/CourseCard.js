import React from "react";

const CourseCard = ({course}) => {
 const {title,image_url,details}=course;
  return (
   <div >
     <div className="card lg:card-side bg-base-100  mb-5">
  <figure></figure>
  <div className="card-body " style={{backgroundColor:'rgb(242,242,238)',color:'rgb(0,0,0)'}}>
  <img src={image_url} alt="Album"/>
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
   </div>
       
  );
};

export default CourseCard;
