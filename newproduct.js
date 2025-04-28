let inp10 = document.getElementById("inp10");
let inp11 = document.getElementById("inp11");
let inp12 = document.getElementById("inp12");
let inp13 = document.getElementById("inp13");
let inp14 = document.getElementById("inp14");
let inp15 = document.getElementById("inp15");
let img1 = document.getElementsByClassName("image1")[0];
let obj = {
    brand1: "",
    model: "",
    category: "",
    img1: "",
    description: "",
    price: ""
}
if (!localStorage.getItem("null1")) {
    localStorage.setItem("null1", "0");
}
let a = +localStorage.getItem("null1");
function func1() {
    obj.brand = inp10.value;
    obj.model = inp11.value;
    obj.category = inp12.value;
    obj.description = inp13.value;
    obj.price = inp14.value;
    obj.img1 = inp15.value;
    localStorage.setItem(`tovar ${a++}`, JSON.stringify(obj));
    localStorage.setItem("null1", a);
    alert("Успешно!");
    window.location.href = "products.html";
}
function func3() {
    img1.src = inp15.value;
}
// localStorage.clear();
let null1 = localStorage.getItem("null1");
for (let i = 0; i <= null1; i++) {
    if (localStorage.getItem(`tovar ${i}`)) {
       let obj = JSON.parse(localStorage.getItem(`tovar ${i}`));
       inp10.value = obj.brand;
       inp11.value = obj.model;
       inp12.value = obj.category;
       inp13.value = obj.description;
       inp14.value = obj.price;
       inp15.value = obj.img1;
       img1.src = obj.img1;
    }
}
function on1() {
    let vvv = document.getElementsByClassName("vvv")[0];
    let btn = document.getElementById("btn2");
    if (localStorage.getItem("nickname")) {
        let nick = localStorage.getItem("nickname");
        vvv.innerHTML = nick;
        btn.innerHTML = "Log Out";
    }
}
    function func7() {
            localStorage.removeItem("nickname");
            window.location.href = "index.html";
    }
function func2() {
    inp10.value = "";
    inp11.value = "";
    inp12.value = "";
    inp13.value = "";
    inp14.value = "";
    inp15.value = "";
    img1.src = "";
}