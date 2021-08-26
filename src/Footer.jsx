import React from 'react';
import pic from '../src/Images/Icon.png';
import pics from '../src/Images/gmap.jpg';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';



 const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-lg-3 col-12 two mt-4  text-white ">
                        <img src={pic} style={{width:'100px'}}  />
                    </div>
                    <div className="col-lg-3 col-12 pt-5 one  text-white">
                        <p><LocalPhoneIcon/>9876548900,9876548900</p>
                    </div>
                    <div className="col-lg-3 col-12 pt-5 one text-white">
                        <p><MailOutlineIcon /> hellohowareyou@gmail.com</p>
                    </div>
                    <div className="col-lg-3 col-12 pt-5  one text-white">
                        <p><RoomIcon /> Shankar Chowk - 1,Mohali Chowk</p>
                    </div>
                </div>
               <div className="row ">
                    <div className="col-lg-3 pt-3 text-white footer_two">
                        <p>HOME</p>
                        <p>ABOUT US</p>
                        <p>OUR COURSES</p>
                        <p>REGISTER</p>
                        <FacebookIcon className="mr-4 col-4 mb-2"/>
                        <LinkedInIcon className="mr-4 col-4 mb-2" />
                        <InstagramIcon className=" col-4 mb-2"/>
                        <p>www.csinstitute.com</p>
                    </div>
                <div className="col-lg-8 col-10  pt-1  mx-auto  ">
                {/*<NavLink to="/courses"><img src={pics} style={{width:'65vw',height:'230px',border:"3px dashed white"}}  /></NavLink> */} 
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.751285541812!2d77.43577334999999!3d28.58663955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef7ac6d09761%3A0x406b25dd9ff9d2a3!2sSRCA%20CRICKET%20GROUND%202!5e0!3m2!1sen!2sin!4v1629960955562!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>   */}
                </div>
            </div>
            </div>
        </div>
        <div className="last_footer">
            <p ><strong ><i>Developed By-</i><span className="text">Priya Tomer</span></strong></p>
        </div>
        </>
    )
}

export default Footer;
