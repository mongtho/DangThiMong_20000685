// Create the 'container' element
const container = document.getElementById('container');
container.style.position = 'relative';
container.style.width = '360px';
container.style.height = '640px';
container.style.background = '#FFFFFF';

// Create 'frame1' inside 'container'
const frame1 = document.createElement('div');
frame1.style.position = 'absolute';
frame1.style.width = '360px';
frame1.style.height = '640px';
frame1.style.left = '0px';
frame1.style.top = '0px';
frame1.style.background = 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)';
container.appendChild(frame1);

// Create 'FORGET PASSWORD' text inside 'container'
const forgetPassword = document.createElement('div');
forgetPassword.style.position = 'absolute';
forgetPassword.style.width = '133px';
forgetPassword.style.height = '58px';
forgetPassword.style.left = '113px';
forgetPassword.style.top = '230px';
forgetPassword.style.fontFamily = 'Roboto';
forgetPassword.style.fontStyle = 'normal';
forgetPassword.style.fontWeight = '700';
forgetPassword.style.fontSize = '25px';
forgetPassword.style.lineHeight = '29px';
forgetPassword.style.textAlign = 'center';
forgetPassword.style.color = '#000000';
forgetPassword.innerText = 'FORGET PASSWORD';
frame1.appendChild(forgetPassword);

// Create 'Provide your account’s email for which you want to reset your password' text inside 'container'
const provideEmail = document.createElement('div');
provideEmail.style.position = 'absolute';
provideEmail.style.width = '302px';
provideEmail.style.height = '53px';
provideEmail.style.left = '30px';
provideEmail.style.top = '320px';
provideEmail.style.fontFamily = 'Roboto';
provideEmail.style.fontStyle = 'normal';
provideEmail.style.fontWeight = '700';
provideEmail.style.fontSize = '15px';
provideEmail.style.lineHeight = '18px';
provideEmail.style.textAlign = 'center';
provideEmail.style.color = '#000000';
provideEmail.innerText = 'Provide your account’s email for which you want to reset your password';
frame1.appendChild(provideEmail);

// Create 'login' button inside 'container'
const login = document.createElement('div');
login.style.position = 'absolute';
login.style.width = '305px';
login.style.height = '45px';
login.style.left = '30px';
login.style.top = '471px';
login.style.background = '#E3C000';
frame1.appendChild(login);

// Create 'NEXT' text inside 'login' button
const nextText = document.createElement('div');
nextText.style.position = 'absolute';
nextText.style.width = '46px';
nextText.style.height = '21px';
nextText.style.left = '160px';
nextText.style.top = '483px';
nextText.style.fontFamily = 'Roboto';
nextText.style.fontStyle = 'normal';
nextText.style.fontWeight = '700';
nextText.style.fontSize = '18px';
nextText.style.lineHeight = '21px';
nextText.style.textAlign = 'center';
nextText.style.color = '#000000';
nextText.innerText = 'NEXT';
login.appendChild(nextText);

// Create 'lock-152879 1' inside 'container'
const lockIcon = document.createElement('div');
lockIcon.style.position = 'absolute';
lockIcon.style.width = '105px';
lockIcon.style.height = '117px';
lockIcon.style.left = '128px';
lockIcon.style.top = '76px';
frame1.appendChild(lockIcon);

// Create 'Group' inside 'lock-152879 1'
const group = document.createElement('div');
group.style.position = 'absolute';
group.style.left = '0.01%';
group.style.right = '0.05%';
group.style.top = '0.03%';
group.style.bottom = '0.01%';
lockIcon.appendChild(group);

// Create 'Vector' inside 'lock-152879 1'
const vector = document.createElement('div');
vector.style.position = 'absolute';
vector.style.left = '0.01%';
vector.style.right = '0.05%';
vector.style.top = '0.03%';
vector.style.bottom = '0.01%';
vector.style.background = '#FFFFFF';
vector.style.opacity = '0.98';
lockIcon.appendChild(vector);

// Create 'Vector' inside 'lock-152879 1'
const vector2 = document.createElement('div');
vector2.style.position = 'absolute';
vector2.style.left = '2.82%';
vector2.style.right = '2.83%';
vector2.style.top = '1.96%';
vector2.style.bottom = '2%';
vector2.style.background = '#000000';
vector2.style.opacity = '0.98';
lockIcon.appendChild(vector2);

// Create 'Rectangle 6' inside 'container'
const rectangle6 = document.createElement('div');
rectangle6.style.position = 'absolute';
rectangle6.style.width = '305px';
rectangle6.style.height = '45px';
rectangle6.style.left = '30px';
rectangle6.style.top = '383px';
rectangle6.style.background = '#C4C4C4';
frame1.appendChild(rectangle6);

// Create 'Email' text inside 'Rectangle 6'
const emailText = document.createElement('div');
emailText.style.position = 'absolute';
emailText.style.width = '38px';
emailText.style.height = '18px';
emailText.style.left = '78px';
emailText.style.top = '396px';
emailText.style.fontFamily = 'Roboto';
emailText.style.fontStyle = 'normal';
emailText.style.fontWeight = '400';
emailText.style.fontSize = '15px';
emailText.style.lineHeight = '18px';
emailText.style.textAlign = 'center';
emailText.style.color = '#000000';
emailText.innerText = 'Email';
rectangle6.appendChild(emailText);

// Create 'mail-2935365 1' inside 'container'
const mailIcon = document.createElement('div');
mailIcon.style.position = 'absolute';
mailIcon.style.width = '48px';
mailIcon.style.height = '45px';
mailIcon.style.left = '30px';
mailIcon.style.top = '383px';
frame1.appendChild(mailIcon);

// Create 'Layer x0020 1' inside 'mail-2935365 1'
const layer = document.createElement('div');
layer.style.position = 'absolute';
layer.style.left = '0%';
layer.style.right = '0%';
layer.style.top = '0%';
layer.style.bottom = '0%';
mailIcon.appendChild(layer);

// Create '2744492898368' inside 'Layer x0020 1'
const numberText = document.createElement('div');
numberText.style.position = 'absolute';
numberText.style.left = '0%';
numberText.style.right = '0%';
numberText.style.top = '0%';
numberText.style.bottom = '0%';
layer.appendChild(numberText);

// Create 'Vector' inside 'Layer x0020 1'
const vector3 = document.createElement('div');
vector3.style.position = 'absolute';
vector3.style.left = '0%';
vector3.style.right = '0%';
vector3.style.top = '0%';
vector3.style.bottom = '0%';
vector3.style.background = '#C4C4C4';
layer.appendChild(vector3);

// Create 'Vector' inside 'Layer x0020 1'
const vector4 = document.createElement('div');
vector4.style.position = 'absolute';
vector4.style.left = '26.85%';
vector4.style.right = '26.85%';
vector4.style.top = '32.59%';
vector4.style.bottom = '32.59%';
vector4.style.background = '#011627';
layer.appendChild(vector4);

// Create 'Vector' inside 'Layer x0020 1'
const vector5 = document.createElement('div');
vector5.style.position = 'absolute';
vector5.style.left = '26.85%';
vector5.style.right = '49.07%';
vector5.style.top = '32.59%';
vector5.style.bottom = '43.35%';
vector5.style.background = '#011627';
layer.appendChild(vector5);

// Create 'Vector' inside 'Layer x0020 1'
const vector6 = document.createElement('div');
vector6.style.position = 'absolute';
vector6.style.left = '49.07%';
vector6.style.right = '26.85%';
vector6.style.top = '32.59%';
vector6.style.bottom = '43.35%';
vector6.style.background = '#011627';
layer.appendChild(vector6);
