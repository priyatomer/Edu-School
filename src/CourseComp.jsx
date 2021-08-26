import React from 'react';
import Sdata from './Sdata';
import Card from './Card';
import { NavLink } from 'react-router-dom';


const CourseComp = () => {
    return (
        <>
            <div className="priya mt-5">
                <h1 className="text-center  pt-5" style={{color:'#f8e9a1',fontSize:'32px', fontWeight:"bold"}}>OUR COURSES</h1>
                <hr className=" text-center about_hr mb-n5 mx-auto"/>
                <div className="container-fluid">
                <div className="row my-5">
                
                    <Card 
                        imgsrc={Sdata[0].imgsrc}
                        title={Sdata[0].title}
                        btnname={Sdata[0].btnname}
                    />
                    <Card 
                        imgsrc={Sdata[1].imgsrc}
                        title={Sdata[1].title}
                        btnname={Sdata[1].btnname}
                    />
                    <Card 
                        imgsrc={Sdata[2].imgsrc}
                        title={Sdata[2].title}
                        btnname={Sdata[2].btnname}
                    />
                    
                    </div>
                    </div>
           
            <button className="course_btn "><NavLink to="/courses" style={{color:"#190061",textDecoration:"none"}}>More Courses</NavLink></button>
            </div>
        </>
    )
}

export default CourseComp;
