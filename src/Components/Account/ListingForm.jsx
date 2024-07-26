import { useState } from 'react'

const user_id = 2;

export default function CreateListing() {


  const [ newListingForm, setListingForm ] = useState({
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
      <h2>Create Listing</h2>
      <form className="create_listing_form">
        <label>Brand
          <input
            type="text"
            placeholder="Brand"
            value={newListingForm.brand}
            onChange={handleChange}
            id="brand"
            required
          />
        </label>

      </form>
    </div>
  )
}
