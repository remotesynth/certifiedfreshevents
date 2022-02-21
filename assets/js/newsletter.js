const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let form = e.target;
    let name = form.elements["join-name"].value;
    let email = form.elements["join-email"].value;
    let firstName = "";
    let lastName = "";
    const errorMessage = document.getElementById("errorMessage");

    if (email === "") errorMessage.innerHTML = "Please fill in all fields";

    if (name !== "") {
      const nameArray = name.split(" ");
      if (nameArray.length) firstName = nameArray[0];

      if (nameArray.length > 1) {
        nameArray.shift();
        lastName = nameArray.join(" ");
      }
    }
    axios
      .post("/.netlify/functions/activecampaign", {
        email: email,
        firstName: firstName,
        lastName: lastName,
      })
      .then(function (response) {
        if (response.data.errorMsg && errorMessage)
          errorMessage.innerHTML = response.data.errorMsg;
        else if (response.data.msg && errorMessage)
          errorMessage.innerHTML = response.data.msg;
      })
      .catch(function (error) {
        if (errorMessage) {
          errorMessage.innerHTML =
            "The request failed. Please try again in a moment.";
        } else {
          console.log("Failed to login user: %o", error);
          throw error;
        }
      });
  });
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

/* ActiveCampaign form submit
  -------------------------------------------------------*/
const subscribeForm = document.getElementById("subscribeForm");
if (subscribeForm)
  subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let form = e.target;
    let messageObj = document.getElementById("subscribe_message");
    axios
      .post("/.netlify/functions/activecampaign", {
        email: form.email.value,
      })
      .then(function (response) {
        if (response.data.errorMsg && messageObj) {
          messageObj.innerHTML = response.data.errorMsg;
        } else if (response.data.msg && messageObj) {
          form.subscribe.disabled = true;
          form.email.value = "";
          form.subscribe.innerHTML = "You've been subscribed!";
          messageObj.innerHTML = "";
        } else {
          messageObj.innerHTML =
            "We apologize, there was a problem subscribing.";
        }
      })
      .catch(function (error) {
        messageObj.innerHTML = "We apologize, there was a problem subscribing.";
      });
  });
