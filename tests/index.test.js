import Client from '../src';

const cnpm = new Client();

test('request', async () => {
  const data = await cnpm.request('cnpm');
  expect(data.name).toBe('cnpm');
});

test('getPackage', async () => {
  const data = await cnpm.getPackage('cnpm');
  expect(data.name).toBe('cnpm');
});

test('getPackage with version', async () => {
  const data = await cnpm.getPackage('cnpm', '1.0.0');
  expect(data.version).toBe('1.0.0');
});

test('getPackageVersions', async () => {
  const data = await cnpm.getPackageVersions('cnpm');
  expect(data['1.0.0']).toBeTruthy();
});
