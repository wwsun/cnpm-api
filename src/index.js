const assert = require('assert');
const urllib = require('urllib');

const defaultOptions = {
  registry: 'https://registry.npmmirror.com',
};

export default class Client {
  constructor(options = {}) {
    this.options = {
      ...defaultOptions,
      ...options,
    };
    this.registry = this.options.registry;
  }

  request(path, options = {}) {
    assert(path, 'path must be provided');

    return urllib
      .request(`${this.registry}/${path}`, {
        dataType: 'json',
        ...options,
      })
      .then((res) => res.data)
      .catch((err) => console.error(err));
  }

  async getPackage(packageName, packageVersion) {
    const path = packageVersion
      ? `${packageName}/${packageVersion}`
      : packageName;
    const data = await this.request(path);
    const info = packageVersion
      ? data
      : pick(data, [
          'name',
          'description',
          'dist-tags',
          'author',
          'repository',
          'keywords',
          'license',
        ]);
    return info;
  }

  async getPackageVersions(packageName) {
    const data = await this.request(packageName);
    const time = data.time;
    const versions = omit(time, ['modified', 'created']);
    return versions;
  }
}

function pick(obj = {}, keys = []) {
  const ret = {};
  keys.forEach((key) => {
    if (key && obj[key]) {
      ret[key] = obj[key];
    }
  });
  return ret;
}

function omit(obj = {}, keys = []) {
  const ret = {};
  Object.keys(obj).forEach((key) => {
    if (!keys.includes[key]) {
      ret[key] = obj[key];
    }
  });
  return ret;
}
