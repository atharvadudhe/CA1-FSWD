import React from "react";

const ServiceCard = ({title, description}) => {
    return(
        <div style={{ border: "10px solid white",
            backgroundColor: "white",
            width: "950px",
            padding: "50px",
            color: "black",
            margin: "50px"
         }}>
            <h1 style={{ fontSize: "50px", fontWeight: "bolder" }}>{title}</h1>
            <p style={{ fontSize: "20px" }}>{description}</p>
        </div>
    )
}
export default ServiceCard;