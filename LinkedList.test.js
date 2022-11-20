import LinkedList from './LinkedList';

let list = LinkedList();

test(' append to add a node at the end of the list', () => {
  list.append('Oana');
  expect(list.head()).toEqual({ next: null, value: 'Oana' });
});

test('prepend to add a node at the start of the list', () => {
  list.prepend('OanaP');
  expect(list.head()).toEqual({ next: { next: null, value: 'Oana' }, value: 'OanaP' });
});

test('the size of the list should equal the total number of nodes', () => {
  expect(list.size()).toBe(2);
});

test('the pop function to remove last node', () => {
  list.pop();
  expect(list.head()).toEqual({ value: 'OanaP', next: null });
});

test('the head function to return all the nodes starting from the HEAD', () => {
  list.append('Andrei');
  expect(list.head()).toEqual({ value: 'OanaP', next: { value: 'Andrei', next: null } });
});

test('tail should return the last node on the list', () => {
  expect(list.tail()).toEqual({ value: 'Andrei', next: null });
});

test("test if contains return true or false when it' the case ", () => {
  expect(list.contains('Andrei')).toBe(true);
  expect(list.contains('creatina')).toBe(false);
});

test('at should return the node at the given index', () => {
  expect(list.at(1)).toEqual({ value: 'Andrei', next: null });
});

test('returns the index of the node containing value, or null if not found.', () => {
  expect(list.find('Andrei')).toBe(1);
  expect(list.find('yoyo')).toBe(null);
});

test('represents your LinkedList objects as strings, so you can print them out and preview them in the console', () => {
  expect(list.toString()).toBe('(OanaP) -> (Andrei) ->  null');
});

test('insertAt will insert the node at the right index with the rest of the nodes adjusting acordingly', () => {
  list.insertAt('creatina', 1);
  expect(list.head()).toEqual({ next: { next: { next: null, value: 'Andrei' }, value: 'creatina' }, value: 'OanaP' });
  list.insertAt('proteina', 0);
  expect(list.head()).toEqual({
    next: { next: { next: { next: null, value: 'Andrei' }, value: 'creatina' }, value: 'OanaP' },
    value: 'proteina'
  });
});

test('removeAt will remove the node at the given index', () => {
  list.removeAt(1);
  expect(list.head()).toEqual({ next: { next: { next: null, value: 'Andrei' }, value: 'creatina' }, value: 'proteina' });
  expect(list.size()).toBe(3);
});
