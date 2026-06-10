alert("script.js berhasil dibaca");

function login(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

let user =
dataPengguna.find(
u =>
u.email === email &&
u.password === password
);

if(user){

window.location.href =
"dashboard.html";

}
else{

alert(
"Email/password yang anda masukkan salah"
);

}

}

function lupaPassword(){

alert(
"Silakan hubungi Administrator"
);

}

function daftar(){

alert(
"Fitur pendaftaran akun"
);

}