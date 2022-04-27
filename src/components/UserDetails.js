import axios from "axios";
import React, { useEffect, useState } from "react";
import '../styles/header.style.css'
const UserDetails = () => {
  const [user, setUser] = useState('');
  const [img, setImg] = useState("");
  const [res, setRes] = useState(null);
  const [stationCode,setStationCode]=useState('')

  useEffect(() => {
    axios.get("https://assessment.api.vweb.app/user").then((res) => {
      setUser(res.data.name);
      setImg(res.data.url);
      setStationCode(res.data.station_code)

    });
  }, []);

  const des=stationCode;

  
  return (
    <div className="d-flex">
      <div>
        <img className="profile" src={img} />
      </div>
      <div className="text-white">{user}</div>
    </div>
  );
};

export default UserDetails;
