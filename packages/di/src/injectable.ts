import injector from "./injector";
export function Injectable() {
  return function (constructor: { new (...args: any[]): {} }) {
    const token = Symbol.for(constructor.name);
    injector.setProvider(token, constructor);
    return constructor;
  };
}
