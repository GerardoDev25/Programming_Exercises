for (let index = 1; index <= 100; index++) {
  let result =  '';

  if (index % 3 === 0) {
    result += 'fizz';
  }
  if (index % 5 === 0) {
    result += 'buzz';
  }

  console.log(result || index);
}
