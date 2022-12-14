import React, { useEffect, useState } from "react";

const Search = ({ setServices }) => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState({ l: 0, h: 0 });

  useEffect(() => {
    if (limit.l === 0 && limit.h === 25000) {
      const exist = data.filter((d) => d.price >= limit.l && d.price <= limit.h);
      setServices(exist);
    } else if (limit.l === 25000 && limit.h === 50000) {
      const exist = data.filter((d) => d.price >= limit.l && d.price <= limit.h);
      setServices(exist);
    } else if (limit.l === 50000 && limit.h === 100000) {
      const exist = data.filter((d) => d.price >= limit.l && d.price <= limit.h);
      setServices(exist);
    } else if (limit.l === 100000 && limit.h === 20000000) {
      const exist = data.filter((d) => d.price >= limit.l && d.price <= limit.h);
      setServices(exist);
    } else {
      setServices(data);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const location = e.target.location.value;
    const date = e.target.date.value;
    const type = e.target.type.value;
    const price = e.target.price.value;

    fetch(`https://rent-property.herokuapp.com/service?location=${location}&date=${date}&type=${type}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const shortData = [...data];

        shortData.sort((a, b) => a.price.localeCompare(b.price, undefined, { numeric: true }));
        setData(shortData);
      });

    if (price === "$0000-$25000") {
      return setLimit({ l: 0, h: 25000 });
    } else if (price === "$25000-$50000") {
      return setLimit({ l: 25000, h: 50000 });
    } else if (price === "$50000-$100000") {
      return setLimit({ l: 50000, h: 100000 });
    } else if (price === "$100000-$20000000") {
      return setLimit({ l: 100000, h: 20000000 });
    } else {
      console.log("Invalid price");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex lg:flex-row flex-col justify-between py-4  border border-x-0  border-[#1D2534]">
          <div className="space-y-2 my-2 text-center">
            <h3 className="text-steel">Location</h3>
            <select name="location" className="select select-bordered select-sm  w-full bg-transparent">
              <option value="New York, USA">New York, USA</option>
              <option value="Arlington, Texas">Arlington, Texas</option>
              <option value="Centerville, Georgia">Centerville, Georgia</option>
              <option value="Lebanon, Ohio">Lebanon, Ohio</option>
              <option value="Washington, D.C.">Washington, D.C.</option>
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
              <option value="$0000-$25000">$0000-$25000</option>
              <option value="$25000-$50000">$25000-$50000</option>
              <option value="$50000-$100000">$50000-$100000</option>
              <option value="$100000-$20000000">$100000-$20000000</option>
            </select>
          </div>
          <div className="space-y-2 my-2 text-center">
            <h3 className="text-steel">Property Type</h3>
            <select name="type" className="select select-bordered select-sm  w-full bg-transparent">
              <option value="House">House</option>
              <option value="Flat">Flat</option>
            </select>
          </div>
          <input type="submit" value="Search" className="btn btn-primary my-auto" />
        </div>
      </form>
    </div>
  );
};

export default Search;
