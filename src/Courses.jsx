import React from 'react';
import Sdata from './Sdata';
import Card from './Card';
import Footer from './Footer';



const Courses = () => {
    return (
        <>
        <div className="courses_div">
            <h1 className="text-center  about_heading" style={{color:'#f8e9a1'}}>OUR COURSES</h1>
            <hr className="mx-auto course_hr " />
            <div  className=" container-fluid cardy " style={{marginTop:"3rem"}}>
            <div className="row">
            <div className="col-10 mx-auto">
            <div className="row gy-5 gx-5">
                {Sdata.map(function ncard(val,ind){
                    return(
                        <Card key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        btnname={val.btnname}
                    />
                    );
                })}; 
                <Footer />
                </div>
                </div>
                </div>
                </div>
        </div>
        </>
    )
}

export default Courses;
