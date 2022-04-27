import axios from "axios";
import React, { useEffect, useState } from "react";

const Filter = () => {
  const [city, setCity] = useState([]);
  const [citiId, setCityId] = useState("");
  const [ct, setCt] = useState("");

  

  useEffect(() => {
    const getCity = async () => {
      axios("https://assessment.api.vweb.app/rides").then((city) => {
        setCity(city.data);
        console.log("city", city.data);
      });
    };
    getCity();
  }, []);

  const handelCountry = (event) => {
    const getCityId = event.target.value;
    console.log("city id", getCityId);
    setCityId(getCityId);
  };

  return (
    <div className="d-flex justify-content-end">
      Filter
      <div>
        <div>
          <label className="text-white">City : {citiId}</label>
          <select className="" onChange={(e) => handelCountry(e)}>
            <option>--select City--</option>
            {city.map((cityget) => {
              return (
                
                <option key={cityget.id} value={cityget.id}>
                  {cityget.city}
                </option>
                
                
              );
            })}
            
          </select>
        </div>
        <div>
          <label className="text-white">State</label>
          <select>
            <option>--select State--</option>
            {city.map((stateget) => {
              return <option key={stateget.id}>{stateget.state}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
