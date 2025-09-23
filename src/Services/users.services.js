const NIKEDAS_API_USERS = import.meta.env.VITE_APP_USERS;
const NIKEDAS_API_SHOES = import.meta.env.VITE_APP_SHOES;

export async function fetchUserById(id) {
	try {
		const res = await fetch(`${NIKEDAS_API_USERS}/${id}`);
		const shoe = await res.json();
		return shoe;
	} catch (error) {
		throw error;
	}
}
export async function fetchSellerListings(token) {
	try {
		const res = await fetch(`${NIKEDAS_API_SHOES}/seller/listings`, {
			headers: { Authorization: "Bearer " + token },
		});
		const shoes = await res.json();
		return shoes;
	} catch (error) {
		throw error;
	}
}
export async function createUser(payload) {
	try {
		const newUser = await fetch(NIKEDAS_API_USERS, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});
		return newUser;
	} catch (error) {
		throw error;
	}
}
export async function updateUser(profile, token) {
	try {
		const options = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
			body: JSON.stringify(profile),
		};

		const res = await fetch(`${NIKEDAS_API_USERS}/${id}`, options);
		const user = await res.json();
		return user;
	} catch (error) {
		throw error;
	}
}
