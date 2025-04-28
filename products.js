let null1 = +localStorage.getItem("null1");
let id = 1000;
let op = 0;
let opr = `/10`;
// localStorage.clear();
for(let i = 0; i <= null1; i++) {
    let obj = JSON.parse(localStorage.getItem(`tovar ${i}`));
    let tbody = document.getElementsByClassName("tbody1")[0];
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${id++}</td>
        <td>${obj.brand}</td>
        <td>${obj.model}</td>
        <td>${obj.category}</td>
        <td><img class="imgg11" src="${obj.img1}" alt=""></td>
        <td>${obj.price}</td>
        <td>${op++ + opr}</td>
        <td><button onclick="func1()" class="btnn1">Редактировать</button> <button onclick="func2()" class="btnn2">Удалить</button></td>`;
    tbody.append(tr);
    function func1() {
        window.location.href = "newproduct.html";
       }
       function func2() {
           localStorage.removeItem(`tovar ${i}`);
           window.location.reload();
       }
}
function onload1() {
    let vvv = document.getElementsByClassName("vvv")[0];
    let btn = document.getElementById("btn2");
    if (localStorage.getItem("nickname")) {
        let nick = localStorage.getItem("nickname");
        vvv.innerHTML = nick;
        btn.innerHTML = "Log Out";
    }
}
function onload2() {
        localStorage.removeItem("nickname");
        window.location.href = "index.html";
}