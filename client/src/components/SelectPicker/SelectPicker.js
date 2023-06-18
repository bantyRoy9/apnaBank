import React from 'react'
import Select from 'react-select'
import { singleSelectorStyle } from './SelectPickerStyle'
const SelectPicker=({ options,label,defaultValue }) =>{
  return (
    <>
    {/* <label>{label}</label> */}
    <Select 
      defaultValue={defaultValue}
      options={options}
      styles={singleSelectorStyle}
    />
    </>
  )
}

export default SelectPicker