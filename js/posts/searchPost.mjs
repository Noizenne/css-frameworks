import { getPosts } from "../posts/index.mjs";

export async function searchPost() {

    const searchInput = document.querySelector("#searchInput");
    const searchForm = document.querySelector("#search");
    const listingsContainer = document.querySelector(".searchResult");

    searchForm.addEventListener("keyup", async (event) => {
        event.preventDefault();

        const posts = await getPosts();
        const filteredPosts = posts.filter((post) => {
            const title = post.title.toLowerCase();

            const searchValue = searchInput.value.toLowerCase();

            if(title.includes(searchValue)) {
                listingsContainer.innerHTML = `<div class="post">
                    <a href="/profile/post/index.html?id=${post.id}">
                    <div class="d-flex justify-content-center text-align-center">${post.title}</div>
                     <div class="d-flex justify-content-center"><img style="solid 1px white" src="${post.media}"</img></div></a>
                     <div>`;
            return true;
            }
        });

        if(filteredPosts === 0 || filteredPosts === null) {
            listingsContainer.innerHTML = `<p>No matches</p>`;
        }

        getPosts(filteredPosts, listingsContainer);
    });
}

/**
 * User inputs string in the searchbar
 * Retrieves single posts from input value
 * 
 */