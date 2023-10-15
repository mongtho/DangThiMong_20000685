// Create the 1_e container element
const container1e = document.createElement("div");
container1e.style.position = "relative";
container1e.style.width = "360px";
container1e.style.height = "640px";
container1e.style.background = "#FFFFFF";
document.body.appendChild(container1e);

// Create 1_d container element
const container1d = document.createElement("div");
container1d.style.position = "absolute";
container1d.style.width = "360px";
container1d.style.height = "640px";
container1d.style.left = "0px";
container1d.style.top = "0px";
container1d.style.background = "#FFFFFF";
container1e.appendChild(container1d);

// Create edtName
const edtName = document.createElement("div");
edtName.style.boxSizing = "border-box";
edtName.style.position = "absolute";
edtName.style.width = "330px";
edtName.style.height = "54px";
edtName.style.left = "16px";
edtName.style.top = "97px";
edtName.style.background = "rgba(196, 196, 196, 0.3)";
edtName.style.border = "1px solid #F2F2F2";
container1d.appendChild(edtName);

// Create edtEmail
const edtEmail = document.createElement("div");
edtEmail.style.boxSizing = "border-box";
edtEmail.style.position = "absolute";
edtEmail.style.width = "330px";
edtEmail.style.height = "54px";
edtEmail.style.left = "16px";
edtEmail.style.top = "237px";
edtEmail.style.background = "rgba(196, 196, 196, 0.3)";
edtEmail.style.border = "1px solid #F2F2F2";
container1d.appendChild(edtEmail);

// Create edtNgaysinh
const edtNgaysinh = document.createElement("div");
edtNgaysinh.style.boxSizing = "border-box";
edtNgaysinh.style.position = "absolute";
edtNgaysinh.style.width = "330px";
edtNgaysinh.style.height = "54px";
edtNgaysinh.style.left = "17px";
edtNgaysinh.style.top = "377px";
edtNgaysinh.style.background = "rgba(196, 196, 196, 0.3)";
edtNgaysinh.style.border = "1px solid #F2F2F2";
container1d.appendChild(edtNgaysinh);

// Create edtPhone
const edtPhone = document.createElement("div");
edtPhone.style.boxSizing = "border-box";
edtPhone.style.position = "absolute";
edtPhone.style.width = "330px";
edtPhone.style.height = "54px";
edtPhone.style.left = "17px";
edtPhone.style.top = "167px";
edtPhone.style.background = "rgba(196, 196, 196, 0.3)";
edtPhone.style.border = "1px solid #F2F2F2";
container1d.appendChild(edtPhone);

// Create edtPassword
const edtPassword = document.createElement("div");
edtPassword.style.boxSizing = "border-box";
edtPassword.style.position = "absolute";
edtPassword.style.width = "330px";
edtPassword.style.height = "54px";
edtPassword.style.left = "16px";
edtPassword.style.top = "307px";
edtPassword.style.background = "rgba(196, 196, 196, 0.3)";
edtPassword.style.border = "1px solid #F2F2F2";
container1d.appendChild(edtPassword);

// Create txtName
const txtName = document.createElement("div");
txtName.style.position = "absolute";
txtName.style.width = "48px";
txtName.style.height = "21px";
txtName.style.left = "26px";
txtName.style.top = "111px";
txtName.style.fontFamily = "Roboto";
txtName.style.fontStyle = "normal";
txtName.style.fontWeight = 400;
txtName.style.fontSize = "18px";
txtName.style.lineHeight = "21px";
txtName.style.textAlign = "center";
txtName.style.color = "#000000";
txtName.textContent = "Name";
container1d.appendChild(txtName);

// Create txtPhone
const txtPhone = document.createElement("div");
txtPhone.style.position = "absolute";
txtPhone.style.width = "52px";
txtPhone.style.height = "21px";
txtPhone.style.left = "26px";
txtPhone.style.top = "184px";
txtPhone.style.fontFamily = "Roboto";
txtPhone.style.fontStyle = "normal";
txtPhone.style.fontWeight = 400;
txtPhone.style.fontSize = "18px";
txtPhone.style.lineHeight = "21px";
txtPhone.style.textAlign = "center";
txtPhone.style.color = "#000000";
txtPhone.textContent = "Phone";
container1d.appendChild(txtPhone);

// Create txtEmail
const txtEmail = document.createElement("div");
txtEmail.style.position = "absolute";
txtEmail.style.width = "45px";
txtEmail.style.height = "21px";
txtEmail.style.left = "26px";
txtEmail.style.top = "247px";
txtEmail.style.fontFamily = "Roboto";
txtEmail.style.fontStyle = "normal";
txtEmail.style.fontWeight = 400;
txtEmail.style.fontSize = "18px";
txtEmail.style.lineHeight = "21px";
txtEmail.style.textAlign = "center";
txtEmail.style.color = "#000000";
txtEmail.textContent = "Email";
container1d.appendChild(txtEmail);

// Create txtBirthday
const txtBirthday = document.createElement("div");
txtBirthday.style.position = "absolute";
txtBirthday.style.width = "67px";
txtBirthday.style.height = "21px";
txtBirthday.style.left = "26px";
txtBirthday.style.top = "391px";
txtBirthday.style.fontFamily = "Roboto";
txtBirthday.style.fontStyle = "normal";
txtBirthday.style.fontWeight = 400;
txtBirthday.style.fontSize = "18px";
txtBirthday.style.lineHeight = "21px";
txtBirthday.style.textAlign = "center";
txtBirthday.style.color = "#000000";
txtBirthday.textContent = "Birthday";
container1d.appendChild(txtBirthday);

// Create btnRegister
const btnRegister = document.createElement("div");
btnRegister.style.position = "absolute";
btnRegister.style.width = "330px";
btnRegister.style.height = "45px";
btnRegister.style.left = "15px";
btnRegister.style.top = "502px";
btnRegister.style.background = "#E53935";
btnRegister.style.borderRadius = "2px";
container1d.appendChild(btnRegister);

// Create txtPassword
const txtPassword = document.createElement("div");
txtPassword.style.position = "absolute";
txtPassword.style.width = "80px";
txtPassword.style.height = "21px";
txtPassword.style.left = "26px";
txtPassword.style.top = "320px";
txtPassword.style.fontFamily = "Roboto";
txtPassword.style.fontStyle = "normal";
txtPassword.style.fontWeight = 400;
txtPassword.style.fontSize = "18px";
txtPassword.style.lineHeight = "21px";
txtPassword.style.textAlign = "center";
txtPassword.style.color = "#000000";
txtPassword.textContent = "Password";
container1d.appendChild(txtPassword);

// Create txtMale
const txtMale = document.createElement("div");
txtMale.style.position = "absolute";
txtMale.style.width = "40px";
txtMale.style.height = "21px";
txtMale.style.left = "73px";
txtMale.style.top = "455px";
txtMale.style.fontFamily = "Roboto";
txtMale.style.fontStyle = "normal";
txtMale.style.fontWeight = 400;
txtMale.style.fontSize = "18px";
txtMale.style.lineHeight = "21px";
txtMale.style.textAlign = "center";
txtMale.style.color = "#000000";
txtMale.textContent = "Male";
container1d.appendChild(txtMale);

// Create txtFemale
const txtFemale = document.createElement("div");
txtFemale.style.position = "absolute";
txtFemale.style.width = "59px";
txtFemale.style.height = "21px";
txtFemale.style.left = "182px";
txtFemale.style.top = "455px";
txtFemale.style.fontFamily = "Roboto";
txtFemale.style.fontStyle = "normal";
txtFemale.style.fontWeight = 400;
txtFemale.style.fontSize = "18px";
txtFemale.style.lineHeight = "21px";
txtFemale.style.textAlign = "center";
txtFemale.style.color = "#000000";
txtFemale.textContent = "Female";
container1d.appendChild(txtFemale);

// Create txtRegister (Login button)
const txtRegister = document.createElement("div");
txtRegister.style.position = "absolute";
txtRegister.style.width = "116px";
txtRegister.style.height = "29px";
txtRegister.style.left = "123px";
txtRegister.style.top = "40px";
txtRegister.style.fontFamily = "Roboto";
txtRegister.style.fontStyle = "normal";
txtRegister.style.fontWeight = 700;
txtRegister.style.fontSize = "25px";
txtRegister.style.lineHeight = "29px";
txtRegister.style.textAlign = "center";
txtRegister.style.color = "#000000";
txtRegister.textContent = "Register";
container1d.appendChild(txtRegister);

// Create txtLogin (Register button)
const txtLogin = document.createElement("div");
txtLogin.style.position = "absolute";
txtLogin.style.width = "93px";
txtLogin.style.height = "23px";
txtLogin.style.left = "133px";
txtLogin.style.top = "513px";
txtLogin.style.fontFamily = "Roboto";
txtLogin.style.fontStyle = "normal";
txtLogin.style.fontWeight = 700;
txtLogin.style.fontSize = "20px";
txtLogin.style.lineHeight = "23px";
txtLogin.style.textAlign = "center";
txtLogin.style.color = "#FFFFFF";
txtLogin.textContent = "Login";
container1d.appendChild(txtLogin);

// Create eye icon
const eyeIcon = document.createElement("div");
eyeIcon.style.position = "absolute";
eyeIcon.style.width = "38px";
eyeIcon.style.height = "36px";
eyeIcon.style.left = "285px";
eyeIcon.style.top = "314px";
container1d.appendChild(eyeIcon);

// Create rdbMale (Radio button for Male)
const rdbMale = document.createElement("div");
rdbMale.style.boxSizing = "border-box";
rdbMale.style.position = "absolute";
rdbMale.style.width = "23px";
rdbMale.style.height = "23px";
rdbMale.style.left = "36px";
rdbMale.style.top = "453px";
rdbMale.style.border = "2px solid #000000";
container1d.appendChild(rdbMale);

// Create rdbFemale (Radio button for Female)
const rdbFemale = document.createElement("div");
rdbFemale.style.boxSizing = "border-box";
rdbFemale.style.position = "absolute";
rdbFemale.style.width = "23px";
rdbFemale.style.height = "23px";
rdbFemale.style.left = "143px";
rdbFemale.style.top = "454px";
rdbFemale.style.border = "2px solid #000000";
container1d.appendChild(rdbFemale);

// Create "When you agree to terms and conditions" text
const termsText = document.createElement("div");
termsText.style.position = "absolute";
termsText.style.width = "260px";
termsText.style.height = "20px";
termsText.style.left = "50px";
termsText.style.top = "561px";
termsText.style.fontFamily = "Roboto";
termsText.style.fontStyle = "normal";
termsText.style.fontWeight = 400;
termsText.style.fontSize = "14px";
termsText.style.lineHeight = "16px";
termsText.style.textAlign = "center";
termsText.style.color = "#000000";
termsText.textContent = "When you agree to terms and conditions";
container1d.appendChild(termsText);

