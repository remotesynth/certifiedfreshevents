const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let form = e.target;
    const nameEl = form.elements["join-name"];
    let name = "";
    if (nameEl) name = nameEl.value;
    let email = form.elements["join-email"].value;
    let listName = form.elements["listName"].value;
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
      .post("/api/mailjet", {
        email: email,
        firstName: firstName,
        lastName: lastName,
        listName: listName,
      })
      .then(function (response) {
        if (response.data.errorMsg && errorMessage)
          errorMessage.innerHTML = response.data.errorMsg;
        else if (response.data.msg && errorMessage)
          errorMessage.innerHTML = response.data.msg;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        if (errorMessage) {
          errorMessage.innerHTML =
            "The request failed. Please try again in a moment.";
        } else {
          console.log("Failed to add user: %o", error);
          throw error;
        }
      });
  });
}

/* Mailjet form submit
  -------------------------------------------------------*/
const subscribeForm = document.getElementById("subscribeForm");
if (subscribeForm) subscribeForm.addEventListener("submit", subscribeMailjet);
const asideSubscribeForm = document.getElementById("asideSubscribeForm");
if (asideSubscribeForm)
  asideSubscribeForm.addEventListener("submit", subscribeMailjet);

function subscribeMailjet(e) {
  e.preventDefault();

  let form = e.target;
  console.log(e.target.id);
  let selector = `#${e.target.id} #subscribe_message`;
  console.log(selector);
  let messageObj = document.querySelector(selector);
  axios
    .post("/api/mailjet", {
      email: form.email.value,
      listName: form.listName.value,
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
        messageObj.innerHTML = "We apologize, there was a problem subscribing.";
      }
    })
    .catch(function (error) {
      messageObj.innerHTML = "We apologize, there was a problem subscribing.";
    });
}
