import { createPost } from "../posts/create.mjs"


export function setCreatePostFormListener() {
    const form = document.querySelector("#createPost");
    
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
    
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            post.tags = post.tags.split(", ").map((item) => item.trim());

            if(!post.media.length) {
                delete post.media;
            }
    
            //Send to the API
            createPost(post);
        })
    }
}
    