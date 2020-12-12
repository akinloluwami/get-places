import React, { useState } from "react";
import "./App.css";
//import { HiOutlineSearch } from "react-icons/hi";
import { RiMap2Fill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { FaMoneyBillWave } from "react-icons/fa";
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
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div className="App">
      <div className="search_cont">
        <div className="search_box">
          <input
            type="text"
            className="search_input"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
      </div>

      {typeof country[0] != "undefined" ? (
        <div>
          <div className="name">
            <h1>{country[0].name}</h1>
            <img src={country[0].flag} alt="" />
          </div>

          <div className="info">
            <div className="col1 col">
              <div className="icon">
                <RiMap2Fill />
              </div>
              <div className="data">
                <b>Captital</b>
                <p>{country[0].capital}</p>
              </div>
            </div>
            <div className="col2 col">
              <div className="icon">
                <FiPhoneCall />
              </div>
              <div className="data">
                <b>Calling Code</b>
                <p>{country[0].callingCodes[0]}</p>
              </div>
            </div>
            <div className="col2 col">
              <div className="icon">
                <FaMoneyBillWave />
              </div>
              <div className="data">
                <b>Currency</b>
                <p>
                  {country[0].currencies[0].symbol}{" "}
                  {country[0].currencies[0].name}
                  {` (${country[0].currencies[0].code})`}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
