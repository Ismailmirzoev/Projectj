function func1() {
    let num = +localStorage.getItem("num");
    for(let i = 0; i <= num; i++) {
            if (localStorage.getItem(`user ${i}`)) {
                window.location.href = "index2.html";
                break;
            } else if(!localStorage.getItem(`user ${i}`)) {
                alert("Зайдите В Аккаунт");
            } else {
                continue;
            }
    }
}
// localStorage.clear();