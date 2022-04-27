import React from "react";
import ShowCard from "./ShowCard";

const Show = ({ Data }) => {
  return (
    <div>
      {Data.map((element, index) => {
        return (
          <ShowCard
          key={index}
            id={element.id}
            image={element.map_url}
            city={element.city}
            origin_code={element.origin_station_code}
            station_path={element.station_path.map(number=>number).join(',')}
            date={element.date}
            state={element.state}
            Destination={element.station_code}
          />
        );
      })}
    </div>
  );
};

export default Show;
