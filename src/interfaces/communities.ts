import type { SocialLinks } from "./common";

export interface Community {
	name: string;
	description: string;
	links?: Links;
	tags: string[];
	image: string;
}

export interface Links {
	website: string;
	social?: SocialLinks;
}
