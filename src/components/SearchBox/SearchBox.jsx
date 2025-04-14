import React from 'react'

const SearchBox = ({inputValue, changeInput}) => {
 

  return (
    <><input type="text" value={inputValue} onChange={changeInput}/></>
  )
}

export default SearchBox