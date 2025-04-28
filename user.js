let num = +localStorage.getItem("num");
for(let i = 0; i < num; i++) {
    let obj = JSON.parse(localStorage.getItem(`user ${i}`));
    let span1 = document.getElementById("span1");
    let span2 = document.getElementById("span2");
    let span3 = document.getElementById("span3");
    let span4 = document.getElementById("span4");
    span1.innerHTML = obj.name1;
    span2.innerHTML = obj.surname;
    span3.innerHTML = obj.email;
    span4.innerHTML = obj.username;
}



let vvv = document.getElementsByClassName("vvv")[0];
let btn = document.getElementsByClassName("btn2")[0];
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