let vvv = document.getElementsByClassName("vvv")[0];
function func2() {
    let nick = localStorage.getItem("nickname");
    vvv.innerHTML = nick;
}
function func1() {
        localStorage.removeItem("nickname");
        window.location.href = "index.html";
}
// localStorage.clear();