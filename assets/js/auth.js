import GoTrue from "gotrue-js";

function relocate() {
  if (
    document.referrer &&
    (document.referrer.includes("cfe.dev") ||
      document.referrer.includes("localhost:8888")) &&
    !document.referrer.includes("login")
  ) {
    // send you back
    window.location.assign(document.referrer);
  } else {
    // send you home
    window.location.assign("/");
  }
}

function crowdcastSignup(email, eventcode) {
  axios
    .post("/.netlify/functions/zapier", {
      email: email,
      eventcode: eventcode,
    })
    .then(function (response) {
      if (response.data.status != "success") {
        console.log(
          "There was a problem automatically registering you. Please register via Crowdcast"
        );
      }
    })
    .catch(function (error) {
      console.log(
        "There was a problem automatically registering you. Please register via Crowdcast"
      );
    });
}

const auth = new GoTrue({
  APIUrl: "https://cfe.dev/.netlify/identity",
  audience: "",
  setCookie: true,
});

// handle registration form
const registerForm = document.getElementById("registerForm");
if (registerForm)
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let form = e.target;
    let name = form.elements["join-name"].value;
    let email = form.elements["join-email"].value;
    let password = form.elements["join-password"].value;

    auth
      .signup(email, password, { full_name: name })
      .then((response) => {
        // see if they came from an event page and auto register them
        let params = new URLSearchParams(window.location.search);
        if (params.has("eventcode"))
          crowdcastSignup(email, params.get("eventcode"));
        window.location.assign("/signup/confirm/");
      })
      .catch((error) => {
        const errorMessage = document.getElementById("errorMessage");
        if (errorMessage) errorMessage.innerHTML = error.json.msg;
        else {
          console.log("Failed to login user: %o", error);
          throw error;
        }
      });
  });

// handle login form
const loginForm = document.getElementById("loginForm");
if (loginForm)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let form = e.target;
    let email = form.elements["join-email"].value;
    let password = form.elements["join-password"].value;

    auth
      .login(email, password, true)
      .then((response) => {
        // see if they came from an event page and auto register them
        let params = new URLSearchParams(window.location.search);
        if (params.has("eventcode"))
          crowdcastSignup(email, params.get("eventcode"));
        relocate();
      })
      .catch((error) => {
        const errorMessage = document.getElementById("errorMessage");
        if (errorMessage && error.json)
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
  recoverForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let form = e.target;
    let email = form.elements["recover-email"].value;

    auth
      .requestPasswordRecovery(email)
      .then((response) => {
        window.location.assign("/signup/recover/");
      })
      .catch((error) => {
        const errorMessage = document.getElementById("errorMessage");
        if (errorMessage) errorMessage.innerHTML = error.json.msg;
        else {
          console.log("Failed to login user: %o", error);
          throw error;
        }
      });
  });

function handleSignupConfirm(token) {
  auth
    .confirm(token, true)
    .then(function (response) {
      window.location.assign("/signup/confirm-success/");
      axios
        .post("/.netlify/functions/activecampaign", {
          email: response.email,
        })
        .then(function (response) {
          // we don't need to do anything
        })
        .catch(function (error) {
          // it's okay, just ignore it
        });
    })
    .catch(function (e) {
      window.location.assign("/signup/confirm-fail/");
    });
}

function handleRecovery(token) {
  auth
    .recover(token, true)
    .then((response) => {
      window.location.assign("/signup/manage/");
    })
    .catch((error) => {
      window.location.assign("/signup/recover-fail/");
    });
}

// check for a confirmation hash
const hash = (document.location.hash || "").replace(/^#\/?/, "");
if (hash) {
  const [key, value] = hash.split("=");
  if (key === "confirmation_token") handleSignupConfirm(value);
  else if (key === "recovery_token") handleRecovery(value);
}

const user = auth.currentUser();
if (user) {
  // get the login button
  const loginBtn = document.querySelector('a[href*="/login/"]');
  const registerBtn = document.querySelector('a[href*="/join/"]');
  const manageBtn = document.querySelector('a[href="/signup/manage/"]');
  // event and session pages
  const crowdcastEmbed = document.getElementById("crowdcast-embed");
  const vimeoEmbed = document.getElementById("vimeo-embed");
  const crowdcastOpen = document.getElementById("crowdcast-open");
  const bannerImage = document.getElementById("banner-image");
  const bannerSignup = document.getElementById("banner-signup");

  loginBtn.href = window.location.href + "?logout";
  loginBtn.innerHTML = "Log Out";
  registerBtn.classList.add("hidden");
  manageBtn.classList.remove("hidden");

  // only hide the image if one of the embeds exists
  let hideBanner = false;
  // event and session pages
  if (crowdcastEmbed) {
    let iframe = document.createElement("iframe");
    iframe.classList.add("absolute");
    iframe.classList.add("z-0");
    iframe.classList.add("w-full");
    iframe.classList.add("h-full");
    iframe.src = crowdcastEmbed.getAttribute("data-embed-url");

    crowdcastEmbed.parentElement.classList.add("embed-responsive");
    crowdcastEmbed.appendChild(iframe);

    hideBanner = true;
  } else if (vimeoEmbed) {
    let iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", 0);
    iframe.setAttribute("allowFullScreen", "true");
    iframe.src = vimeoEmbed.getAttribute("data-embed-url");

    vimeoEmbed.classList.add("block");
    vimeoEmbed.classList.add("mx-auto");
    vimeoEmbed.classList.add("bg-black");
    vimeoEmbed.classList.add("embed-responsive");

    vimeoEmbed.appendChild(iframe);

    hideBanner = true;
  } else if (crowdcastOpen) {
    crowdcastOpen.classList.remove("hidden");

    hideBanner = true;
  }

  if (bannerImage && hideBanner) bannerImage.classList.add("hidden");
  if (bannerSignup && hideBanner) bannerSignup.classList.add("hidden");
}

const params = new URLSearchParams(window.location.search);
if (params.has("logout") && user) {
  user
    .logout()
    .then(relocate())
    .catch((error) => {
      console.log("Failed to logout user: %o", error);
      throw error;
    });
}

// handle account management form
const manageForm = document.getElementById("manageForm");
if (manageForm) {
  if (user) {
    manageForm["manage-name"].value = user.user_metadata.full_name;
    document.getElementById("manage-email").innerHTML += user.email;
  } else {
    const errorMessage = document.getElementById("errorMessage");
    if (errorMessage) {
      errorMessage.innerHTML =
        'You must be logged in to manage your account. <a href="/login/" class="font-bold link">Log in.</a>';
      manageForm["manage-name"].disabled = true;
      manageForm["manage-email"].disabled = true;
      manageForm["manage-submit"].disabled = true;
    } else {
      console.log("Failed to update user");
      throw error;
    }
  }
  manageForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let form = e.target;
    let update = {};
    update.email = user.email;
    update.data = {
      full_name: form.elements["manage-name"].value,
    };
    if (form.elements["manage-password"].value !== "")
      update.password = form.elements["manage-password"].value;

    const errorMessage = document.getElementById("errorMessage");
    user
      .update(update, { full_name: form.elements["manage-name"].value })
      .then((user) => {
        errorMessage.innerHTML = "Your account has been updated.";
      })
      .catch((error) => {
        if (errorMessage) errorMessage.innerHTML = error.json.msg;
        else {
          console.log("Failed to update user: %o", error);
          throw error;
        }
      });
  });
}
