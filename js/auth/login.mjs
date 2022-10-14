import { API_SOCIAL_URL } from "../variables.mjs"

import * as storage from "../storage/index.mjs"

const action = "/auth/login";
const method = "post";

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

storage.save("token", result.accessToken);

storage.save("profile", result)
// Create a loader with a message to show they have successfully logged in. A modal of some kind

}

const token = localStorage.getItem("token");
