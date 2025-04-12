let num = +localStorage.getItem("num");
function func1() {
    for(let i = 0; i < num; i++) {
            let obj = JSON.parse(localStorage.getItem(`user ${i}`));
            let inp1 = document.getElementsByClassName("inp11")[0];
            let inp2 = document.getElementsByClassName("inp12")[0];
            if (inp1.value == obj.name1 && inp2.value == obj.pass) {
                alert("Успешно!");
                window.location.href = "index2.html";
                break;
            } else {
                continue;
            }
    }
    alert("Error");
}
// localStorage.clear();