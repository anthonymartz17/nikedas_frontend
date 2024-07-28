import "./ProfileForm.css"
import "./ListingForm.css"
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

// services
// import { fetchUserById, updateUser } from "../../Services/shoes.services.js"

const user_id = 2;

export default function ProfileForm({
  formHeader
}) {
  const [ profileForm, setProfileForm ] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    about_store: "",
    isActive: "",
  })

  // id from session token
  const { id } = useParams();

  
  // async function getListing(id) {
  //   const listing = await fetchShoeById(id);
  //   setListingForm(listing)
  // }

  // useEffect(() =>{
  //   if (id) {
  //     try {
  //       getListing(id)
  //     } catch (error) {
  //         throw error;
  //     }
  //   }
  // },[id])


  function handleChange(e) {
    const value = e.target.value;
    setListingForm({...profileForm, [e.target.id]:e.target.value});
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const size = profileForm.size
    const sizeToFloat = parseFloat(size)

    if (id) {
      try {
        const res = await updateShoe(id, {...profileForm, size: sizeToFloat})
        navigate(`/account/listing/${id}`)
      } catch (error) {
          throw error
      }
    } else {
        try {
          const res = await createShoe({...profileForm, size: sizeToFloat})
        } catch(error) {
            throw error
        }
    }
  }

  return (
    <div className="form_page global_card">
      <h2 className="form_header">{formHeader}</h2>
      <form className="listing_form profile_form" onSubmit={handleSubmit}>

        <div className="flex_item">
          <label>Email:
            <input
              type="text"
              placeholder="Email"
              value={profileForm.email}
              id="last_name"
              disabled
            />
          </label>
        </div>

        <div className="flex_item">
          <label>First Name:
            <input
              type="text"
              placeholder="First Name"
              value={profileForm.first_name}
              onChange={handleChange}
              id="first_name"
              required
            />
          </label>
        </div>

        <div className="flex_item">
          <label>Last Name:
            <input
              type="text"
              placeholder="Last Name"
              value={profileForm.last_name}
              onChange={handleChange}
              id="last_name"
              required
            />
          </label>
        </div>

        <div className="flex_item">
          <label>Phone Number:
            <input
              type="text"
              placeholder="Phone"
              value={profileForm.phone_number}
              onChange={handleChange}
              id="phone_number"
              required
            />
          </label>
        </div>

        

        <div className="flex_row">
          <div className="form_button flex_item">
             <Link to="/account"><button className="btn_bg_dark"
            >Cancel</button></Link>
          </div>
          <div className="form_button flex_item">
            <button className="btn_bg_dark"
            >Update Profile</button>
          </div>
        </div>
      </form>
    </div>
  )
}
