const searchReplace = require('./index-START');

test('searchReplace is a function', () => {
  expect(typeof searchReplace).toEqual('function');
});

test('searchReplace can search and replace a word', () => {
  expect(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting")).toEqual("He is Sitting on the couch");
});
