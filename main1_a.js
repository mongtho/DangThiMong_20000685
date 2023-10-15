// Create the 'container' element
const container = document.getElementById('container');
container.style.display = 'flex';
container.style.flexDirection = 'row';
container.style.alignItems = 'center';
container.style.padding = '0px';
container.style.gap = '10px';
container.style.position = 'relative';
container.style.width = '360px';
container.style.height = '640px';
container.style.background = 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)';

// Create 'frame1' inside 'container'
const frame1 = document.createElement('div');
frame1.style.width = '360px';
frame1.style.height = '640px';
container.appendChild(frame1);

// Create 'ellipse1' inside 'container'
const ellipse1 = document.createElement('div');
ellipse1.style.boxSizing = 'border-box';
ellipse1.style.position = 'absolute';
ellipse1.style.width = '142px';
ellipse1.style.height = '142px';
ellipse1.style.left = '109px';
ellipse1.style.top = '69px';
ellipse1.style.border = '15px solid #000000';
frame1.appendChild(ellipse1);

// Create 'GROW YOUR BUSINESS' text inside 'container'
const growYourBusiness = document.createElement('div');
growYourBusiness.style.position = 'absolute';
growYourBusiness.style.width = '189px';
growYourBusiness.style.height = '58px';
growYourBusiness.style.left = '85px';
growYourBusiness.style.top = '277px';
growYourBusiness.style.fontFamily = 'Roboto';
growYourBusiness.style.fontStyle = 'normal';
growYourBusiness.style.fontWeight = '700';
growYourBusiness.style.fontSize = '25px';
growYourBusiness.style.lineHeight = '29px';
growYourBusiness.style.textAlign = 'center';
growYourBusiness.style.color = '#000000';
growYourBusiness.innerText = 'GROW YOUR BUSINESS';
frame1.appendChild(growYourBusiness);

// Create 'We will help you to grow your business using online server' text inside 'container'
const weWillHelp = document.createElement('div');
weWillHelp.style.position = 'absolute';
weWillHelp.style.width = '302px';
weWillHelp.style.height = '36px';
weWillHelp.style.left = '29px';
weWillHelp.style.top = '385px';
weWillHelp.style.fontFamily = 'Roboto';
weWillHelp.style.fontStyle = 'normal';
weWillHelp.style.fontWeight = '700';
weWillHelp.style.fontSize = '15px';
weWillHelp.style.lineHeight = '18px';
weWillHelp.style.textAlign = 'center';
weWillHelp.style.color = '#000000';
weWillHelp.innerText = 'We will help you to grow your business using online server';
frame1.appendChild(weWillHelp);

// Create 'login' button inside 'container'
const login = document.createElement('div');
login.style.position = 'absolute';
login.style.width = '125px';
login.style.height = '45px';
login.style.left = '30px';
login.style.top = '471px';
login.style.background = '#E3C000';
frame1.appendChild(login);

// Create 'signup' button inside 'container'
const signup = document.createElement('div');
signup.style.position = 'absolute';
signup.style.width = '125px';
signup.style.height = '45px';
signup.style.left = '209px';
signup.style.top = '471px';
signup.style.background = '#E3C000';
frame1.appendChild(signup);

// Create 'LOGIN' text inside 'login' button
const loginText = document.createElement('div');
loginText.style.position = 'absolute';
loginText.style.width = '52px';
loginText.style.height = '21px';
loginText.style.left = '36px';
loginText.style.top = '12px';
loginText.style.fontFamily = 'Roboto';
loginText.style.fontStyle = 'normal';
loginText.style.fontWeight = '700';
loginText.style.fontSize = '18px';
loginText.style.lineHeight = '21px';
loginText.style.textAlign = 'center';
loginText.style.color = '#000000';
loginText.innerText = 'LOGIN';
login.appendChild(loginText);

// Create 'SIGN UP' text inside 'signup' button
const signupText = document.createElement('div');
signupText.style.position = 'absolute';
signupText.style.width = '70px';
signupText.style.height = '21px';
signupText.style.left = '20px';
signupText.style.top = '12px';
signupText.style.fontFamily = 'Roboto';
signupText.style.fontStyle = 'normal';
signupText.style.fontWeight = '700';
signupText.style.fontSize = '18px';
signupText.style.lineHeight = '21px';
signupText.style.textAlign = 'center';
signupText.style.color = '#000000';
signupText.innerText = 'SIGN UP';
signup.appendChild(signupText);

// Create 'HOW WE WORK?' text inside 'container'
const howWeWork = document.createElement('div');
howWeWork.style.position = 'absolute';
howWeWork.style.width = '302px';
howWeWork.style.height = '53px';
howWeWork.style.left = '29px';
howWeWork.style.top = '537px';
howWeWork.style.fontFamily = 'Roboto';
howWeWork.style.fontStyle = 'normal';
howWeWork.style.fontWeight = '700';
howWeWork.style.fontSize = '18px';
howWeWork.style.lineHeight = '21px';
howWeWork.style.textAlign = 'center';
howWeWork.style.color = '#000000';
howWeWork.innerText = 'HOW WE WORK?';
frame1.appendChild(howWeWork);



