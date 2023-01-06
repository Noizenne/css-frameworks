import { load } from "../storage/index.mjs";
import { getToken } from "../posts/getToken.mjs";
import { API_SOCIAL_URL } from "../variables.mjs";
/**
 * Will get a profile from API
 * 
 * @returns a profile with listings tag included
 */
export async function getProfile(name = load("profile").name) {
    const token = load("token");
  
    const response = await fetch(
      `${API_SOCIAL_URL}/profiles/${name}`,
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


  /**
 * Requests GET to get posts by profile
 */
export async function getPostsFromUser(name = load("profile").name) {
  const token = load("token");

  const response = await getToken(`${API_SOCIAL_URL}/profiles/${name}/posts`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!name) {
    throw new Error(response.statusText);
  }

  return await response.json();
}
