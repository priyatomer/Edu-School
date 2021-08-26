import React from 'react';
import web from '../src/Images/register.svg';




 const Common   = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                        <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web} style={{width:'500px',height:'350px', margin:"-40px 40px"}} alt="pic" className="register" />
                                    </div>
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <form >
                            <div className="mb-3">
                            <input type="text" className="form-control form-control-lg p-3" id="exampleFormControlInput1" placeholder="Fullname" />
                            </div>
                            <div className="mb-3">
                            <input type="email" className="form-control form-control-lg p-3" id="exampleFormControlInput1"  placeholder="Email" />
                            </div>
                            <div className="mb-3">
                            <input type="number" className="form-control form-control-lg p-3" id="exampleFormControlInput1" placeholder="Mobile" />
                            </div>
                            <select className="form-select form-select-lg mb-5 p-3" aria-label=".form-select-lg example">
                            <option selected>Select Course</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                            <div className="col-auto">
                                <button type="submit" style={{backgroundColor:"#190061"}} className="btn btn-block mb-3 text-white ">Register</button>
                            </div>
                            </form>
                                
                                </div>
                               
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;