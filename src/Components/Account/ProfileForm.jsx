import "./ProfileForm.css"
import "./ListingForm.css"
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

// firebase
import { useAuth } from "../../Context/AuthContext.jsx"

// services
import { fetchUserById, updateUser } from "../../Services/users.services.js"

// ui
import Modal from "../UI/Modal.jsx"

export default function ProfileForm({
  formHeader
}) {
  const [ profileForm, setProfileForm ] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    about_store: "",
    is_active: "",
  })

  // alert
  const [ showAlert, setShowAlert ] = useState(false)
  const [ alertMessage, setAlertMessage ] = useState("Alert")
  function handleAlertOpen(message) {
    setAlertMessage(message)
    setShowAlert(true)
  }
  function handleAlertClose() {
    setShowAlert(false)
  }

  // config auth
  const  { currentUser: uuid } = useAuth();
  const user_id = uuid ? uuid : 2;

  // get user profile
  async function getUser(user_id) {
    const user = await fetchUserById(user_id);
    setProfileForm(user)
  }

  useEffect(() =>{
    try {
      getUser(user_id)
    } catch (error) {
        throw error;
    }
  },[user_id])

  // handle form
  function handleChange(e) {
    let value = e.target.value;

    if (e.target.id === "is_active") {
      value = e.target.checked;
    }

    setProfileForm({...profileForm, [e.target.id]:value});
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await updateUser(user_id, profileForm)
      handleAlertOpen("Successfully updated profile")
    } catch (error) {
        handleAlertOpen(`Update not successful ${error}`)
        throw error
    }
  }

  return (
    <div>
      <Modal
        showAlert={showAlert}
        handleAlertClose={handleAlertClose}
        message={alertMessage}
      />

      <div className="form_page global_card">
        <h2 className="form_header">{formHeader}</h2>
        <form className="listing_form profile_form"   onSubmit={handleSubmit}>

          <div className="flex_item">
            <label>Email: (You cannot update email)
              <input
                type="text"
                placeholder="Email"
                value={profileForm.email}
                id="email"
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

          <div className="flex_item">
            <label>About Store:<br/>
              <textarea
                type="text"
                placeholder="Hype up your store."
                value={profileForm.about_store}
                onChange={handleChange}
                id="about_store"
              />
            </label>
          </div>

          <div className="flex_row">
            <div className="flex_item checkbox_row">
              <label htmlFor="is_active">Active:</label>
                <input
                  name="is_active"
                  type="checkbox"
                  // value={profileForm.is_active}
                  checked={profileForm.is_active}
                  onChange={handleChange}
                  id="is_active"
                />
            </div>
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
    </div>
  )
}
