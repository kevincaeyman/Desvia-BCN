import React, { useState, useEffect } from "react";
import dataSants from "../json/pointsOfInterest_Sants-Montjuic.json";
import dataVella from "../json/pointsOfInterest_Ciutat Vella.json";
import dataEixample from "../json/pointsOfInterest_Eixample.json";
import dataGracia from "../json/pointsOfInterest_Gracia.json";
import dataHorta from "../json/pointsOfInterest_Horta-Guinardo.json";
import dataCorts from "../json/pointsOfInterest_LesCorts.json";
import dataNouBarris from "../json/pointsOfInterest_NouBarris.json";
import dataAndreu from "../json/pointsOfInterest_SantAndreu.json";
import dataSantMarti from "../json/pointsOfInterest_SantMarti.json";
import dataSantGervasi from "../json/pointsOfInterest_Sarria-Sant Gervasi.json";
import "../styles/filters.css";

const Filters = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districtData, setDistrictData] = useState(null);

  useEffect(() => {
    if (selectedDistrict) {
      const data = getJsonDataForDistrict(selectedDistrict);
      setDistrictData(data);
    }
  }, [selectedDistrict]);

  const getJsonDataForDistrict = (district) => {
    switch (district) {
      case "Ciutat Vella":
        return dataVella;
      case "Eixample":
        return dataEixample;
      case "Gràcia":
        return dataGracia;
      case "Horta Guinardó":
        return dataHorta;
      case "Les Corts":
        return dataCorts;
      case "Nou Barris":
        return dataNouBarris;
      case "Sant Andreu":
        return dataAndreu;
      case "Sant Martí":
        return dataSantMarti;
      case "Sants":
        return dataSants;
      case "Sarrià":
        return dataSantGervasi;
      default:
        return null;
    }
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div
      className="bottom_search"
      style={{ display: "flex", alignItems: "center" }}
    >
      <select
        className="select select-primary w-full max-w-xs"
        onChange={handleDistrictChange}
        value={selectedDistrict}
      >
        <option disabled value="">
          District
        </option>
        <option>Ciutat Vella</option>
        <option>Eixample</option>
        <option>Gràcia</option>
        <option>Horta Guinardó</option>
        <option>Les Corts</option>
        <option>Nou Barris</option>
        <option>Sant Andreu</option>
        <option>Sant Martí</option>
        <option>Sants</option>
        <option>Sarrià</option>
      </select>
      <div>
        {districtData &&
          districtData.slice(0, 10).map((item, index) => (
            <div className="filters-names" key={index}>
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Filters;