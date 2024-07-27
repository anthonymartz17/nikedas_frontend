import "./ListingForm.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Input from "./Input.jsx"

const user_id = 2;

export default function ListingForm({
  formHeader
}) {
  const [ listingForm, setListingForm ] = useState({
    brand: "",
    model: "",
    size: null,
    color: "",
    gender: "",
    category: "",
    price: null,
    product_number: "",
    SKU: null,
    description: "",
    primary_img: "",
    secondary_img: [],
    seller_id: user_id
  })
  const [ formDisplay, setFormDisplay ] = useState({
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
    setListingForm({...listingForm, [e.target.id]:e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(listingForm)
  }

  return (
    <div className="form_page">
      <h2 className="form_header">{formHeader}</h2>
      <form className="listing_form" onSubmit={handleSubmit}>

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
                placeholder="Size"
                value={listingForm.size}
                onChange={handleChange}
                id="size"
                required
              />
            </label>
          </div>

          <div className="flex_item">
          <label>Color:
              <input
                type="text"
                placeholder="Color"
                value={listingForm.color}
                onChange={handleChange}
                id="color"
                required
              />
            </label>
          </div>
        </div>
            
        <div className="flex_row">
          <div className="flex_item">
          <label>Gender:<br />
              <select
                type="text"
                value={listingForm.gender}
                onChange={handleChange}
                id="gender"
                required
              >
                <option value="">-- Choose an option --</option>
                <option value="mens">Men's</option>
                <option value="womens">Women's</option>
                <option value="kids">Kid's</option>
              </select>
            </label>
          </div>

          <div className="flex_item">
            <label>Category:
              <input
                type="text"
                placeholder="Category"
                value={listingForm.category}
                onChange={handleChange}
                id="category"
                required
              />
            </label>

          </div>
        </div>

        <div className="flex_row">
          <div className="flex_item">
          <label>Product #:
              <input
                type="text"
                placeholder="Product ID"
                value={listingForm.color}
                onChange={handleChange}
                id="color"
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

        <label className="description">Description:<br/>
          <textarea
            type="textarea"
            placeholder="Description"
            value={listingForm.description}
            onChange={handleChange}
            id="description"
            required
            style={{width: "100%"}}
            />
        </label>

        <div className="flex_row">
          <div className="flex_item">
          <label>Primary Img URL:
              <input
                type="text"
                placeholder="http://www.someplaceonthenet.com/img.jpg"
                value={listingForm.primary_img}
                onChange={handleChange}
                id="primaryImg"
                required
              />
            </label>
          </div>

          <div className="flex_item">
            <label>Secondary Images URL(s):
                <input
                  type="text"
                  placeholder="img urls separated by commas"
                  value={listingForm.secondary_img}
                  onChange={handleChange}
                  id="secondaryImgs"
                />
            </label>
          </div>
        </div>

        <div className="flex_row">
          <div className="flex_item">
            <label>Price:
                <input
                  type="number"
                  placeholder="150.00"
                  value={listingForm.price}
                  onChange={handleChange}
                  id="price"
                />
            </label>
          </div>
        </div>

        <div className="flex_row">
          <div className="form_button flex_item">
            <Link to="/account"> <button
            >Cancel</button></Link>
          </div>
          <div className="form_button flex_item">
            <button 
            >Create Listing</button>
          </div>
        </div>
      </form>
    </div>
  )
}
