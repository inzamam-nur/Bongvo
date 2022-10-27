import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Rightsidenav = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://b610-lerning-platform-server-side-inzamam-nur.vercel.app/coursename")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="">
     
      {courses.map((course) => (
        <p key={course.id}>
          <div className="text-black underline 	">
            <Link to={`/course/${course.id}`}>{course.name}</Link>
          </div>
        </p>
      ))}
    </div>
  );
};

export default Rightsidenav;
