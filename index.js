function login(){
let username = "admin"
let password = "admin@123"

const usrname = document.getElementById('usrname').value
const pass = document.getElementById('pass').value

if(usrname  === username && pass === password){
    location.replace('secret.html')
}
if(usrname != username || pass != password){
console.log("not correct")
document.getElementById('test').innerText = "Password or Username is incorrect please try again!"
setTimeout(() => {
    document.getElementById('test').innerText = ""
}, 5000);
}

}