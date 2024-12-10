import fs from "node:fs";
import path from "node:path";
import rss from "@astrojs/rss";

export async function GET(context) {
	const filePath = path.join(process.cwd(), "src/assets/events.json");
	const fileContents = fs.readFileSync(filePath, "utf-8");
	const events = JSON.parse(fileContents);

	return rss({
		title: "Eventos de Ecuador In Tech",
		description: "Una lista de eventos organizados por Ecuador In Tech.",
		site: context.site,
		stylesheet: "/rss/styles.xsl",
		items: events.map((event) => ({
			title: event.title,
			description: event.description,
			link: event.link,
			date: event.date,
			place: event.place,
			modality: event.modality,
			hostedBy: event.hostedBy,
			customData: `
        <date>${event.date}</date>
        <place>${event.place}</place>
        <hostedBy>${event.hostedBy}</hostedBy>
        `,
		})),
	});
}
