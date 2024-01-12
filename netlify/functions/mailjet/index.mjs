import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_SECRET_KEY,
});

export default async (req, context) => {
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
      return new Response("email and list query parameters are required", {
        status: 500,
      });
    }

    return mailjet
      .post("contact")
      .request({
        Email: email,
        IsExcludedFromCampaigns: false,
        Name: firstName + " " + lastName,
      })
      .then(async (res) => {
        addContactToList(res.body.Data[0].ID, listID)
          .then((res) => {
            const response = { msg: "Good news! You've been added." };
            return new Response(JSON.stringify(response), {
              status: 200,
            });
          })
          .catch((err) => {
            return new Response(err.toString(), { status: 500 });
          });
      })
      .catch(async (err) => {
        // try adding them to the list since maybe they are already a contact
        let contactID = await getContactID(email);
        addContactToList(contactID, listID)
          .then((res) => {
            const response = { msg: "Good news! You've been added." };
            return new Response(JSON.stringify(response), {
              status: 200,
            });
          })
          .catch((err) => {
            console.log(err);
            return new Response(err.toString(), { status: 500 });
          });
      });
  } catch (err) {
    console.log(err);
    return new Response(err.toString(), { status: 500 });
  }
};

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
