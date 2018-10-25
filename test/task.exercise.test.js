const taskEx = require('./../exercises/task.exercise')

test('Task exercise', async () => {
  const app = taskEx.getImages('unicorn');
  const res = await app.toPromise();
  expect(res).toMatch(/https:\/\/farm*/)
});
