import * as listeners from "../js/handlers/index.mjs"

const path = location.pathname;

if (path === "/proflie/login.html") {
    listeners.setLoginFormListener()
} else if (path === "/proflie/register/") {
    listeners.setRegFormListener()
} else if (path === "/profile/create/index.html") {
    listeners.setCreatePostFormListener()
} else if (path === "/post/edit/index.html") {
    listeners.setUpdatePostFormListener()
}
 
