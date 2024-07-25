import React from 'react';
import { Outlet } from "react-router-dom";
import AccountListings from "../Components/Account/AccountListings";

export default function Account() {
  return (
    <div>
      <AccountListings />
      {/* <Outlet /> */}
    </div>
  )
}
