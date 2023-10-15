// Create the main container
const mainContainer = document.createElement("div");
mainContainer.style.position = "relative";
mainContainer.style.width = "360px";
mainContainer.style.height = "640px";
mainContainer.style.background = "#FFFFFF";
document.body.appendChild(mainContainer);

// Create the background rectangle
const backgroundRectangle = document.createElement("div");
backgroundRectangle.style.position = "absolute";
backgroundRectangle.style.width = "360px";
backgroundRectangle.style.height = "640px";
backgroundRectangle.style.left = "0px";
backgroundRectangle.style.top = "0px";
backgroundRectangle.style.background = "linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)";
mainContainer.appendChild(backgroundRectangle);

// Create edtPassword input
const edtPassword = document.createElement("div");
edtPassword.style.boxSizing = "border-box";
edtPassword.style.position = "absolute";
edtPassword.style.width = "330px";
edtPassword.style.height = "54px";
edtPassword.style.left = "15px";
edtPassword.style.top = "266px";
edtPassword.style.background = "rgba(196, 196, 196, 0.3)";
edtPassword.style.border = "1px solid #F2F2F2";
mainContainer.appendChild(edtPassword);

// Create txtPassword label
const txtPassword = document.createElement("div");
txtPassword.style.position = "absolute";
txtPassword.style.width = "80px";
txtPassword.style.height = "21px";
txtPassword.style.left = "73px";
txtPassword.style.top = "283px";
txtPassword.style.fontFamily = "Roboto";
txtPassword.style.fontStyle = "normal";
txtPassword.style.fontWeight = 400;
txtPassword.style.fontSize = "18px";
txtPassword.style.lineHeight = "21px";
txtPassword.style.textAlign = "center";
txtPassword.style.color = "#000000";
txtPassword.textContent = "Password";
mainContainer.appendChild(txtPassword);

// Create the eye icon
const eyeIcon = document.createElement("div");
eyeIcon.style.position = "absolute";
eyeIcon.style.width = "32px";
eyeIcon.style.height = "32px";
eyeIcon.style.left = "280px";
eyeIcon.style.top = "275px";
mainContainer.appendChild(eyeIcon);

// Create the lock icon
const lockIcon = document.createElement("div");
lockIcon.style.position = "absolute";
lockIcon.style.width = "32px";
lockIcon.style.height = "32px";
lockIcon.style.left = "24px";
lockIcon.style.top = "275px";
mainContainer.appendChild(lockIcon);

// Create the user avatar
const userAvatar = document.createElement("div");
userAvatar.style.position = "absolute";
userAvatar.style.width = "32px";
userAvatar.style.height = "32px";
userAvatar.style.left = "24px";
userAvatar.style.top = "201px";
mainContainer.appendChild(userAvatar);

// Create the Register button
const btnRegister = document.createElement("div");
btnRegister.style.position = "absolute";
btnRegister.style.width = "330px";
btnRegister.style.height = "45px";
btnRegister.style.left = "15px";
btnRegister.style.top = "379px";
btnRegister.style.background = "#060000";
btnRegister.style.borderRadius = "2px";
mainContainer.appendChild(btnRegister);

// Create the "LOGIN" text
const txtLogin = document.createElement("div");
txtLogin.style.position = "absolute";
txtLogin.style.width = "147px";
txtLogin.style.height = "27px";
txtLogin.style.left = "113px";
txtLogin.style.top = "388px";
txtLogin.style.fontFamily = "Roboto";
txtLogin.style.fontStyle = "normal";
txtLogin.style.fontWeight = 700;
txtLogin.style.fontSize = "20px";
txtLogin.style.lineHeight = "23px";
txtLogin.style.textAlign = "center";
txtLogin.style.color = "#FFFFFF";
txtLogin.textContent = "LOGIN";
mainContainer.appendChild(txtLogin);

// Create the "CREATE ACCOUNT" text
const txtCreateAccount = document.createElement("div");
txtCreateAccount.style.position = "absolute";
txtCreateAccount.style.width = "239px";
txtCreateAccount.style.height = "27px";
txtCreateAccount.style.left = "61px";
txtCreateAccount.style.top = "469px";
txtCreateAccount.style.fontFamily = "Roboto";
txtCreateAccount.style.fontStyle = "normal";
txtCreateAccount.style.fontWeight = 700;
txtCreateAccount.style.fontSize = "20px";
txtCreateAccount.style.lineHeight = "23px";
txtCreateAccount.style.textAlign = "center";
txtCreateAccount.style.color = "#000000";
txtCreateAccount.textContent = "CREATE ACCOUNT";
mainContainer.appendChild(txtCreateAccount);
