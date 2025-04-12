let null1 = +localStorage.getItem("null");
let id = 1000;
let op = 0;
let opr = `${op++}/10`;
let tbody1 = document.getElementsByClassName("tbody1")[0];
for(let i = 0; i < null1; i++) {
    let obj = JSON.parse(localStorage.getItem(`tovar ${i}`));
    let tr1 = document.createElement("tr");
    tr1.innerHTML = `
       <td>${id++}</td>
       <td>${obj.brand}</td>
       <td>${obj.model}</td>
       <td>${obj.category}</td>
       <td><img src="${obj.img}" alt=""></td></td>
       <td>${obj.price}</td>
       <td><button onclick="func1()" class="btnn1">Редактировать</button> <button onclick="func2()" class="btnn2">Удалить</button></td>`;
       tbody1.append(tr1);
}
// localStorage.clear();