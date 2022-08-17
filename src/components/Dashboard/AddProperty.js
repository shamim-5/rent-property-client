import React from "react";

const AddProperty = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("yeh");
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center text-levender lg:text-left">
            <h1 className="text-4xl font-bold uppercase">Add Property !</h1>
            <p className="py-6 uppercase text-sm">Please fill all the field for Add Property</p>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-dark text-dark">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4">
                  <div className="flex lg:flex-row flex-col lg:space-x-4 ">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-grey">Property Code</span>
                      </label>
                      <input type="text" name="code" placeholder="Property Code" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-grey">Location</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        placeholder="Enter Location"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-grey">Date</span>
                      </label>
                      <input type="date" name="date" placeholder="Enter Date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-grey">Price</span>
                      </label>
                      <input type="text" name="price" placeholder="Enter Price" className="input input-bordered" />
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col lg:space-x-4 ">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-grey">Type</span>
                      </label>
                      <input type="text" name="type" placeholder="Enter Type" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-grey">Property Name</span>
                      </label>
                      <input type="text" name="name" placeholder="Property Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-grey">Address</span>
                      </label>
                      <input type="text" name="address" placeholder="Enter Address" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-grey">Bed</span>
                      </label>
                      <input type="text" name="bed" placeholder="Noumber of Bed" className="input input-bordered" />
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col lg:space-x-4 ">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-grey">Bathroom</span>
                      </label>
                      <input type="text" name="bath" placeholder="No of Bathroom" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-grey">Size</span>
                      </label>
                      <input type="text" name="size" placeholder="Area of Property" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-grey">Picture</span>
                      </label>
                      <input
                        type="text"
                        name="img"
                        placeholder="Property Picture Link"
                        className="input input-bordered"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6">
                  {/* <button className="btn btn-primary">Add Property</button> */}
                  <input type="submit" value="Add Property" className="btn btn-primary" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
