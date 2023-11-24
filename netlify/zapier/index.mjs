export default async (req, context, callback) => {
    try {
        const body = await req.json();
        const { email, eventcode } = body;

        if (!email) {
            return Response("email query parameter required", { status: 500 });
        }
        if (!eventCode) {
            return Response("eventCode query parameter required", {
                status: 500,
            });
        }

        const data = {
            email: email,
            eventcode: eventCode,
        };
        return fetch("https://hooks.zapier.com/hooks/catch/2422393/ot2b8az/", {
            method: "POST",
            body: JSON.stringify(data),
        })
            .then((res) => {
                return new Response(JSON.stringify(res.data), {
                    status: 200,
                });
            })
            .catch((err) => {
                return Response(JSON.stringify(err.response.data.errors[0]), {
                    status: 500,
                });
            });
    } catch (err) {
        [];
        return Response(err.toString(), { status: 500 });
    }
};

export const config = {
    path: "/api/zapier",
};
