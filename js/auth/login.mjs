import { API_SOCIAL_URL } from "../variables.mjs"


const action = "/auth/login";
const method = "post";

//Send to the API
export async function login(profile) {
const loginUrl = API_SOCIAL_URL + action;
const body = JSON.stringify(profile);

const response = await fetch(loginUrl, {
    headers: {
        "Content-Type": "application/json"
    },
    method,
    body
})

const result = await response.json();

localStorage.setItem("token", result.accessToken);

// Create a loader with a message to show they have successfully logged in. A modal of some kind

}

const token = localStorage.getItem("token");
