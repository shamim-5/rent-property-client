import React from "react";

const AddProperty = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const service = {
      code: e.target.code.value,
      location: e.target.location.value,
      date: e.target.date.value,
      price: e.target.price.value,
      type: e.target.type.value,
      name: e.target.name.value,
      address: e.target.address.value,
      bed: e.target.bed.value,
      bath: e.target.bath.value,
      length: e.target.length.value,
      width: e.target.width.value,
      img: e.target.img.value,
      details: e.target.details.value,
    };

    fetch(`https://rent-property.herokuapp.com/service`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
                      <input type="number" name="code" placeholder="Property Code" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-grey">Location</span>
                      </label>
                      <select name="location" className="select select-bordered w-full">
                        <option value="New York, USA">New York, USA</option>
                        <option value="Arlington, Texas">Arlington, Texas</option>
                        <option value="Centerville, Georgia">Centerville, Georgia</option>
                        <option value="Lebanon, Ohio">Lebanon, Ohio</option>
                        <option value="Washington, D.C.">Washington, D.C.</option>
                      </select>
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
                      <input type="number" name="price" placeholder="Enter Price" className="input input-bordered" />
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col lg:space-x-4 ">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-grey">Type</span>
                      </label>
                      <select name="type" className="select select-bordered  w-full">
                        <option value="House">House</option>
                        <option value="Flat">Flat</option>
                      </select>
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
                      <input type="number" name="bed" placeholder="Noumber of Bed" className="input input-bordered" />
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col lg:space-x-4 ">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-grey">Bathroom</span>
                      </label>
                      <input type="number" name="bath" placeholder="No of Bathroom" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-grey">Length</span>
                      </label>
                      <input
                        type="number"
                        name="length"
                        placeholder="Length of Property"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-grey">Width</span>
                      </label>
                      <input
                        type="number"
                        name="width"
                        placeholder="Width of Property"
                        className="input input-bordered"
                      />
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
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-grey">Description</span>
                    </label>
                    <textarea
                      name="details"
                      placeholder="Add property description..."
                      className="rounded-lg px-4 py-1"
                    ></textarea>
                  </div>
                </div>
                <div className="form-control mt-6">
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
