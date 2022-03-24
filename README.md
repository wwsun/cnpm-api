# cnpm-api

get info from cnpm registry

## Usage

install

```bash
yarn add cnpm-api
```

use

```js
import Client from 'cnpm-api';

const cnpm = new Client();
const data = await cnpm.request('cnpm');
```

## API

- `getPackage(packageName)`: get package info
- `getPackage(packageName, packageVersion)`: get package with specified version
- `getPackageVersions(packageName)`: get package versions

## Reference

1. https://github.com/repo-utils/npm-request
2. https://github.com/cnpm/cnpmjs.org/blob/master/docs/registry-api.md
