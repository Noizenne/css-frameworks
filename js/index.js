import { setRegFormListener } from "../js/handlers/register.mjs";
import { setLoginFormListener } from "../js/handlers/login.mjs";

setRegFormListener();

setLoginFormListener();

const path = location.pathname;

if (path === "/proflie/login/") {
    setLoginFormListener()
} else if (path === "/proflie/register/") {
    setRegFormListener()
}