import React, { useContext, useState } from "react";
import "../styles/filters.css";

const Filters = () => {
  //const { starships, loading } = useContext(StarshipsContext);
  /*   const [searchTerm, setSearchTerm] = useState("");
  const [sortAscending, setSortAscending] = useState(true);

  /*   if (loading) {
    return <div>Cargando...</div>;
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortClick = () => {
    setSortAscending(!sortAscending);
  };

  const filteredStarships = starships.filter((starship) =>
    starship.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedStarships = filteredStarships.sort((a, b) => {
    if (sortAscending) {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  }); */

  return (
    <div
      className='bottom_search'
      style={{ display: "flex", alignItems: "center" }}
    >
      <select className='select select-primary w-full max-w-xs'>
        <option disabled selected>
          District
        </option>
        <option>Sants</option>
        <option>Eixample</option>
        <option>Sant Gervasi</option>
        <option>Nou Barris</option>
      </select>
      <div>
        <button className='btn filter_btn'>Ordenar</button>
      </div>
    </div>
  );
};

export default Filters;
