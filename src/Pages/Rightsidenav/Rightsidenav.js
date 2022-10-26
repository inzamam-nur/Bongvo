import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Rightsidenav = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/course')
        .then(res=>res.json())
        .then(data=> setCourses(data))
    },[])
    return (
        <div className=''>
            <h2>hi</h2>
            {
                courses.map(course =><p
                key={course.id}

                >
                    <Link to={`${course.id}`}>{course.name}</Link>
                </p>)
            }
        </div>
    );
};

export default Rightsidenav;