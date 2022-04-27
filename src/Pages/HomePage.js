import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Navs from "../components/Navs";
import Show from "../components/Show";
import ShowCard from "../components/ShowCard";
import "../styles/home.style.css";
import {BsFilterLeft} from 'react-icons/bs' 
const HomePage = () => {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [data, setData] = useState([]);
  const [city, setCity] = useState([]);
  const [statec, setStatec] = useState([]);
  const [des,setDes]=useState('')

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };
  const onInputChangeState = (e) => {
    setInput2(e.target.value);
  };

  const onSearch = () => {
    axios
      .get(`https://assessment.api.vweb.app/rides?city=${city}`)
      .then((data) => {
        setCity(data.data);
        
      });
  };

  const onSearchstate = () => {
    axios
      .get(`https://assessment.api.vweb.app/rides?state=${statec}`)
      .then((data) => {
        setStatec(data.data);
        
      });
  };

  useEffect(() => {
    const getCity = async () => {
      axios("https://assessment.api.vweb.app/rides").then((city) => {
        setCity(city.data);
        
      });
    };
    getCity();
  }, []);

  const handelCity = (event) => {
    const getCityId = event.target.value;
    
  };

  useEffect(() => {
    axios("https://assessment.api.vweb.app/user").then((data) => {
        setData(data.data.station_code);
        
      });
  }, []);
  return (
    <div className="HomePage">
      <Header />
      <Navs />
      {/* <Filter/> */}

      <div className="d-flex justify-content-end pt-0">
        <Button variant="primary" className="w-25 bg-dark buttonModal" onClick={handleShow}>
         <span><BsFilterLeft/></span> Filter
        </Button>
      </div>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Filter By City</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center">
              <label className="text-white">City : </label>
              <select className="" onChange={(e) => handelCity(e)}>
                <option>--select City--</option>
                {city.map((cityget) => {
                  return (
                    <option
                      onChange={onInputChange}
                      key={cityget.id}
                      value={input}
                    >
                      {cityget.city}
                    </option>
                  );
                })}
              </select>
              <button onClick={onSearch}>Search</button>
            </div><br/>

            <div>
              <div className="d-flex justify-content-center">
                <label className="text-white">State</label>
                <select>
                  <option>--select State--</option>
                  {city.map((stateget) => {
                    return <option key={stateget.id}>{stateget.state}</option>;
                  })}
                </select>
                <button onClick={onSearch}>Search</button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="mt-2">
        {statec&&city.map((element,index) => {
          return <Show key={index} Data={city}/>;
        })}
      </div>
    </div>
  );
};

export default HomePage;
