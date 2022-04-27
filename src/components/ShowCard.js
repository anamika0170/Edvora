import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import '../styles/showCard.style.css'
const ShowCard = ({id,image,city,origin_code,station_path,date,state,Destination,des}) => {
  const data=origin_code-station_path[1];
  const [dis,setDis]=useState(data>0?data-3:data+3);

 



  return (
    <div>
      
      <div className="card mb-3">
         <div className="d-flex justify-content-end w-100">
         <div className="d-flex justify-content-center px-4  bgCS">city : {city}</div>
         <div className="d-flex justify-content-center px-3 bgCS">State : {state}</div>
         </div>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={image} className="img-fluid rounded-start image" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title">Ride Id : {id}</h5>
                  <h4>Origin Station : {origin_code}</h4>
                  <h4>Station Path : {station_path}</h4>
                  
                  <h4>Date : {date}</h4>
                  <h4>Destination : {dis}</h4>
                </div>
                
              </div>
            </div>
          </div> 
       
    </div>
  );
};

export default ShowCard;
