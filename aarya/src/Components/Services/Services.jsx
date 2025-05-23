import React from "react";
import Services_Data from "../../assets/services-data";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>Our Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
