import { stringify } from 'postcss';

export const trimAndAppend = (str, length, append) =>
	str.substring(0, length) + append;
