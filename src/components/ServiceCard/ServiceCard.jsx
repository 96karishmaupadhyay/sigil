import React from "react";
import "./serviceCard.css"
const ServiceCard = ({ icon, title, description ,id_val}) => {
  return (
    <div className="card-container" id={id_val}>
      <img src={icon} alt={title} height={50} width={50} className="icon-image" />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default ServiceCard;
