const NIKEDAS_API_SHOES = import.meta.env.VITE_APP_SHOES;

export async function fetchAllShoes() {
	try {
		console.log(NIKEDAS_API_SHOES, "NIKEDAS_API_SHOES");
		const res = await fetch(NIKEDAS_API_SHOES);
		const shoes = await res.json();
		return shoes;
	} catch (error) {
		throw error;
	}
}
export async function fetchShoesBySeller(token) {
	try {
		const res = await fetch(`${NIKEDAS_API_SHOES}/seller-shoes`, {
			headers: { Authorization: "Bearer " + token },
		});
		const shoes = await res.json();
		return shoes;
	} catch (error) {
		throw error;
	}
}

export async function fetchShoeById(id) {
	try {
		const res = await fetch(`${NIKEDAS_API_SHOES}/${id}`);
		const shoe = await res.json();
		return shoe;
	} catch (error) {
		throw error;
	}
}
export async function deleteListing(id, token) {
	try {
		const res = await fetch(`${NIKEDAS_API_SHOES}/${id}`, {

			headers: { Authorization: "Bearer " + token },
			
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
	const options = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(listing),
	};

	try {
		const res = await fetch(`${NIKEDAS_API_SHOES}`, options);
		const shoe = await res.json();
		return shoe;
	} catch (error) {
		throw error;
	}
}

export async function updateShoe(id, listing, token) {
	const options = {
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
		body: JSON.stringify(listing),
	};

	try {
		const res = await fetch(`${NIKEDAS_API_SHOES}/${id}`, options);
		const shoe = await res.json();
		return shoe;
	} catch (error) {
		throw error;
	}
}
