import Node from './Node';

const node = Node('Hello world!');

test('node to have value:Hello world, next:null, changeValue', () => {
  expect(node).toEqual({ next: null, value: 'Hello world!' });
});
