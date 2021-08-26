import React from 'react';


const RegisterComp = () => {
    return (
        <>
        <div className="container-fluid  complete_register">
            <div className="row">
                <div className=" col-lg-6 col-md-6 col-10 ">
                    <h1 className="text-center register_heading  " >Facilities</h1>
                    <hr className="text-center about_hr mx-auto"/>
                        <div className="list ">
                            <p>Quality education</p>
                            <p>Work Culture</p>
                            <p>Human Values</p>
                            <p>Personality Development</p>
                            <p>Team work</p>
                        </div>
                </div>
                <div className=" col-lg-6 col-md-6 col-10 ml-auto my-5">
                    <h1 className="text-center contact_heading  " >Contact Us</h1>
                    <hr className="text-center about_hr mx-auto" />
                    <div className="form">
                        <form >
                        <div class="mb-3">
                        <input type="text" class="form-control form-control-lg p-3" id="exampleFormControlInput1" placeholder="Fullname" />
                        </div>
                        <div class="mb-3">
                        <input type="email" class="form-control form-control-lg p-3" id="exampleFormControlInput1"  placeholder="Email" />
                        </div>
                        <div class="mb-3 ">
                        <input type="number" class="form-control form-control-lg  p-3" id="exampleFormControlInput1" placeholder="Mobile" />
                        </div>
                        <div class="col-auto">
                        <button type="submit" style={{backgroundColor:"#190061"}}class="btn  btn-block mb-3 text-white p-2 ">Get In Touch</button>
                        </div>
                        </form>
                        </div>
                </div>
            </div>
        </div>
</>
    )
}

export default RegisterComp;
