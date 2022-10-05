import { API_SOCIAL_URL } from "../variables.mjs";

import { getToken } from "./getToken.mjs";

const action = "/posts/";
const method = "delete";

export async function removePost(id) {
    if(!id) {
        console.log("To delete there requires a post ID.")
       }
    const UPDATE_POST_URL = `${API_SOCIAL_URL}${action}${id}`;

    const response = await getToken(UPDATE_POST_URL, {
        method
    });
    
   return await response.json();
   
}

