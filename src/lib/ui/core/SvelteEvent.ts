export type SvelteMouseEvent = MouseEvent & {
	currentTarget: EventTarget & HTMLButtonElement;
};
