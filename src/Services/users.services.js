const NIKEDAS_API = import.meta.env.VITE_APP_USERS;

export async function fetchUserById(id) {
  try {
    const res = await fetch(`${NIKEDAS_API}/${id}`);
    const shoe = await res.json();
    return shoe;
  } catch (error) {
    throw error;
  }
}