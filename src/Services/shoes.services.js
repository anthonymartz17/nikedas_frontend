const NIKEDAS_API = import.meta.env.VITE_APP_SHOES;

export async function fetchAllShoes() {
	try {
		const res = await fetch(NIKEDAS_API);
		const shoes = await res.json();
		return shoes;
	} catch (error) {
		throw error;
	}
}

export async function fetchShoeById(id) {
	try {
		const res = await fetch(`${NIKEDAS_API}/${id}`);
		const shoe = await res.json();
		return shoe;
	} catch (error) {
		throw error;
	}
}
export async function deleteListing(id) {
	try {
		const res = await fetch(`${NIKEDAS_API}/${id}`, {
			method: "DELETE",
		});
		if (!res.ok) {
			throw new Error(`Failed to delete listing with status: ${res.status}`);
		}
		const shoe = await res.json();
		return shoe;
	} catch (error) {
		throw error;
	}
}
export async function createShoe(listing) {
	try {
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(listing),
		};

		const res = await fetch(`${NIKEDAS_API}`, options);
		const shoe = await res.json();
		return shoe;
	} catch (error) {
		throw error;
	}
}

export async function updateShoe(id, listing) {
	try {
		const options = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(listing),
		};

		const res = await fetch(`${NIKEDAS_API}/${id}`, options);
		const shoe = await res.json();
		return shoe;
	} catch (error) {
		throw error;
	}
}
