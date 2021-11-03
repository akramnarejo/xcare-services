import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import ServicesData from "./ServicesData";

export default function ServicesDetail() {
  const history = useHistory();
  const { serviceId } = useParams();
  const thisService = ServicesData.find((service) => service._id === serviceId);
  return (
    <div className="detail">
      <h1>{thisService.name}</h1>
      <img src={thisService.img} alt={thisService.name} />
      <h3>Price - ${thisService.price}</h3>
      <p>{thisService.description}</p>
      <button onClick={() => history.push("/services")}>
        <Link to="/services">Back</Link>
      </button>
    </div>
  );
}
