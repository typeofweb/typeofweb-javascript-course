describe('Ćwiczenie 11', () => {
  it('1', () => {
    `Napisz funkcję "isEmpty", która zwróci informację, czy obiekt jest pusty`;
    // 👇

    // ☝️

    expect(isEmpty(null)).toEqual(true);
    expect(isEmpty(undefined)).toEqual(true);
    expect(isEmpty({})).toEqual(true);
    expect(isEmpty({ a: 1 })).toEqual(false);
    expect(isEmpty({ 1: 1 })).toEqual(false);
    expect(isEmpty({ [Symbol('test')]: 1 })).toEqual(true);
  });

  it('2', () => {
    `Napisz funkcję "sumValues", która zsumuje wartości obiektu`;
    // 👇

    // ☝️

    expect(sumValues({})).toEqual(0);
    expect(sumValues({ a: 1 })).toEqual(1);
    expect(sumValues({ a: 1, b: 42 })).toEqual(43);
    expect(sumValues({ a: -10, b: 42 })).toEqual(32);
  });

  it('3', () => {
    `Napisz funkcję "countByAge", która zliczy liczbę osób o poszczególnym wieku`;
    // 👇

    // ☝️

    expect(countByAge([])).toEqual({});
    expect(countByAge([{ age: 13 }])).toEqual({ 13: 1 });
    expect(countByAge([{ age: 13 }, { age: 22 }])).toEqual({ 13: 1, 22: 1 });
    expect(countByAge([{ age: 13 }, { age: 22 }, { age: 13 }, { age: 13 }, { age: 22 }, { age: 25 }])).toEqual({ 13: 3, 22: 1, 22: 2, 25: 1 });
  });

  it('4', () => {
    `Używając "map" i "reduce" napisz funkcję "mapApiUsers", która zamieni podaną tablicę na oczekiany rezultat`;
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
});
