import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

export default async (request, context) => {
  const locale = request.headers["accept-language"] || "en-US";
  const { timezone } = context.geo;

  const response = await context.next();

  return (
    new HTMLRewriter()
      .on("time[datetime]", {
        element(element) {
          // get the date value as a string from the HTML data attribute
          const dateString = element.getAttribute("datetime");
          const dateFormat = element.getAttribute("data-date-format");

          // convert the string to a JavaScript date
          const date = new Date(dateString);

          // use toLocaleString() with the locale from the request
          // and the timezone from context.geo
          let localizedTime;
          if (dateFormat === "time-only") {
            localizedTime = date.toLocaleString(locale, {
              timeZone: timezone,
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            });
          } else {
            localizedTime = date.toLocaleString(locale, {
              timeZone: timezone,
              hour: "numeric",
              minute: "numeric",
              day: "numeric",
              weekday: "short",
              month: "short",
            });
          }

          // modify the HTML element
          element.setInnerContent(`${localizedTime}`);
        },
      })
      // transform the original response!
      .transform(response)
  );
};

export const config = { path: ["/*"] };
