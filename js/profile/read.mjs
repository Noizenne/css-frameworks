import { load } from "../storage/index.mjs";
import { API_SOCIAL_URL } from "../variables.mjs";
/**
 * Will get a profile from API
 * 
 * @returns a profile with listings tag included
 */
export async function getProfile(name = load("profile").name) {
    const token = load("token");
  
    const response = await fetch(
      `${API_SOCIAL_URL}/profiles/${name}?_listings=true`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    if (!name) {
      throw new Error(response.statusText);
    }
  
    return await response.json();
  }