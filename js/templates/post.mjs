import * as postMethods from "../posts/index.mjs"

export function postTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("post")
    post.innerText = postData.title;

    if(postData.media) {
        const img = document.createElement("img");
        img.src = postData.media;
        img.alt = `Image is from ${postData.title}`;
        post.append(img);
    }
    return post;
}
export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData));
}

export function renderPostsTemplate(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate));
}

export async function getSinglePost() {
    const posts = await postMethods.getPosts();
    const post = posts[32];
    const container = document.querySelector("#post")
    renderPostTemplate(post, container);
}

export async function getAllPosts() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#posts")
    renderPostsTemplate(posts, container);
}