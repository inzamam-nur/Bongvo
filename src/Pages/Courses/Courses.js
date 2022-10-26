import React from "react";
import { useLoaderData } from "react-router-dom";
import Rightsidenav from "../Rightsidenav/Rightsidenav";
import CourseCard from "./CourseCard";

const Courses = ({course}) => {
    const Courses=useLoaderData();
    return (
    <div  style={{
      marginBottom: "300px",
      height:'100%',
      width: "100%",
      margin: "auto",
    }}className='bg-gray-200'>
      <div style={{width:'80%', margin:'50px auto'}} className="grid grid-cols-3 gap-4">
        <div className=" col-span-2 ...">
            <h2>THis is from course : {Courses.length}</h2>
            {
                Courses.map(course=><CourseCard
                key={course.id}
                course={course}
                ></CourseCard>)
            }
        </div>
        <div className="text-center"><Rightsidenav></Rightsidenav></div>
      </div>
    </div>
  );
};

export default Courses;
