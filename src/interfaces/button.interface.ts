import type { ButtonStyle } from "../enums/button-type.enum";

export interface ButtonI {
	text: string;
	link: string;
	style: ButtonStyle;
}
