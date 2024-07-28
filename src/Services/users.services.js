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

export async function updateUser(id, profile) {
  try {
    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(profile)
    };

    const res = await fetch(`${NIKEDAS_API}/${id}`, options);
    const user = await res.json();
    return user;
  
  } catch(error) {
      throw error
  }
}