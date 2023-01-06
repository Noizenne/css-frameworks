import { API_SOCIAL_URL } from "../variables.mjs";

import { getToken } from "./getToken.mjs";

const action = "/posts";

/**
 * Requests GET to get all posts
 */

export async function getPosts() {
    const GET_POSTS_URL = `${API_SOCIAL_URL}${action}`;
    const response = await getToken(GET_POSTS_URL);

   return await response.json();
}

/**
 * Requests GET to get a single post
 * @param {number} id
 */
export async function getPost(id) {
    if (!id) {
        console.log("Get requires a post ID.")
    }
    const GET_POST_URL = `${API_SOCIAL_URL}${action}/${id}`;

    const response = await getToken(GET_POST_URL);
    
   return await response.json();
}

