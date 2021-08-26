import React from 'react';
import { NavLink } from 'react-router-dom';


const Card = (props) => {
    return (
        <>
        <div className="col-md-4 col-es-10 mx-auto">
          <div className="card" >
            <img src={props.imgsrc} className="card-img-top" alt="..." />
              <div className="card-body text-muted bg-light">
                <h5 className="card-title text-dark">{props.title}</h5>
                <ul className="card-text">
                  <li>Include of CCA</li>
                  <li>Adobe photoshop</li>
                  <li>Adobe Pagemaker</li>
                  <li>Basic Tally Accounting</li>
                </ul>
                <NavLink to="#" className="btn btn-primary">{props.btnname}</NavLink>
              </div>
            </div>
            </div>
         </>
    )
}

export default Card;
