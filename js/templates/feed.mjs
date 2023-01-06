import { getProfile } from "../profile/read.mjs";

export function templateProfilePageInfo(profileData) {
  const section = document.createElement("div");
  section.classList.add("profile");
  section.innerHTML = `<div class="row justify-content-between">
  <div class="col-lg-2 bg-light rounded align-items-center">
    <div class="d-flex justify-content-center">
      <img src="${profileData.avatar}" onerror="this.src='/images/basic-shape-avatar-1632968.jpg'" class="rounded-circle mt-3" style="width:100px;" alt="Profile picture.">
    </div>
    <p id="name" class="text fs-5 d-flex justify-content-center">${profileData.name}</p>
    <p class="text fs-6 d-flex justify-content-center me-2">Student at Noroff</p>
  </div>

  <div class="col-lg-9 bg-light rounded mt-2">
    <div class="profileImg d-flex">
    <img src="${profileData.avatar}" onerror="this.src='/images/basic-shape-avatar-1632968.jpg'" class="rounded-circle mt-3" style="width:80px;" alt="Profile picture.">
    </div>
    <form>
        <div class="form-group mb-2">
            <label for="textArea"></label>
            <textarea class="form-control" id="exampleFormControlTextarea3" rows="7">Write something here...</textarea>
          </div>
          <button class="btn mb-3 border border-dark">Post</button>
    </form>
  </div>
</div>`;

  return section;
}

export function renderProfilePageInfo(postsData, parent) {
  parent.append(templateProfilePageInfo(postsData));
}

export async function feedTemplate() {
  const profile = await getProfile();

  const container = document.querySelector(".thisProfile");
  renderProfilePageInfo(profile, container);
}
