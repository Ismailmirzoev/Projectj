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
let img = document.getElementsByClassName("photo2")[0];
let p1 = document.getElementsByClassName("pt1")[0];
let p2 = document.getElementsByClassName("pt2")[0];
let p3 = document.getElementsByClassName("pt3")[0];
let p4 = document.getElementsByClassName("pt4")[0];

let num = localStorage.getItem("clickedElement");
let obj = JSON.parse(localStorage.getItem(`click ${num}`));

img.src = obj.img1;
p1.innerHTML = obj.name1;
p2.innerHTML = obj.price;
p3.innerHTML = obj.raiting;
p4.innerHTML = obj.data1;

// localStorage.clear(); 

let btn9 = document.getElementsByClassName("btn3");
let obj1 = {
    img1: "",
    name1: "",
    price: ""
}
for(let i = 0; i <= btn9.length; i++) {
    if (btn9[i]) {
        btn9[i].addEventListener("click", ()=> {
            let img = document.getElementsByClassName("photo2")[0];
            let name1 = document.getElementsByClassName("pt1")[0];
            let price = document.getElementsByClassName("pt2")[0];
            obj1.img1 = img.src;
            obj1.name1 = name1.innerHTML;
            obj1.price = price.innerHTML;
            localStorage.setItem(`shop ${i}`, JSON.stringify(obj1));
        })
    }
}