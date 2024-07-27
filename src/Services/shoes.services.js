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
