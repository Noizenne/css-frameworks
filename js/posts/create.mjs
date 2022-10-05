import { API_SOCIAL_URL } from "../variables.mjs";

import { getToken } from "./getToken.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
    const CREATE_POST_URL = API_SOCIAL_URL + action;

    const response = await getToken(CREATE_POST_URL, {
        method,
        body: JSON.stringify(postData)
    });
    
    return await response.json();
    
}

