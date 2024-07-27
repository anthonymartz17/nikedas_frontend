import './SellerStore.css'
import { useState, useEffect } from "react"
import { useParams} from "react-router-dom"

import shoes from "../../Data/shoes.json";

import Filters from "../Account/Filters.jsx"
import Listing from "../Account/AccountListing.jsx"

export default function SellerStore() {
  const [ sellerStore, setSellerStore ] = useState(shoes);
  
  const { id } = useParams();

  useEffect(() =>{
    const sellerListings = shoes.filter(({ seller_id }) => seller_id === +id);
    setSellerStore(sellerListings);

  }, []);



  return (
    <div>
      <h2>Seller's Store</h2>
      <Filters />
      {sellerStore.map(listing => (
        <Listing listing={listing} key={listing.id} />
      ))}
      


    </div>
  )
}
