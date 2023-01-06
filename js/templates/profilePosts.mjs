import { getPostsFromUser } from "../profile/read.mjs";

export function templateProfilePosts(profileData) {
    console.log(profileData)
  const section = document.createElement("div");
  section.classList.add("profile");
  section.innerHTML = `<div class="row justify-content-end">
<div class="col-lg-9 d-flex bg-light rounded align-items-center">
  <div>
   <img src="${profileData.avatar}" onerror="this.src='/images/basic-shape-avatar-1632968.jpg'" class="rounded-circle m-4" style="width: 80px;" alt="Profile picture.">
  </div>
   <div class="card my-3 px-2">
     <h2 class="d-flex justify-content-between">${profileData.title} <small class="align-self-center" style="color: gray; font-size: 16px;">${profileData.created}</small></h2>
     <p class="text">${profileData.body}</p>
  </div>
</div>
</div>`;

  return section;
}

export function renderProfilePosts(profileData, parent) {
  parent.append(...profileData.map(templateProfilePosts));
}

export async function profilePosts() {
  const profile = await getPostsFromUser();

  const container = document.querySelector(".profilePosts");
  renderProfilePosts(profile, container);
}