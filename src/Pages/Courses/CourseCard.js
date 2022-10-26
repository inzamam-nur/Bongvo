import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({course}) => {
 const {title,image_url,details}=course;
  return (
   <div >
     <div className="card lg:card-side bg-base-100  mb-5">
  <figure><img src={image_url} alt="Album"/></figure>
  <div className="card-body " style={{backgroundColor:'rgb(242,242,238)',color:'rgb(0,0,0)'}}>
  
    <h2 className="card-title">{title}</h2>
    <p>   {details?.length > 100 ? (
              <>
                {details.slice(0, 100) + "..."}
                <Link className="text-blue" to={``}>Read more</Link>
              </>
            ) : (
              <p>{details}</p>
            )}</p>
    
  </div>
</div>
   </div>
       
  );
};

export default CourseCard;
