import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

import styled from "styled-components";

// Define Styled Components outside of the render method
// It is important to define your styled components outside of the render method, otherwise it will be recreated on every single render pass. Defining a styled component within the render method will thwart caching and drastically slow down rendering speed, and should be avoided.
export const DogButton = styled.button`
  width: 100px;
  height: 30px;
  background: ${props => (props.primary ? "#FFF" : "#2a2223")};
  color: ${props => (props.primary ? "#2a2223" : "#FFF")};
  border: 0;
  margin: 5px 10px;
  transition: 0.2s ease-in;
  border: ${props =>
    props.primary ? "2px solid #99f3eb" : "2px solid #2a2223"};
  &:hover {
    background: ${props => (props.primary ? "#2a2223" : "#fff")};
    color: ${props => (props.primary ? "#fff" : "#2a2223")};
    border: ${props =>
      props.primary ? "2px solid #2a2223" : "2px solid #99f3eb"};
  }
`;

export default function PhotoList(props) {
    const [photos, setPhoto] = useState([]);
    
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=CvVO1AwxrsUYSuaNjHl0UesmQhvImZTvuLQqaGc7&date=${props.newSelect}`)
        .then(response => {
          console.log(response.data);
          setPhoto(response.data);
        })
        .catch(error => {
          console.log("the data was not return", error);
        });
    }, [props.newSelect]);
    return (
      <div className="APOD">
        <NasaCard
            title={photos.title}
            explanation={photos.explanation}
            date={photos.date}
            image={photos.hdurl}
            service_version={photos.service_version}
        />
      </div>
    );
  }
  


// axios
// .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
// .then(response => {
//   console.log(response.data.date);
//   let date = response.data.date
//     axios
//     .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
//     .then(response => {
//     console.log("this", response.data);
//     })

// })
// .catch(error => {
//   console.log("The data was not returned", error);
// });