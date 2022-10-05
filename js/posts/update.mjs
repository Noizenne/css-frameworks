import { API_SOCIAL_URL } from "../variables.mjs";

import { getToken } from "./getToken.mjs";

const action = "/posts/";
const method = "put";

export async function updatePost(postData) {
    if(!postData.id) {
        console.log("Update requires a post ID.")
       }
    const UPDATE_POST_URL = `${API_SOCIAL_URL}${action}${postData.id}`;

    const response = await getToken(UPDATE_POST_URL, {
        method,
        body: JSON.stringify(postData)
    });
    
   return await response.json();
   
}

