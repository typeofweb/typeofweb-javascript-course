it(`Używając "map" i "reduce" napisz funkcję "mapApiUsers", która zamieni podaną tablicę na oczekiany rezultat`, () => {
  // 👇

  // ☝️

  const users = [
    { id: 'a1', email: 'abc@xyz', name: 'Abc' },
    { id: 'b2', email: 'def@xyz', name: 'Def' },
    { id: 'c3', email: 'ghi@xyz', name: 'Ghi' },
    { id: 'd4', email: 'jkl@xyz', name: 'Jkl' },
  ];

  const result = {
    a1: 'abc@xyz',
    b2: 'def@xyz',
    c3: 'ghi@xyz',
    d4: 'jkl@xyz',
  };

  expect(mapApiUsers(users)).toEqual(result);
});
