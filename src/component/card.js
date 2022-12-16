import React from "react";

const Card = (props) => {
  return (
    <div className="card" style={{width:"25rem",marginTop:30}}>
    <img className="card-img-top" src={props.icon} alt="Card image cap"/>
    <div className="card-body">
      <h2>{props.heading}</h2>
    <p className="card-text">{props.text}</p>
  </div>
</div>
  );
};

export default Card;
