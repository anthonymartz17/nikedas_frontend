import React from "react";
import ListingForm from "../Components/Account/ListingForm";
import "./NewListing.css"
export default function NewListing() {
	return (
		<section className="new_listing_page">
			<ListingForm formHeader="Create Listing" />
		</section>
	);
}
