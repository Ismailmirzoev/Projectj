function index() {
    if (inp1.value < 0 && inp2.value < 0 && inp3.value < 0) {
       alert("Заполните Все Поля!");
    } else {
       alert("Успешно!");
       window.location.href = "index.html";
    }
}
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
let inp1 = document.getElementsByClassName("ll1");
let inp2 = document.getElementsByClassName("ll2");
let inp3 = document.getElementsByClassName("ll3");