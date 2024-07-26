import "./AccountListings.css"
import { useState, useEffect } from "react"
import { useParams} from "react-router-dom"

import shoes from "../../Data/shoes.json";

import Filters from "./Filters.jsx"
import AccountListing from "./AccountListing.jsx"

const user_id = 1
const user_listings = shoes.filter(({ seller_id }) => seller_id === user_id);

export default function Account() {
  const [ accountListings, setAccountListings ] = useState(user_listings);

  return (
    <div className="account_listings">
      <h2>My Listings</h2>
      <Filters />
      <section className="listings">
        <div className="listings_header">
          <h4 className="photo_header">Photo</h4>
          <h4 className="brand_header">Brand</h4>
          <h4 className="model_header">Model</h4>
          <h4 className="gender_header">Gender</h4>
          <h4 className="size_header">Size</h4>
          <h4 className="actions_header">Actions</h4>
        </div>
        {accountListings.map(listing => (
          <AccountListing listing={listing} key={listing.id} />
        )
      )}
      </section>
    </div>
  )
}

