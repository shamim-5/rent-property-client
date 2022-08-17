import React from "react";

const Search = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between py-4  border border-x-0  border-[#1D2534]">
      <div className="space-y-2 my-2 text-center">
        <h3 className="text-steel">Location</h3>
        <select class="select select-bordered select-sm  w-full bg-transparent">
          <option disabled selected>
            New York, USA
          </option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </select>
      </div>
      <div className="space-y-2 my-2 text-center">
        <h3 className="text-steel">When</h3>
        <input type="date" className="w-full bg-transparent  border pt-1 rounded px-3 border-[#1D2534]" required />
      </div>
      <div className="space-y-2 my-2 text-center">
        <h3 className="text-steel">Price</h3>
        <select class="select select-bordered select-sm  w-full bg-transparent">
          <option disabled selected>
            $5000-$25000
          </option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </select>
      </div>
      <div className="space-y-2 my-2 text-center">
        <h3 className="text-steel">Property Type</h3>
        <select class="select select-bordered select-sm  w-full bg-transparent">
          <option disabled selected>
            House
          </option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </select>
      </div>
      <button className="btn btn-primary my-auto">Search</button>
    </div>
  );
};

export default Search;
