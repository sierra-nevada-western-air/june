export const ValueDefaults = {
  String: "",
  Boolean: false,
  Date: new Date(),
  Array: <T>(): Array<T> => new Array<T>(),
};
