export interface Event {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	link: LinkData;
	date: string;
	place: string;
	modality: string;
	hostedBy: string;
	image: string;
	attendees: number;
}

interface LinkData {
	title: string;
	description: string;
	url: string;
	footer: string;
	buttonText: string;
}
