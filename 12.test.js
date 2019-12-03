describe('Ćwiczenie 12', () => {
  it('1', () => {
    `
    Napisz funkcję "getTail", która przyjmuje tablicę
    i zwraca wszystkie elementy oprócz pierwszego. Użyj
    destrukturyzacji.
    `;
    // 👇

    // ☝️

    expect(getTail([1])).toEqual([]);
    expect(getTail([1, 2])).toEqual([2]);
    expect(getTail([1, 2, 3, 'abc'])).toEqual([
      2,
      3,
      'abc',
    ]);
  });

  it('2', () => {
    `
    Napisz funkcję "swap", która zwraca nową tablicę
    z dwoma elementami zamienionymi miejscami. Użyj
    destrukturyzacji.
    `;
    // 👇

    // ☝️

    expect(swap([0, 1])).toEqual([1, 0]);
    expect(swap(['abc', 42])).toEqual([42, 'abc']);
  });

  it('3', () => {
    `
    Napisz funkcję "sanitizeUser", która zwraca obiekt
    usera bez wrażliwych danych. Dane wrażliwe to pola
    "password" i "email". Użyj destrukturyzacji.
    `;
    // 👇

    // ☝️

    expect(
      sanitizeUser({
        name: 'Michał',
        password: 'qwerty',
      }),
    ).toEqual({ name: 'Michał' });
    expect(
      sanitizeUser({
        name: 'Ania',
        password: 'qwerty',
        email: 'ania@typeofweb.com',
      }),
    ).toEqual({ name: 'Ania' });
  });

  it('4', () => {
    `
      W pętli "for…of" wywołaj funkcję "render" na "id"
      użytkowników: render(id)
      Użyj destrukturyzacji wewnątrz pętli.
    `;
    const render = jest.fn();
    const users = [{ id: 1 }, { id: 42 }];

    // 👇

    // ☝️

    expect(render).toHaveBeenCalledTimes(2);
    expect(render).toHaveBeenNthCalledWith(1, 1);
    expect(render).toHaveBeenNthCalledWith(2, 42);
  });

  it('5', () => {
    `
    Popraw funkcję tak, aby nie było błędow. Użyj wartości
    domyślnej w destrukturyzacji.
    `;
    // 👇
    function solution({ x }) { }
    // ☝️

    expect(() => solution()).not.toThrowError();
  });
});
