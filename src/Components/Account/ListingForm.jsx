import "./ListingForm.css"
import { useState } from 'react'

import Input from "./Input.jsx"

const user_id = 2;

export default function ListingForm() {
  const [ listingForm, setListingForm ] = useState({
    brand: "",
    model: "",
    size: null,
    SKU: null,
    color: "Black/White",
    category: "",
    gender: "",
    price: null,
    description: "",
    created_at: "",
    updated_at: "",
    img_url: null,
    seller_id: user_id
  })
  const [ formDisplay, setforDisplay ] = useState({
    brand: "",
    model: "",
    size: 0,
    SKU: 0,
    color: "Black/White",
    category: "",
    gender: "",
    price: 0,
    description: "",
    img_url: "",
  })

  function handleChange(e) {
    const value = e.target.value;
    setLoginForm({...loginForm, [e.target.id]:e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginForm)
  }

  return (
    <div>
      <h2>Listing Form</h2>
      <form className="listing_form">

        <div className="flex_row">
          <div className="flex_item">
            <label>Brand:
              <input
                type="text"
                placeholder="Brand"
                value={listingForm.brand}
                onChange={handleChange}
                id="brand"
                required
              />
            </label>
          </div>

          <div className="flex_item">
            <label>Model:
              <input
                type="text"
                placeholder="Model"
                value={listingForm.model}
                onChange={handleChange}
                id="model"
                required
              />
            </label>
          </div>
        </div>

        <div className="flex_row">
          <div className="flex_item">
            <label>Size:
              <input
                type="number"
                placeholder="size"
                value={listingForm.size}
                onChange={handleChange}
                id="size"
                required
              />
            </label>
          </div>

          <div className="flex_item">
          <label>SKU:
              <input
                type="number"
                placeholder="sku"
                value={listingForm.SKU}
                onChange={handleChange}
                id="sku"
                required
              />
            </label>
          </div>
        </div>
            
        <div className="flex_row">
          <div className="flex_item">
          <label>Color:
              <input
                type="text"
                placeholder="color"
                value={listingForm.color}
                onChange={handleChange}
                id="color"
                required
              />
            </label>
          </div>

          <div className="flex_item">
            <label>Category:
              <input
                type="text"
                placeholder="category"
                value={listingForm.category}
                onChange={handleChange}
                id="category"
                required
              />
            </label>

          </div>
        </div>

        <label className="description">Description:<br/>
          <textarea
            type="textarea"
            placeholder="description"
            value={listingForm.description}
            onChange={handleChange}
            id="description"
            required
            style={{width: "100%"}}
            />
        </label>
        <button
        >Create Listing</button>

      </form>
    </div>
  )
}
