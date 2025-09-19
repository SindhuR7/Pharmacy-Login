const admin = document.querySelector(".admin")
const salesman = document.querySelector(".salesman")
const role = document.querySelector("#sele")
const login = document.querySelector(".sign")
const key = document.querySelector("#key")
const footer = document.querySelector(".footer")
const enter = document.querySelector(".enter")
const btns = document.querySelector(".roles")
const container = document.querySelector(".container")
const arrow = document.querySelector(".arrow")
const back = document.querySelector(".fa-arrow-left")
const password = document.querySelector("#password")
const hidden = document.querySelector(".fa-eye-slash")
const visible = document.querySelector(".fa-eye")

const show = () => {
    if(arrow.style.display === "flex"){
        arrow.style.display = "none";
    }else{
        arrow.style.display = "flex";
    }
}
admin.addEventListener("click", () => {
    salesman.style.display = "none";
    role.style.display     = "none";
    login.style.display    = "flex";
    key.style.display      = "none";
    footer.style.marginBottom = "0px"
    enter.style.background  = "linear-gradient(135deg, #2196F3, #0D47A1)";
    btns.style.marginBottom  = "10px";
    container.style.height = "600px"
    show();
})

salesman.addEventListener("click", () => {
    admin.style.display = "none";
    role.style.display  = "none";
    login.style.display = "flex";
    enter.style.background  = " linear-gradient(135deg, #26A69A, #00897B)";
    btns.style.marginBottom  = "14px";
    container.style.height   = "650px";
    arrow.style.display  = "flex";
    visible.style.top  = "25%";
    hidden.style.top  = "25%";
})

back.addEventListener("click",() => {
    login.style.display = "none"
    salesman.style.display = "flex";
    admin.style.display = "flex";
    role.style.display = "block";
    container.style.height = "400px"
    show();
})

password.addEventListener("click", () => {
    visible.style.visibility = "visible";
    visible.style.opacity = "1";
})

visible.addEventListener("click", () => {
    hidden.style.visibility = "visible";
    hidden.style.opacity = "1";
    visible.style.visibility = "hidden";
    visible.style.opacity  = "0";
    password.type = "text";
})

hidden.addEventListener("click", () => {
     hidden.style.visibility = "hidden";
    hidden.style.opacity = "0";
    visible.style.visibility = "visible";
    visible.style.opacity  = "1";
    password.type = "password";
})

document.addEventListener("click", (e) => {
    if(e.target !== password && e.target !== visible && e.target !== hidden){
        hidden.style.visibility = "hidden";
        visible.style.visibility = "hidden";
    }
})

//Stock Graph
