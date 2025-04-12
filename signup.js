let btn1 = document.getElementsByClassName("but")[0];
let inp10 = document.getElementsByClassName("inp10")[0];
let inp11 = document.getElementsByClassName("inp11")[0];
let inp12 = document.getElementsByClassName("inp12")[0];
let inp13 = document.getElementsByClassName("inp13")[0];
let inp14 = document.getElementsByClassName("inp14")[0];
let obj = {
    name1: "",
    surname: "",
    email: "",
    username: "",
    pass: ""
}
if (!localStorage.getItem("num")) {
    localStorage.setItem("num", "0");
}
let a = +localStorage.getItem("num");
function func1() {
        obj.name1 = inp10.value;
        obj.surname = inp11.value;
        obj.email = inp12.value;
        obj.username = inp13.value;
        obj.pass = inp14.value;
        localStorage.setItem(`user ${a++}`, JSON.stringify(obj));
        localStorage.setItem("num", a);
        alert("Успешно!");
        window.location.href = "login.html";
}