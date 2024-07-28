const NIKEDAS_API_USERS = import.meta.env.VITE_APP_USERS;

export async function fetchUserById(id) {
	try {
		const res = await fetch(`${NIKEDAS_API_USERS}/${id}`);
		const shoe = await res.json();
		return shoe;
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
export async function updateUser(id, profile) {
	try {
		const options = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(profile),
		};

		const res = await fetch(`${NIKEDAS_API_USERS}/${id}`, options);
		const user = await res.json();
		return user;
	} catch (error) {
		throw error;
	}
}
