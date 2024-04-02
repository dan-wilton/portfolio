import { atom, type WritableAtom } from "nanostores";

export const isKBarOpen = atom(false);
export const searchTerm = atom("");
export const searchList: WritableAtom<string[]> = atom([]);
