import * as listeners from "../js/handlers/index.mjs"

import * as templates from "../js/templates/index.mjs"
import * as postMethods from "../js/posts/index.mjs"

const path = location.pathname;

if (path === "/profile/login.html") {
    listeners.setLoginFormListener()
} else if (path === "/profile/register/index.html" || path === "/profile/register/") {
    listeners.setRegFormListener()
} else if (path === "/profile/create/index.html" || path === "/profile/create/index.html") {
    listeners.setCreatePostFormListener()
} else if (path === "/post/edit/index.html" || path === "/post/edit/index.html") {
    listeners.setUpdatePostFormListener()
} else if (path === "/profile/posts/index.html" || path === "/profile/posts/") {
    templates.getAllPosts();
    postMethods.searchPost();
} else if (path === "/profile/post/index.html" || path === "/profile/post/") {
    templates.getSinglePost();
} else if (path === "/profile/index.html" ) {
    templates.feedTemplate();
} else if(path === "/profile/login/index.html" || path === "/profile/login/") {
    templates.profileTemplate();
} 
