const dictionary = {
  1: 'L',
  2: 'R',
  3: 'E',
  4: 'A',
  5: 'S',
  6: 'b',
  7: 'T',
  8: 'B',
  9: 'g',
  0: 'o',
  a: '4',
  b: 'I3',
  c: '[',
  d: ')',
  e: '3',
  f: '|=',
  g: '&',
  h: '#',
  i: '1',
  j: ',_|',
  k: '>|',
  l: '1',
  m: 'JVI',
  n: '^/',
  o: '0',
  p: '|*',
  q: '(_,)',
  r: 'I2',
  s: '5',
  t: '7',
  u: '(_)',
  v: '//',
  w: `\\N`,
  x: '><',
  y: 'j',
  z: '2',
  ' ': ' ',
};

function encode(str) {
  return str
    .split('')
    .map((char) => {
      if (dictionary[char.toLowerCase()]) return dictionary[char.toLowerCase()];
      return char.toLowerCase();
    })
    .join('');
}

console.log(encode('?'));
console.log(encode('w'));
