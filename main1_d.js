// Create the 1_d container element
const container1d = document.createElement("div");
container1d.style.position = "relative";
container1d.style.width = "360px";
container1d.style.height = "640px";
container1d.style.background = "#FFFFFF";
document.body.appendChild(container1d);

// Create Rectangle 7
const rectangle7 = document.createElement("div");
rectangle7.style.boxSizing = "border-box";
rectangle7.style.position = "absolute";
rectangle7.style.width = "330px";
rectangle7.style.height = "54px";
rectangle7.style.left = "15px";
rectangle7.style.top = "131px";
rectangle7.style.background = "rgba(196, 196, 196, 0.3)";
rectangle7.style.border = "1px solid #F2F2F2";
container1d.appendChild(rectangle7);

// Create Rectangle 12
const rectangle12 = document.createElement("div");
rectangle12.style.boxSizing = "border-box";
rectangle12.style.position = "absolute";
rectangle12.style.width = "330px";
rectangle12.style.height = "54px";
rectangle12.style.left = "15px";
rectangle12.style.top = "218px";
rectangle12.style.background = "rgba(196, 196, 196, 0.3)";
rectangle12.style.border = "1px solid #F2F2F2";
container1d.appendChild(rectangle12);

// Create Email
const email = document.createElement("div");
email.style.position = "absolute";
email.style.width = "45px";
email.style.height = "21px";
email.style.left = "35px";
email.style.top = "147px";
email.style.fontFamily = "Roboto";
email.style.fontStyle = "normal";
email.style.fontWeight = 400;
email.style.fontSize = "18px";
email.style.lineHeight = "21px";
email.style.textAlign = "center";
email.style.color = "#000000";
email.textContent = "Email";
container1d.appendChild(email);

// Create btnLogin
const btnLogin = document.createElement("div");
btnLogin.style.position = "absolute";
btnLogin.style.width = "330px";
btnLogin.style.height = "45px";
btnLogin.style.left = "15px";
btnLogin.style.top = "334px";
btnLogin.style.background = "#E53935";
btnLogin.style.borderRadius = "2px";
container1d.appendChild(btnLogin);

// Create Password
const password = document.createElement("div");
password.style.position = "absolute";
password.style.width = "80px";
password.style.height = "21px";
password.style.left = "32px";
password.style.top = "234px";
password.style.fontFamily = "Roboto";
password.style.fontStyle = "normal";
password.style.fontWeight = 400;
password.style.fontSize = "18px";
password.style.lineHeight = "21px";
password.style.textAlign = "center";
password.style.color = "#000000";
password.textContent = "Password";
container1d.appendChild(password);

// Create LOGIN
const loginText = document.createElement("div");
loginText.style.position = "absolute";
loginText.style.width = "73px";
loginText.style.height = "29px";
loginText.style.left = "145px";
loginText.style.top = "40px";
loginText.style.fontFamily = "Roboto";
loginText.style.fontStyle = "normal";
loginText.style.fontWeight = 700;
loginText.style.fontSize = "25px";
loginText.style.lineHeight = "29px";
loginText.style.textAlign = "center";
loginText.style.color = "#000000";
loginText.textContent = "LOGIN";
container1d.appendChild(loginText);

// Create Group 1
const group1 = document.createElement("div");
group1.style.position = "absolute";
group1.style.width = "328px";
group1.style.height = "45px";
group1.style.left = "19px";
group1.style.top = "524px";
container1d.appendChild(group1);

// Create Rectangle 9
const rectangle9 = document.createElement("div");
rectangle9.style.position = "absolute";
rectangle9.style.width = "110px";
rectangle9.style.height = "45px";
rectangle9.style.left = "19px";
rectangle9.style.top = "524px";
rectangle9.style.background = "#25479B";
rectangle9.style.borderRadius = "2px";
group1.appendChild(rectangle9);

// Create Rectangle 10
const rectangle10 = document.createElement("div");
rectangle10.style.position = "absolute";
rectangle10.style.width = "110px";
rectangle10.style.height = "45px";
rectangle10.style.left = "127px";
rectangle10.style.top = "524px";
rectangle10.style.background = "#0F8EE0";
rectangle10.style.borderRadius = "2px";
group1.appendChild(rectangle10);

// Create Rectangle 11
const rectangle11 = document.createElement("div");
rectangle11.style.boxSizing = "border-box";
rectangle11.style.position = "absolute";
rectangle11.style.width = "110px";
rectangle11.style.height = "45px";
rectangle11.style.left = "237px";
rectangle11.style.top = "524px";
rectangle11.style.background = "#FFFFFF";
rectangle11.style.border = "1px solid #0680F1";
rectangle11.style.borderRadius = "2px";
group1.appendChild(rectangle11);

// Create LOGIN
const loginText2 = document.createElement("div");
loginText2.style.position = "absolute";
loginText2.style.width = "58px";
loginText2.style.height = "23px";
loginText2.style.left = "151px";
loginText2.style.top = "345px";
loginText2.style.fontFamily = "Roboto";
loginText2.style.fontStyle = "normal";
loginText2.style.fontWeight = 700;
loginText2.style.fontSize = "20px";
loginText2.style.lineHeight = "23px";
loginText2.style.textAlign = "center";
loginText2.style.color = "#FFFFFF";
loginText2.textContent = "LOGIN";
btnLogin.appendChild(loginText2);

// Create icofacebook-1924510 1
const icofacebook = document.createElement("div");
icofacebook.style.position = "absolute";
icofacebook.style.width = "30px";
icofacebook.style.height = "30px";
icofacebook.style.left = "50px";
icofacebook.style.top = "528px";
group1.appendChild(icofacebook);

// Create Vector
const vector1 = document.createElement("div");
vector1.style.position = "absolute";
vector1.style.left = "0%";
vector1.style.right = "0%";
vector1.style.top = "0%";
vector1.style.bottom = "0%";
group1.appendChild(vector1);

// Create other elements similarly...
// Please adjust the styling and structure as needed
