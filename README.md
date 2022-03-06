# Map Implementation

![Author](https://img.shields.io/badge/author-Wendell%20Kenneddy-brightgreen)
![Used Technologies](https://img.shields.io/badge/techs-Typescript%20and%20Jest-brightgreen)
![Status](https://img.shields.io/badge/status-Concluded-brightgreen)
![PRs](https://img.shields.io/badge/PRs-Welcome-brightgreen)
![License](https://img.shields.io/badge/license-MIT-brightgreen)

---

## 📕 About

This project is a simple implementation of the map array method. Also, this project is my first npm package, and first experience with esbuild.

---

## ⚒️ Used Technologies

To develop this app, I used these technologies:

- Typescript
- Jest for testing

---

## ✨ Features

- Implementation of the map method

---

## ⚙️ How to Use

Run `yarn add map-implementation` to install the package.

Then:

```ts
import { _map } from 'map-implementation';

const numArray = [5, 10, 15];

const doubledArray = _map<number, number>(
  numArray,
  (val, index, source) => val * 2
);

console.log(doubledArray); // 10, 20, 30
```

---

## 🔓 License

This project is under license. Click [here](./LICENSE) for details.
