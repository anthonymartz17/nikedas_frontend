import "./AboutStore.css"
import { useState, useEffect } from 'react'


// firebase
import { useAuth } from "../../Context/AuthContext"

// services
import { fetchUserById } from "../../Services/users.services"

export default function AboutStore() {

  const [ profile, setProfile ] = useState({});
  
  // auth
  const {currentUser: uuid} = useAuth();
  const user_id = uuid ? uuid : 2;

  // get user profile
  async function getUser(user_id) {
    const user = await fetchUserById(user_id);
    setProfile(user)
  }

  useEffect(() =>{
    try {
      getUser(user_id)
    } catch (error) {
        throw error;
    }
  },[user_id])

  
  return (
    <div className="about_store">
      <h2>About {profile.first_name}'s store</h2>
      <div className="bar"></div>
      <p>{profile.about_store}</p>
    </div>
  )
}
