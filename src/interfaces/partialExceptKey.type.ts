export type partialExceptKey<T, K extends keyof T> = {
	[P in keyof T]?: P extends K ? T[P] : T[P] | undefined;
} & {
	[Q in K]-?: T[Q];
};
