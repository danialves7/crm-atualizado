document.body.onload = formSignUp;
 
function formSignUp() {
    var divNova = document.createElement("div");
    divNova.appendChild(conteudoNovo);
 
    var divAtual = document.getElementById("form-inner");
    document.body.insertBefore(divNova, divAtual);
};
let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");
 
function register(){
    x.style.left = "-440px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}
