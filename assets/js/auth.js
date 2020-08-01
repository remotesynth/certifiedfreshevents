import GoTrue from 'gotrue-js';

function relocate() {
  if (document.referrer && ((document.referrer.includes('cfe.dev') || document.referrer.includes('localhost:8888')) && !(document.referrer.includes('login')))) {
      // send you back
      window.location.assign(document.referrer);
  }
  else {
      // send you home
      window.location.assign('/');
  }
}

const auth = new GoTrue({
  APIUrl: 'https://cfe.dev/.netlify/identity',
  audience: '',
  setCookie: true,
});

// handle registration form
const registerForm = document.getElementById("registerForm");
if (registerForm)
  registerForm.addEventListener('submit',(e) =>{
    e.preventDefault();

    let form = e.target;
    let name = form.elements['join-name'].value;
    let email = form.elements['join-email'].value;
    let password = form.elements['join-password'].value;

    auth
        .signup(email, password,{ full_name: name})
        .then((response) => {
            window.location.assign('/signup/confirm/');
        })
        .catch(error => {
          const errorMessage = document.getElementById("errorMessage");
          if (errorMessage)
            errorMessage.innerHTML = error.json.msg;
          else {
            console.log("Failed to login user: %o", error);
            throw error;
          }
        });
  });

// handle login form
const loginForm = document.getElementById("loginForm");
if (loginForm)
  loginForm.addEventListener('submit',(e) =>{
    e.preventDefault();

    let form = e.target;
    let email = form.elements['join-email'].value;
    let password = form.elements['join-password'].value;

    auth
        .login(email, password, true)
        .then(response => {
            relocate();
        })
        .catch(error => {
          const errorMessage = document.getElementById("errorMessage");
          if (errorMessage)
            errorMessage.innerHTML = error.json.error_description;
          else {
            console.log("Failed to login user: %o", error);
            throw error;
          }
        });
    });

// handle recovery form
const recoverForm = document.getElementById("recoverForm");
if (recoverForm)
  recoverForm.addEventListener('submit',(e) =>{
    e.preventDefault();

    let form = e.target;
    let email = form.elements['recover-email'].value;

    auth
        .requestPasswordRecovery(email)
        .then(response => {
          window.location.assign('/signup/recover/');
        })
        .catch(error => {
          const errorMessage = document.getElementById("errorMessage");
          if (errorMessage)
            errorMessage.innerHTML = error.json.msg;
          else {
            console.log("Failed to login user: %o", error);
            throw error;
          }
        });
    });

function handleSignupConfirm(token) {
  auth
      .confirm(token, true)
      .then(function(response) {
          window.location.assign('/signup/confirm-success/');
      })
      .catch(function(e) {
          window.location.assign('/signup/confirm-fail/');
  });
}

function handleRecovery(token) {
  auth
  .recover(token)
  .then(response =>
    console.log("Logged in as %s", JSON.stringify({ response }))
  )
  .catch(error => {
    window.location.assign('/signup/recover-fail/');
  });
}

// check for a confirmation hash
const hash = (document.location.hash || "").replace(/^#\/?/, "");
if (hash) {
    const [key, value] = hash.split("=");
    console.log(hash)
    if (key === 'confirmation_token')
      handleSignupConfirm(value);
    else if (key === 'recovery_token')
      handleRecovery(value);
}

const user = auth.currentUser();
if (user)  {
    // get the login button
    const loginBtn = document.querySelector('a[href="/login/"]');
    const registerBtn = document.querySelector('a[href="/join/"]');

    loginBtn.href = window.location.href + '?logout';
    loginBtn.innerHTML = 'Log Out';
    registerBtn.classList.add('hidden');
}

const params = new URLSearchParams(window.location.search);
if (params.has('logout') && user) {
    user
        .logout()
        .then(relocate())
        .catch(error => {
            console.log("Failed to logout user: %o", error);
            throw error;
        });
}
