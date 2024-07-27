import React from 'react'

export default function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
  id,
  required
}) {
  return (
    <label>{label}
      <input
      type={type}
      placeholder={label}
      value={listingForm[value]}
      onChange={handleChange}
      id={label.toLowerCase()}
      required />
    </label>
  )  
}
