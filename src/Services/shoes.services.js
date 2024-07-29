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

export async function fetchShoeById(id) {
	try {
		const res = await fetch(`${NIKEDAS_API_SHOES}/${id}`);
		const shoe = await res.json();
		return shoe;
	} catch (error) {
		throw error;
	}
}
export async function deleteListing(id) {
	try {
		const res = await fetch(`${NIKEDAS_API_SHOES}/${id}`, {
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

export async function updateShoe(id, listing) {
	const options = {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
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
