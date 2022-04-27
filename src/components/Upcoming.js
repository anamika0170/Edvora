import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navs from "./Navs";
import ShowCard from "./ShowCard";
import '../styles/home.style.css'

const Upcoming = () => {
  const [upcome, setUpcome] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios.get("https://assessment.api.vweb.app/rides").then((result) => {
      setUpcome(result.data);
    });
  }, []);
  return (
    <div className='HomePage'>
    <Header/>
    <Navs/>
      <div className="mt-4">
        {upcome.map((element, index) => {
            const date=element.date;
            const upDate = date.length>24?date:date
            const dis=element.origin_code-element.station_path[1];
          return (
              
            <div key={index} className="card mb-3">
              <div className="d-flex justify-content-end w-100">
                <div className="d-flex justify-content-center px-4  bgCS">
                  city : {element.city}
                </div>
                <div className="d-flex justify-content-center px-3 bgCS">
                  State : {element.state}
                </div>
              </div>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={element.map_url}
                    className="img-fluid rounded-start image"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Ride Id : {element.id}</h5>
                    <h4>Origin Station : {element.origin_code}</h4>
                    <h4>Station Path : {element.station_path}</h4>

                    <h4>Date : {element.date}</h4>
                    <h4>Destination : "Not Found"</h4>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Upcoming;
