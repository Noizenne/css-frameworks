import * as listeners from "../js/handlers/index.mjs"

import * as templates from "../js/templates/index.mjs"
import * as postMethods from "../js/posts/index.mjs"

const path = location.pathname;

if (path === "/profile/login.html") {
    listeners.setLoginFormListener()
} else if (path === "/proflie/register/index.html") {
    listeners.setRegFormListener()
} else if (path === "/profile/create/index.html") {
    listeners.setCreatePostFormListener()
} else if (path === "/post/edit/index.html") {
    listeners.setUpdatePostFormListener()
}
 

templates.getSinglePost();

templates.getAllPosts();

postMethods.searchPost();