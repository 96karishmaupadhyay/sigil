import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { icons, title, description } from "../../assets/asset";
import "./service.css";

const Services = () => {
  const services = title.map((t, index) => {
    const iconKey = t.toLowerCase().replace(/\s|-/g, ""); 
    const icon = icons[iconKey] || null; 

    return {
      icon,
      title: t,
      description: description[index],
    };
  });

  return (
    <div className="service-container" id="services">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default Services;
