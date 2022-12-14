import React from "react";
import useServices from "../hooks/useServices";
import Search from "./Search";

const Rent = () => {
  const [services, setServices] = useServices();

  return (
    <div className="container py-8 space-y-5">
      <section className="space-y-3">
        <div className="flex lg:flex-row flex-col justify-between py-4  border border-x-0  border-[#1D2534]">
          <h2 className="text-3xl text-levender text-center uppercase">Search properties to rent</h2>
          <input type="text" placeholder="Search with Search Bar" className="px-4 rounded py-2" />
        </div>

        <Search services={services} setServices={setServices} />
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        {services &&
          services.map((service) => {
            const { _id, price, type, name, address, date, bed, bath, length, width, img, review } = service;

            return (
              <div key={_id}>
                <div className="card card-compact w-92 bg-dark shadow-xl rounded-md">
                  <figure>
                    <img src={img} alt="" />
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <h2>
                        <span className="font-bold text-secondary">${price}</span> /month
                      </h2>
                      <div>{review && <p>{review} Star</p>}</div>
                    </div>
                    <h2 className="card-title text-levender">
                      {name} || {type}
                    </h2>
                    <p>{address}</p>
                    <p>Available from ... {date}</p>
                    <hr />
                    <div className="flex justify-between items-center">
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
                          <span>
                            {length}x{width}m??
                          </span>
                        </p>
                      </div>
                    </div>
                    <button className="btn btn-sm btn-primary rounded">Buy Now</button>
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
