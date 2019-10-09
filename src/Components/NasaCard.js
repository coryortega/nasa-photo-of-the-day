import React from "react";

const NasaCard = props => {
  return (
    <div className="photo">
      <img className="image" alt="photo of the day" src={props.image} />
      <h2>Title: {props.title}</h2>
      <p>{props.explanation}</p>
      <div className="bottom">
        <p>Date: {props.date}</p>
        <p>Service Version: {props.service_version}</p>
      </div>
    </div>
  );
};
export default NasaCard;