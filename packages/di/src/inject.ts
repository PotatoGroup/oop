import "reflect-metadata";
import injector from "./injector";
export function Inject(...args: any[]) {
  return function (prototype: Object, name: string) {
    const propertyType = Reflect.getMetadata("design:type", prototype, name);
    let ins = injector.getInstance(propertyType);
    if (!ins) {
      const token = Symbol.for(propertyType.name);
      const Provider = injector.getProvider(token);
      if (!Provider) throw TypeError(`${token.toString()} not exist`);
      ins = new Provider(args);
      injector.setInstance(propertyType, ins);
    }
    Object.defineProperty(prototype, name, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ins,
    });
  };
}
