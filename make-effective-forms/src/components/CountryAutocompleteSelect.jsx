import React, { useEffect, useState } from "react";

const CountryAutocompleteSelect = ({value, onChange }) => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [input, setInput] = useState("");

    // fetching countries
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
        const names = data.map((c) => c.name.common).sort((a, b) => a.localeCompare(b));
        setCountries(names);
        });
    }, []);

    // fetching country from geojs
    useEffect(() => {
        fetch("https://get.geojs.io/v1/ip/geo.json")
        .then(res => res.json())
        .then(data => {
            setInput(data.country);
            onChange(data.country);
        });
    }, []);

    // filtering countries while typing
    const handleInput = (e) => {
        const val = e.target.value;
        setInput(val);
        setFiltered(countries.filter((name) => name.toLowerCase().startsWith(val.toLowerCase())));
        onChange(val);
    };

    // selecting country from the list
    const handleSelect = (name) => {
        setInput(name);
        setFiltered([]);
        onChange(name);
    };

  return (
    <div className="mb-3 position-relative">
      <label htmlFor="country" className="form-label">Country</label>
      <input id="country" className="form-control" value={input} onChange={handleInput} placeholder="ex. Poland" autoComplete="off" />
      {filtered.length > 0 && input && (
        <ul className="list-group position-absolute w-100 shadow z-3" style={{ maxHeight: "200px", overflowY: "auto" }}>
          {filtered.slice(0, 10).map((name) => (
            <li key={name} className="list-group-item list-group-item-action" onClick={() => handleSelect(name)} >
                {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryAutocompleteSelect;
