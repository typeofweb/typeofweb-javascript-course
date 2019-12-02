describe('Ćwiczenie 20', () => {
  it('1', () => {
    `Napisz funkcję "countLetters", która zlicza wystąpienia każdej litery w tekście. Użyj Map.`;
    // 👇

    // ☝️

    expect([...countLetters("abc")]).toEqual([['a', 1], ['b', 1], ['c', 1]]);
    expect([...countLetters("aaabc")]).toEqual([['a', 3], ['b', 1], ['c', 1]]);
    expect([...countLetters("abczzy")]).toEqual([['a', 1], ['b', 1], ['c', 1], ['z', 2], ['y', 1]]);
  });

  it('2', () => {
    `Napisz funkcję "unique", która zwraca tablicę bez powtarzających się wartości. Użyj Set.`;
    // 👇

    // ☝️

    expect(unique([1])).toEqual([1]);
    expect(unique([1, 1, 1, 1])).toEqual([1]);
    expect(unique([1, 2, 3, 2, 2, 3])).toEqual([1, 2, 3]);
    expect(unique([1, 2, 2, 2, 3, 3, 2, 3, 2, 3, 2, 3, 5])).toEqual([1, 2, 3, 5]);
  });

  it('3', () => {
    `
    Stwórz Proxy, które automatycznie wywoła funkcję "render",
    gdy zajdą jakiekolwiek zmiany w obiekcie "state".
    Nie wywołuj niepotrzebnie "render", gdy dane się nie zmieniają.
    `;
    const render = jest.fn();

    // 👇

    // ☝️

    const state = new Proxy({}, stateProxyConfig);

    state.a = 1;
    expect(render).toHaveBeenNthCalledWith(1, { a: 1 });

    state.a = 1;
    expect(render).toHaveBeenCalledTimes(1);

    state.b = 'blabla';
    expect(render).toHaveBeenNthCalledWith(2, { a: 1, b: 'blabla' });

    delete state.b;
    expect(render).toHaveBeenNthCalledWith(3, { a: 1 });

    delete state.b;
    expect(render).toHaveBeenCalledTimes(3);
  });
});
