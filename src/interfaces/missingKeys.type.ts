// eslint-disable-next-line @typescript-eslint/ban-types
type prettify<T> = { [k in keyof T]: T[k] } & {};

type allUnionKeys<T> = T extends infer U ? keyof U : never;

/** returns a uniformed union of objects by adding missing keys in each union */
export type includeUnionKeys<T extends object, U = T> = U extends U
	? prettify<{ [K in keyof U]: U[K] } & { [k in Exclude<allUnionKeys<T>, keyof U>]?: never }>
	: never;
