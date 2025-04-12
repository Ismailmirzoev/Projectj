let inp10 = document.getElementById("inp10");
let inp11 = document.getElementById("inp11");
let inp12 = document.getElementById("inp12");
let inp13 = document.getElementById("inp13");
let inp14 = document.getElementById("inp14");
let inp15 = document.getElementById("inp15");
let img1 = document.getElementsByClassName("image1")[0];
let obj = {
    brand: "",
    model: "",
    category: "",
    description: "",
    price: "",
    img: ""
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
    obj.img = inp15.value;
    localStorage.setItem(`tovar ${a++}`, JSON.stringify(obj));
    localStorage.setItem("null1", a);
    alert("Успешно!");
    window.location.href = "products.html";
}
function func3() {
    img1.src = inp15.value;
}
// localStorage.clear();
