// localStorage.clear();
// localStorage.clear();



let vvv = document.getElementsByClassName("vvv")[0];
let btn = document.getElementsByClassName("btn2")[0];
function func2() {
    if (localStorage.getItem("nickname")) {
        let nick = localStorage.getItem("nickname");
        vvv.innerHTML = nick;
        btn.innerHTML = "Log Out";
    }
    let a = +localStorage.getItem("null1");
    for(let i = 0; i <= a; i++) {
        if (localStorage.getItem(`tovar ${i}`)) {
            let el = 30;
            let div = document.createElement("div");
            let divv = document.getElementsByClassName("divi4")[0];
            let divv1 = document.getElementsByClassName("divi5")[0];
            let divv2 = document.getElementsByClassName("divi6")[0];
            div.classList.add("divi1");
            div.style.display = "none";
            let obj = JSON.parse(localStorage.getItem(`tovar ${i}`));
            div.innerHTML = `
                <img class="photoo1" src="${obj.img1}" alt="">
                <p class="shopo1">${obj.brand}</p>
                <p class="shopo2">${obj.price}</p>
                <p class="shopo3">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                <p class="shopo4">★★★★☆(${el++})</p>
                <button class="btt1">Add to Cart</button>`;
                divv.append(div);
            div.style.display = "block";
            let photoo1 = document.getElementsByClassName("photoo1")[i];
            if (photoo1 >= 4) {
                divv1.append(div);
            }
        }
    }
    let shop2 = document.getElementsByClassName("shop2");
    shop2.innerHTML = "$";
}
function func1() {
    localStorage.removeItem("nickname");
    window.location.href = "index.html";
}
let btn1 = document.getElementsByClassName("btt1");
let obj1 = {
    img1: "",
    name1: "",
    price: "",
    quantity: ""
}
for(let i = 0; i < btn1.length; i++) {
    if (btn1[i]) {
        btn1[i].addEventListener("click", ()=> {
            let img = document.getElementsByClassName("photo1")[i];
            let name1 = document.getElementsByClassName("shop1")[i];
            let price = document.getElementsByClassName("shop2")[i];
            obj1.img1 = img.src;
            obj1.name1 = name1.innerHTML;
            obj1.price = price.innerHTML;
            localStorage.setItem(`shop ${i}`, JSON.stringify(obj1));
        })
    }
}




let products = document.getElementsByClassName("divi1");

let obj = {
    img1: "",
    name1: "",
    price: "",
    data1: "",
    raiting: ""
}
for(let i = 0; i<products.length; i++) {
    let img = document.getElementsByClassName("photo1")[i];
    let shop1 = document.getElementsByClassName("shop1")[i];
    let shop2 = document.getElementsByClassName("shop2")[i];
    let shop3 = document.getElementsByClassName("shop3")[i];
    let shop4 = document.getElementsByClassName("shop4")[i];
    obj.img1 = img.src;
    obj.name1 = shop1.innerHTML;
    obj.price = shop2.innerHTML;
    obj.data1 = shop3.innerHTML;
    obj.raiting = shop4.innerHTML;
    localStorage.setItem(`click ${i}`, JSON.stringify(obj));
}

let img = document.getElementsByClassName("photo1");
for(let k = 0; k < img.length; k++) {
    img[k].addEventListener("click", ()=> {
        localStorage.setItem("clickedElement", k);
        window.location.href = "DetailsOfElements.html";
    })
} 