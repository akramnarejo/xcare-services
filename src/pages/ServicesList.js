import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import ServicesData from "./ServicesData";

export default function ServicesList() {
  const match = useRouteMatch();
  return (
    <>
      <h2>Services we offer</h2>
      <div className="services">
        {ServicesData.map((service) => {
          return (
            <div className="service-card" key={service._id}>
              <img src={service.img} alt={service.name} />
              <span>
                <Link to={`${match.url}/${service._id}`}>{service.name}</Link> $
                {service.price}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
