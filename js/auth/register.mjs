import { API_SOCIAL_URL } from "../variables.mjs"


const action = "/auth/register";
const method = "post";

/**
 * Authorizer new user
 * 
 */
export async function register(profile) {
const registerUrl = API_SOCIAL_URL + action;
const body = JSON.stringify(profile);

const response = await fetch(registerUrl, {
    headers: {
        "Content-Type": "application/json"
    },
    method,
    body
})

const result = await response.json();
console.log(result);
}
