const menu = document.querySelector("#hamburger");

const nav = document.querySelector("#nav-bar");

const close = document.querySelector("#close-menu");

const body = document.querySelector(".body");

menu.addEventListener("click", ()=>{
    nav.classList.toggle("active");
    close.classList.toggle("active");
    menu.classList.toggle("close");
    body.classList.toggle("active");
})

close.addEventListener("click", ()=>{
    nav.classList.toggle("active");
    close.classList.toggle("active");
    menu.classList.toggle("close");
    body.classList.toggle("active");
})

const error = document.querySelector(".error");

const textbox = document.querySelector("#textbox");

const success = document.querySelector(".success");

const go = document.querySelector("#go");

go.addEventListener("click",()=>{

    const value = textbox.value;
    
    if(!value.includes("@gmail.com")){
        error.classList.add("active");
        success.classList.remove("active");
        textbox.style.border = "2px solid red";
        textbox.style.color = "red";
    };
    
    if(value.includes("@gmail.com")){
        error.classList.remove("active");
        success.classList.add("active");
        textbox.style.border = "2px solid green";
        textbox.style.color = "green";
    };
})