import { setRegFormListener } from "../js/handlers/register.mjs";
import { setLoginFormListener } from "../js/handlers/login.mjs";
import * as post from "../js/posts/index.mjs"

setRegFormListener();

setLoginFormListener();

const path = location.pathname;

if (path === "/proflie/login/") {
    setLoginFormListener()
} else if (path === "/proflie/register/") {
    setRegFormListener()
}

post.createPost()
post.updatePost()
post.removePost()
post.getPost()
post.getPosts()