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
