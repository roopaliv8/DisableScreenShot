# react-native-disable-enable-screenshots

React native plugin to enable/disable screenshot for Android and iOS.

## Installation

```sh
npm install react-native-disable-enable-screenshots
```

## Usage

```js
import { screenshotsStatusUpdate } from 'react-native-disable-enable-screenshots';

// ...

const res = await screenshotsStatusUpdate(true/false);

// String value as response eg. "Done. Screenshot Disabled." or "Done. Screenshot Enabled."

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
