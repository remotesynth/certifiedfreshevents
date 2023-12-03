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
        console.log(listName);
        if (!email || !listID) {
            return new Response(
                "email and list query parameters are required",
                {
                    status: 500,
                }
            );
        }

        return mailjet
            .post("contact")
            .request({
                Email: email,
                IsExcludedFromCampaigns: false,
                Name: firstName + " " + lastName,
            })
            .then(async (res) => {
                const addedToList = mailjet
                    .post("contact")
                    .id(res.body.Data[0].ID)
                    .action("managecontactslists")
                    .request({
                        ContactsLists: [
                            {
                                ListID: listID,
                                Action: "addnoforce",
                            },
                        ],
                    });
                const response = { msg: "Good news! You've been added." };
                return new Response(JSON.stringify(response), {
                    status: 200,
                });
            })
            .catch((err) => {
                const response = { errorMsg: err.response.statusText };
                return new Response(JSON.stringify(response), {
                    status: 200,
                });
            });
    } catch (err) {
        console.log(err);
        return new Response(err.toString(), { status: 500 });
    }
};

export const config = {
    path: "/api/mailjet",
};
