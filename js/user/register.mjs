import { register } from "../api/auth.mjs"


export function setRegFormListener() {
    const form = document.querySelector("#registerForm");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries())

        // In auth.mjs
        register(profile);
    })
}