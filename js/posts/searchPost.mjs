import * as templates from "../templates/post.mjs";

import * as postMethods from "../posts/index.mjs";

const searchInput = document.getElementById("searchPostEl");

export async function searchPost(event) {

    
    const searchInputValue = event.target.value.toLowerCase();
    console.log(searchInputValue)

    const posts = await postMethods.getPosts();

    const searchResult = posts.filter((posts) => 
    posts.title.toLowerCase().includes(searchInputValue));
    console.log(searchResult)

    const searchOutput = searchResult.map(templates.postTemplate);

    const postContainer = document.getElementById("posts");

    if (searchResult.length === 0) {
        console.log("No result found")
    } else {
        postContainer.innerHTML = "";
    
        postContainer.append(...searchOutput);
    }
}

if(searchInput) {
    searchInput.addEventListener("keyup", searchPost);
}