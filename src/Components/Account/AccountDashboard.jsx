import React from "react";
import "./AccountDashboard.css";
import AccountTable from "../Account/AccountTable";
export default function AccountDashboard({ onConfirmBeforeDelete }) {
	return (
		<div className="dashboard">
			<AccountTable onConfirmBeforeDelete={onConfirmBeforeDelete} />
		</div>
	);
}
