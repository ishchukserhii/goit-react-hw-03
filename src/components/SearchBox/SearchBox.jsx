import React from 'react'

const SearchBox = ({ value, onFilter }) => {

    const handleChange = (event) => {
        onFilter(event.target.value);
    };
  return (
    <><input type="text" value={value} onChange={handleChange}/></>
  )
}

export default SearchBox