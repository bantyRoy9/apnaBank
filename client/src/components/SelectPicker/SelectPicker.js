import React from 'react'
import Select from 'react-select'
function SelectPicker({
options,label
}) {
  return (
    <>
    {/* <label>{label}</label> */}
    <Select options={options}></Select>
    </>
  )
}

export default SelectPicker