---
title: Senna React
renderTitle: true
tableOfContents: false
meta:
  image: /docs/assets/img/logo.png
  description: TODO
---

## Installation

Senna UI React is available as an [npm package](https://www.npmjs.com/package/@senna-ui/react)
To install and save in your `package.json` dependencies, run:

```shell
// with npm
$ npm install @senna-ui/react

// with yarn
$ yarn add @senna-ui/react
```


## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {
  SenApp,
  SenButton,
} from "@senna-ui/react";;

function App() {
  const sayHello = () => console.log("Hello from Senna!")
  return (
    <SenApp>
      <SenButton onClick={sayHello}>Hello Senna</SenButton>
    </SenApp>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Naming Conventions

Senna UI uses camelcased adaptions of the native web component names documented in the [API documentation](/docs/api/). 
Meaning `<sen-app>` becomes `<SenApp>` in React and `<sen-input clear-input>` becomes `<SenInput clearInput >` 