export type TokenType = string | Symbol;

class Injector<T extends TokenType, K extends { new (...args: any[]): {} }> {
  private readonly providerMap = new Map<T, K>();
  private readonly instanceMap = new Map<TokenType, Object>();
  setProvider(token: T, provider: K) {
    if (!this.providerMap.has(token)) {
      this.providerMap.set(token, provider);
    }
  }
  getProvider(token: T) {
    return this.providerMap.get(token);
  }
  setInstance(token: T, instance: Object) {
    if (!this.instanceMap.has(token)) {
      this.instanceMap.set(token, instance);
    }
  }
  getInstance(token: T) {
    return this.instanceMap.get(token);
  }
  getAll() {
    return this.instanceMap;
  }
}

export default new Injector();
