import { register } from "../auth/register.mjs"

/**
 * Retreives form
 * Adds eventlistener to submit button
 * Sens to API
 */
export function setRegFormListener() {
    const form = document.querySelector("#registerForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
    
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
    
            // In /auth/register.mjs
            register(profile);
        })
    }
}