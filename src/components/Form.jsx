
import React from 'react'
import { useState, useEffect } from 'react'

 function Form(props) {
    // add state to hold the data of the form
    const [ formData, setFormData ] = useState({
        searchterm: "",
    })

    //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to datasearch prop, which is apps getData function
    props.nasaSearchList(formData.searchterm);
  };

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='searchterm'
                onChange={handleChange}
                value={formData.searchterm}
                placeholder='Type in your search'
             />
            <input type='submit' value="submit" />
      
          </form>
        
        </div>
        )
  
};

export default Form
