import "./AccountListing.css"
import React from 'react'

export default function SellerListing({ listing }) {
  const {
    id,
    brand,
    model,
    gender,
    size
  } = listing;
  return (
    <div className="listings_row">
      <div className="listing_img"></div>
      <p className="listing_brand">{brand}</p>
      <p className="listing_model">{model}</p>
      <p className="listing_gender">{gender}</p>
      <p className="listing_size">{size}</p>
      <div className="actions">
        <span>P</span>
        <span>E</span>
        <span>D</span>
      </div>
      
    </div>
  )
}
