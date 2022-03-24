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
}
