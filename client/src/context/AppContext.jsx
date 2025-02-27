import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration"

export const AppContext = createContext()

export const AppContextProvider = (props) => {

  const currency = import.meta.env.VITE_CURRENCY
  const [allCourses, setAllCourses] = useState([])
  const [isEducator, setisEducator] = useState(true)
  const [enrolledCourses, setEnrolledCourses] = useState([])
  const navigate = useNavigate()

  //function to fetch all courses
  const fetchAllCourses = () =>{
    setAllCourses(dummyCourses)
  }
 
  //function to calculate average rating
  const CalculateRating = (course) =>{
    if(course.courseRatings.length === 0){
      return 0;

    }
    let totalRating = 0
    course.courseRatings.forEach(rating => {
      totalRating += rating.rating
    })
    return totalRating / course.courseRatings.length
  }

  //calculate course chapter time
  const calculateChapterTime = (chapter) =>{
   let time = 0
   chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
   return humanizeDuration(time * 60 * 1000, {units:  ["h", "m"]})
  }

  //calculate course duration
  const calculateCourseDuration = (course) =>{
    let time = 0
    course.courseContent.map((chapter) =>chapter.chapterContent.map(
      (lecture) => time += lecture.lectureDuration
    ))
    return humanizeDuration(time * 60 * 1000, {units:  ["h", "m"]})
  }

  //calculate number of lectures
  const calculateNumberOfLectures = (course) =>{
    let totalLectures = 0;
    course.courseContent.forEach(chapter => {
      if(Array.isArray(chapter.chapterContent)){
          totalLectures += chapter.chapterContent.length
      }
    });
    return totalLectures;
  }
  //fetch user enrolled courses
  const fetchUserEnrolledCourses = async() =>{
    setEnrolledCourses(dummyCourses)
  }
  useEffect(() =>{
     fetchAllCourses()
     fetchUserEnrolledCourses()
  },[])
   const value = {
    currency,allCourses,navigate,CalculateRating, isEducator,
     setisEducator, calculateNumberOfLectures, calculateCourseDuration,
      calculateChapterTime,enrolledCourses,fetchUserEnrolledCourses
  }
    return (
        <AppContext.Provider value={value} >
          {props.children}
        </AppContext.Provider>
    )
}