import React, { useState } from "react";

const api = {
  baseUrl: "https://restcountries.eu/rest/v2/name/",
};

function App() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.baseUrl}${query}`)
        .then((res) => res.json())
        .then((result) => {
          setCountry(result);
          setQuery('');
          console.log(result);
        });
    }
  };

    const name = country[0].name;
  return (
    <div className="App">
      <div className="search_box">
        <input
          type="text"
          className="search_bar"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
          </div>
          <p>{country[0].name}</p>
    </div>
  );
}

export default App;
