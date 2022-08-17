import React, { useState } from "react";
import useServices from "../hooks/useServices";

const Rent = () => {
  const [services, setServices] = useServices();
  const [rent, setRent] = useState([]);

  return (
    <div className="container py-8 space-y-3">
      <h2 className="text-3xl text-levender text-center uppercase">Rent Property</h2>
      <section className="grid lg:grid-cols-3 gap-6">
        {services &&
          services.map((service) => {
            const { id, location, date, price, type, name, address, bed, bath, size, img, review } = service;

            return (
              <div key={id}>
                <div class="card card-compact w-92 bg-dark shadow-xl rounded-md">
                  <figure>
                    <img src={img} alt="" />
                  </figure>
                  <div class="card-body">
                    <div className="flex justify-between items-center">
                      <h2>
                        <span className="font-bold text-secondary">${price}</span> /month
                      </h2>
                      <div>
                        <p>Star</p>
                      </div>
                    </div>
                    <h2 class="card-title text-levender">{name}</h2>
                    <p>{address}</p>
                    <hr />
                    <div class="flex justify-between items-center">
                      <div>
                        <p className="flex space-x-1">
                          <img src="https://img.icons8.com/officexs/16/000000/bedroom.png" alt="" />
                          <span>{bed} Beds</span>
                        </p>
                      </div>
                      <div>
                        <p className="flex space-x-1">
                          <img src="https://img.icons8.com/office/16/000000/shower.png" alt="" />
                          <span>{bath} Bathrooms</span>
                        </p>
                      </div>
                      <div>
                        <p className="flex space-x-1">
                          <img src="https://img.icons8.com/nolan/16/00000/square.png" alt="" />
                          <span>{size}m²</span>
                        </p>
                      </div>
                      <button class="btn btn-sm btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Rent;
