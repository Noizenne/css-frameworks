import * as postMethods from "../posts/index.mjs"

/* const queryString = window.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id"); */

const action = "/post";

function postTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("singlePost");
    post.innerHTML = `
    <div class="bg-light rounded align-items-center">
    <h1 class="text-dark ms-2">${postData.title}</h1>
    <div class="text-dark ms-2">${postData.body}</div>
    </div>`;

    console.log(post);

    if(postData.media) {
        const img = document.createElement("img");
        img.src = postData.media;
        img.alt = `Image is from ${postData.title}`;
        post.append(img);
    }
    return post;
}


function postsTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("post")
    post.innerHTML = `<a href="/profile${action}/?=${postData.id}">
    <div class="bg-light rounded align-items-center m-2">
    <h1 class="text-dark ms-2">${postData.title}</h1>
    <div class="text-dark ms-2">${postData.body}</div>
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

function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData));
}

function renderPostsTemplate(postDataList, parent) {
    parent.append(...postDataList.map(postsTemplate));
}

export async function getSinglePost() {
    const posts = await postMethods.getPosts();
    const post = posts();
    const container = document.querySelector("#post")
    renderPostTemplate(post, container);
}

export async function getAllPosts() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#posts")
    renderPostsTemplate(posts, container);
}