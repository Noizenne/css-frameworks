import * as postMethods from "../posts/index.mjs"

const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);
const id = searchParams.get("id");

/**
 * template for a single post
 * @param {string} postData 
 * 
 */

function postTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `
    <div class="bg-light rounded align-items-center pe-3 m-2">
    <h1 class="text-dark ms-2">${postData.title}</h1>
    <div class="text-dark ms-2 border rounded">${postData.body}</div>
    </div>`;

    if(postData.media) {
        const img = document.createElement("img");
        img.src = postData.media;
        img.alt = `Image is from ${postData.title}`;
        post.append(img);
    }
    return post;
}

/**
 * template for multiple posts
 * @param {*} postData 
 * 
 */
function postsTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("post")
    post.innerHTML = `<a href="/profile/post/index.html?id=${postData.id}">
    <div class="bg-light rounded align-items-center pe-3 m-2">
    <h1 class="text-dark ms-2">${postData.title}</h1>
    <div class="text-dark ms-2 border rounded">${postData.body}</div>
    <a href="/profile/post/edit/index.html"><button class="btn ms-2">Edit post</button></a>
    </div>`;

    if(postData.media) {
        const img = document.createElement("img");
        img.src = postData.media;
        img.alt = `Image is from ${postData.title}`;
        post.append(img);
    }
    return post;
}

/**
 * Appends single post
 */
function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData));
}

/**
 * Appends all posts
 */
function renderPostsTemplate(postDataList, parent) {
    parent.append(...postDataList.map(postsTemplate));
}

export async function getSinglePost() {
    const post = await postMethods.getPost(id);
    const container = document.querySelector("#post")
    renderPostTemplate(post, container);
}

export async function getAllPosts() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#posts")
    renderPostsTemplate(posts, container);
}