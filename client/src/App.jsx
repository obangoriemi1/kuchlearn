import React from 'react'
import {Routes, Route, useMatch } from "react-router-dom"
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourses from './pages/educator/AddCourses'
import MyCourses from './pages/educator/MyCourses'

import Navbar from './components/student/Navbar'
import StudentEnrolled from './pages/educator/StudentEnrolled'
import "quill/dist/quill.snow.css";

const App = () => {

  const isEducatorRoute = useMatch("/educator/*")
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute &&    <Navbar/>}
   
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/course-list' element={<CourseList/>}></Route>
         <Route path='/course-list/:input' element={<CourseList/>}></Route>
         <Route path='/course/:id' element={<CourseDetails/>}></Route>
         <Route path='/my-enrollments' element={<MyEnrollments/>}></Route>
        
         <Route path='/player/:courseId' element={<Player />} />

         <Route path='/loading/:path' element={<Loading/>}></Route>
         
         <Route path='/educator' element={<Educator/>}>
          <Route path='/educator' element={<Dashboard/>}/>
          <Route path='add-course' element={<AddCourses/>}/>
          <Route path='my-courses' element={<MyCourses/>}/>
          <Route path='student-enrolled' element={<StudentEnrolled/>}/>
         </Route>
       </Routes>
    </div>
  )
}

export default App