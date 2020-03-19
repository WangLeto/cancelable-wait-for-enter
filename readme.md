# wait-for-enter

> Wait until user presses Enter or Cancel


## Install

```
$ npm install cancelable-wait-for-enter
```


## Usage

```js
const waitForEnter = require('cancelable-wait-for-enter');

waitForEnter()
.then() // User pressed Enter
.catch() // User canceled
```


## License

MIT
