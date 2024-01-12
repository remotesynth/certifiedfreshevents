import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_SECRET_KEY,
});

export default async (req, context) => {
  let response = {};
  try {
    const body = await req.json();
    const { email, listName, firstName, lastName } = body;

    let listID;
    if (listName === "cfe-newsletter") {
      listID = process.env.MAILJET_PRIMARY_LIST;
    } else if (listName === "jamstacked") {
      listID = process.env.MAILJET_JAMSTACKED_LIST;
    }
    if (!email || !listID) {
      response.errorMsg = "email and list query parameters are required";
      return new Response(JSON.stringify(response), {
        status: 500,
      });
    }
    // check to see if the contact exists
    let contactID = await getContactID(email);
    if (contactID) {
      let newListContact = await addContactToList(contactID, listID);
      if (newListContact) {
        response.msg = "Good news! You've been added.";
      } else {
        response.errorMsg = "Failed to add contact to list.";
      }
    } else {
      contactID = await addContact(email, firstName, lastName, listID);
      if (contactID) {
        let newListContact = await addContactToList(res, listID);
        if (newListContact) {
          response.msg = "Good news! You've been added.";
        } else {
          response.errorMsg = "Failed to add contact to list.";
        }
      } else {
        response.errorMsg = "Failed to add contact to list.";
      }
    }
  } catch (err) {
    console.log(err);
    response.errorMsg = "Failed to add contact to list.";
  }
  return new Response(JSON.stringify(response), {
    headers: { "content-type": "application/json" },
  });
};

async function addContact(email, firstName, lastName, listID) {
  return mailjet
    .post("contact")
    .request({
      Email: email,
      IsExcludedFromCampaigns: false,
      Name: firstName + " " + lastName,
    })
    .then((res) => {
      return res.body.Data[0].ID;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
}

async function addContactToList(contactid, listID) {
  return mailjet
    .post("contact")
    .id(contactid)
    .action("managecontactslists")
    .request({
      ContactsLists: [
        {
          ListID: listID,
          Action: "addnoforce",
        },
      ],
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
}

async function getContactID(email) {
  return mailjet
    .get("contact")
    .id(email)
    .request({})
    .then((res) => {
      return res.body.Data[0].ID;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
}

export const config = {
  path: "/api/mailjet",
};
