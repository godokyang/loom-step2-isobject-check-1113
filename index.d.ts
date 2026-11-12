declare function isObject(val: any): val is { [key: string]: unknown };

export default isObject;

declare function isNonEmptyObject(val: any): val is { [key: string]: unknown };

export { isNonEmptyObject };
