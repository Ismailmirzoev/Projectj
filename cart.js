let arr = [];
for(let i = 0; i < localStorage.length; i++) {
    let tbody = document.getElementsByClassName("tbody")[0];
    if (!localStorage.key(i).search("shop")) {
        let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        arr.push(i);
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td><img src="${obj.img1}" alt=""></td>
        <td>${obj.name1}</td>
        <td>${obj.price}</td>
        <td><input oninput="func2(${i})" class="inpp1 min="1" type="number"></td>
        <td class="sub"></td>
        <td><button class="butt1" onclick="delete1(${i})">Delete</button></td>`;
        function func2(index) {
               let a = arr.indexOf(index);
               let sub1 = document.getElementsByClassName("sub");
               let inp1 = document.getElementsByClassName("inpp1");
               sub1[a].innerHTML = inp1[a].value * JSON.parse(localStorage.getItem(localStorage.key(index))).price + "$";
               let subtot = sub1[a].innerHTML;
               window.location.reload();
           }
        tbody.append(tr);
        function delete1(index) {
            localStorage.removeItem(localStorage.key(index));
            window.location.reload();
        }
    }
}
 
// localStorage.clear();
let class1 = document.getElementById("class1");
function funcc1() {
    class1.style.display = "none";
}
function func3() {
    class1.style.display = "block";
} 
let vvv = document.getElementsByClassName("vvv")[0];
let btn = document.getElementsByClassName("btn2")[0];
function functt2() {
    if (localStorage.getItem("nickname")) {
        let nick = localStorage.getItem("nickname");
        vvv.innerHTML = nick;
        btn.innerHTML = "Log Out";
    }
for(let i = 0; i < localStorage.length; i++) {
    if (!localStorage.key(i).search("shop")) {
        let obj = localStorage.getItem("subtot");
        let span1 = document.getElementsByClassName("span1")[0];
        let span2 = document.getElementsByClassName("span3")[0];
        span1.innerHTML = obj;
        span2.innerHTML = obj; 
    }
}
}
function func1() {
        localStorage.removeItem("nickname");
        window.location.href = "index.html";
} 