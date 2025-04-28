let num = +localStorage.getItem("num");
document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault();
})
function func2() {
    for(let i = 0; i <= num; i++) {
            let obj = JSON.parse(localStorage.getItem(`user ${i}`));
            let inp1 = document.getElementById("inp11");
            let inp2 = document.getElementById("inp12");
            if (inp1.value == obj.username && inp2.value == obj.pass) {
                alert("Успешно!");
                localStorage.setItem("nickname", JSON.parse(localStorage.getItem(`user ${i}`)).username);
                window.location.href = "index2.html";
                break;
            } else if((inp1.value !== obj.username && inp2.value !== obj.pass) && i == num-1) {
                alert("Error");
            } else {
                continue;
            }
        }
}
// localStorage.clear();