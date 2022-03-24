import Client from '../src';

const cnpm = new Client();

test('foo', async () => {
  const data = await cnpm.request('cnpm');
  console.log(data);
  expect(3).toBe(3);
});
