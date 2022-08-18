import React from "react";

const Search = ({ services, setServices }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const location = e.target.location.value;
    const date = e.target.date.value;
    const type = e.target.type.value;
    // const price = e.target.price.value;

    fetch(`http://localhost:5000/service?location=${location}&date=${date}&type=${type}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex lg:flex-row flex-col justify-between py-4  border border-x-0  border-[#1D2534]">
          <div className="space-y-2 my-2 text-center">
            <h3 className="text-steel">Location</h3>
            <select name="location" className="select select-bordered select-sm  w-full bg-transparent">
              <option selected>New York, USA</option>
              <option>Arlington, Texas</option>
              <option>Centerville, Georgia</option>
              <option>Lebanon, Ohio</option>
              <option>Washington, D.C.</option>
            </select>
          </div>
          <div className="space-y-2 my-2 text-center">
            <h3 className="text-steel">When</h3>
            <input
              type="date"
              name="date"
              className="w-full bg-transparent  border pt-1 rounded px-3 border-[#1D2534]"
              required
            />
          </div>
          <div className="space-y-2 my-2 text-center">
            <h3 className="text-steel">Price</h3>
            <select name="price" className="select select-bordered select-sm  w-full bg-transparent">
              <option selected>$0000-$25000</option>
              <option>$25000-$50000</option>
              <option>$50000-$100000</option>
              <option>$100000-$20000000</option>
            </select>
          </div>
          <div className="space-y-2 my-2 text-center">
            <h3 className="text-steel">Property Type</h3>
            <select name="type" className="select select-bordered select-sm  w-full bg-transparent">
              <option selected>House</option>
              <option>Flat</option>
            </select>
          </div>
          <input type="submit" value="Search" className="btn btn-primary my-auto" />
        </div>
      </form>
    </div>
  );
};

export default Search;
