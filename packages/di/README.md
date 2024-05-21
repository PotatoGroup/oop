# @astii/di

[![NPM version](https://img.shields.io/npm/v/@astii/di.svg?style=flat)](https://npmjs.com/package/@astii/di)
[![NPM downloads](http://img.shields.io/npm/dm/@astii/di.svg?style=flat)](https://npmjs.com/package/@astii/di)

## Install

```bash
$ npm install @astii/di
```

## Usage

```ts
import { Inject, Injectable } from "@astii/di";

//dog.ts
@Injectable()
class Dog {
  name = 'dog'
  constructor() {}
}

//cat.ts
class Cat {
  @Inject()
  dog: Dog
  name = 'cat'
  constructor() {}
}

```


## LICENSE

MIT
