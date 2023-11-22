import React from "react";
import Form from "../components/Form";
import { useState } from "react";
import NasaContentDisplay from "../components/NasaContentDisplay";

function NasaList() {
  const [nasaData, setnasaData] = useState(null);

  // Create a function that is given the search term then does the fetch request for the movie data and stores it in state
  // Pass the function down to form via props
  // Function getnasaeData
  const getnasaData = async (searchTerm) => {
    //ate a variable that combine the parts of the url
    const baseUrl = "https://images-api.nasa.gov/";
    const url = baseUrl + "search?q=" + searchTerm;
    // make fetch request and store response
    try {
      // fetch with url, returns the same things as when I put the url in address bar
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      console.log(data);
      setnasaData(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <br />
      <Form nasaSearchList={getnasaData} />
      <NasaContentDisplay nasaData={nasaData} />
    </div>
  );
}

export default NasaList;
