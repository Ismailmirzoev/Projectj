let vvv = document.getElementsByClassName("vvv")[0];
let btn = document.getElementById("btn2");
function func2() {
    if (localStorage.getItem("nickname")) {
        let nick = localStorage.getItem("nickname");
        vvv.innerHTML = nick;
        btn.innerHTML = "Log Out";
    }
}
function func1() {
        localStorage.removeItem("nickname");
        window.location.href = "index.html";
}