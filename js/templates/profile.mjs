import { getProfile } from "../profile/read.mjs";

export function templateProfilePageInfo(profileData) {
    console.log(profileData)
  const section = document.createElement("div");
  section.classList.add("profile");
  section.innerHTML = `<div class="row">
  <div class="d-flex justify-content-center">
    <img src="${profileData.avatar}" class="rounded-circle mt-3" style="width:150px;" onerror="this.src='/images/basic-shape-avatar-1632968.jpg'" alt="Profile picture of a basic woman avatar with black hair and glasses.">
  </div>
  <div class="text d-flex justify-content-center mt-3">
    <div class="d-flex flex-column align-items-end me-4">
      <p>Name</p>
      <p>Email</p>
    </div>
    <div class="info">
      <p>${profileData.name}</p>
      <p>${profileData.email}</p>
    </div>
  </div>
</div>
</div>`;


  return section;
}

export function renderProfilePageInfo(profileData, parent) {
  parent.append(templateProfilePageInfo(profileData));
}

export async function profileTemplate() {
  const profile = await getProfile();

  const container = document.querySelector(".wall");
  renderProfilePageInfo(profile, container);
}