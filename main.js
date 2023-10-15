
 // Create the 'firstScreen' container
const firstScreen = document.getElementById('firstScreen');
firstScreen.style.position = 'relative';
firstScreen.style.width = '360px';
firstScreen.style.height = '640px';
firstScreen.style.background = '#FFFFFF';

// Create 'rectangle25' inside 'firstScreen'
const rectangle25 = document.createElement('div');
rectangle25.style.position = 'absolute';
rectangle25.style.width = '360px';
rectangle25.style.height = '640px';
rectangle25.style.left = '0px';
rectangle25.style.top = '0px';
rectangle25.style.background = 'linear-gradient(180deg, #00CCF9 0%, #00CCF9 100%)';
firstScreen.appendChild(rectangle25);

// Create 'ellipse8' inside 'firstScreen'
const ellipse8 = document.createElement('div');
ellipse8.style.boxSizing = 'border-box';
ellipse8.style.position = 'absolute';
ellipse8.style.width = '140px';
ellipse8.style.height = '140px';
ellipse8.style.left = '110px';
ellipse8.style.top = '105px';
ellipse8.style.border = '15px solid #000000';
firstScreen.appendChild(ellipse8);

// Create 'GROW YOUR BUSINESS' text inside 'firstScreen'
const growYourBusiness = document.createElement('div');
growYourBusiness.style.position = 'absolute';
growYourBusiness.style.width = '189px';
growYourBusiness.style.height = '58px';
growYourBusiness.style.left = '86px';
growYourBusiness.style.top = '297px';
growYourBusiness.style.fontFamily = 'Roboto';
growYourBusiness.style.fontStyle = 'normal';
growYourBusiness.style.fontWeight = '700';
growYourBusiness.style.fontSize = '25px';
growYourBusiness.style.lineHeight = '29px';
growYourBusiness.style.textAlign = 'center';
growYourBusiness.style.color = '#000000';
growYourBusiness.innerText = 'GROW YOUR BUSINESS';
firstScreen.appendChild(growYourBusiness);

// Create 'We will help you to grow your business using online server' text inside 'firstScreen'
const weWillHelp = document.createElement('div');
weWillHelp.style.position = 'absolute';
weWillHelp.style.width = '302px';
weWillHelp.style.height = '36px';
weWillHelp.style.left = '29px';
weWillHelp.style.top = '417px';
weWillHelp.style.fontFamily = 'Roboto';
weWillHelp.style.fontStyle = 'normal';
weWillHelp.style.fontWeight = '700';
weWillHelp.style.fontSize = '15px';
weWillHelp.style.lineHeight = '18px';
weWillHelp.style.textAlign = 'center';
weWillHelp.style.color = '#000000';
weWillHelp.innerText = 'We will help you to grow your business using an online server';
firstScreen.appendChild(weWillHelp);

// Create 'group12' container inside 'firstScreen'
const group12 = document.createElement('div');
group12.style.position = 'absolute';
group12.style.width = '119px';
group12.style.height = '48px';
group12.style.left = '29px';
group12.style.top = '498px';
firstScreen.appendChild(group12);

// Create 'rectangle26_login' inside 'group12'
const rectangle26_login = document.createElement('div');
rectangle26_login.style.position = 'absolute';
rectangle26_login.style.width = '119px';
rectangle26_login.style.height = '48px';
rectangle26_login.style.left = '0px';
rectangle26_login.style.top = '0px';
rectangle26_login.style.background = '#E3C000';
rectangle26_login.style.borderRadius = '10px';
rectangle26_login.style.fontFamily = 'Roboto';
rectangle26_login.style.fontStyle = 'normal';
rectangle26_login.style.fontWeight = '700';
rectangle26_login.style.fontSize = '20px';
rectangle26_login.style.lineHeight = '23px';
rectangle26_login.style.textAlign = 'center';
rectangle26_login.style.color = '#000000';
rectangle26_login.innerText = 'LOGIN';
group12.appendChild(rectangle26_login);

// Create 'group13' container inside 'firstScreen'
const group13 = document.createElement('div');
group13.style.position = 'absolute';
group13.style.width = '119px';
group13.style.height = '48px';
group13.style.left = '204px';
group13.style.top = '498px';
firstScreen.appendChild(group13);

// Create 'rectangle26_signup' inside 'group13'
const rectangle26_signup = document.createElement('div');
rectangle26_signup.style.position = 'absolute';
rectangle26_signup.style.width = '119px';
rectangle26_signup.style.height = '48px';
rectangle26_signup.style.left = '0px';
rectangle26_signup.style.top = '0px';
rectangle26_signup.style.background = '#E3C000';
rectangle26_signup.style.borderRadius = '10px';
rectangle26_signup.style.fontFamily = 'Roboto';
rectangle26_signup.style.fontStyle = 'normal';
rectangle26_signup.style.fontWeight = '700';
rectangle26_signup.style.fontSize = '20px';
rectangle26_signup.style.lineHeight = '23px';
rectangle26_signup.style.textAlign = 'center';
rectangle26_signup.style.color = '#000000';
rectangle26_signup.innerText = 'SIGN UP';
group13.appendChild(rectangle26_signup);
