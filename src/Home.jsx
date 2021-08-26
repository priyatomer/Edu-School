import React from 'react';
import img from '../src/Images/first.svg';
import AboutComp from './AboutComp';
import CourseComp from './CourseComp';
import RegisterComp from './RegisterComp';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';



const Home = () => {
    return (
        <>
            <div className="container-fluid home_div">
                <div className="row ">
                    <div className="col-lg-6 col-md-6 col-10 mx-auto home_one">
                        <h1 className="my-5 mx-5 text-white home_heading"><strong className="home_head">Expand your horizons and pave the way for the <span >future!</span></strong></h1>
                        <button className="btn_started "><NavLink className="text-decoration-none text-black"  to="/courses">Our Courses</NavLink></button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-10 mx-auto">
                        <img src={img} style={{width:'75%', height:'55vh'}} alt="pic" />
                    </div>
                <div ><AboutComp /></div>
                <div><CourseComp /></div>
                <div><RegisterComp /></div>
                <Footer /> 
            </div>
        </div>
        </>
    )
}

export default Home;
