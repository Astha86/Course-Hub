import React, { useState } from "react"
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    // fetching all the data in single array
    const getCourses = () => {
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((courseData) => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }

        else{
            // Passed only specific data
            return courses[category];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map( (course) => (
                    <Card key={course.id} 
                    course = {course} 
                    likedCourses = {likedCourses}
                    setLikedCourses = {setLikedCourses}/>
                ))
            }
        </div>
    )
}

export default Cards;