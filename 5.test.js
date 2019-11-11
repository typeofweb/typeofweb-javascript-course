describe('Ćwiczenie 5 - Zakresy, hoisting i TDZ', () => {
  it(`
  Zmień *tylko* sposób deklaracji zmiennej value,
  aby wartość była widoczna poza blokiem
  `, () => {
    if (true) {
      let value = 123;
    }
    expect(value).toEqual(123);
  });

  it(`
  Zmień *tylko* sposób deklaracji zmiennej x,
  aby niemożliwe było odczytanie zmiennej przed jej deklaracją
  `, () => {
    function solution() {
      console.log(x);
      var x = 42;
    }
    expect(() => solution()).toThrow();
  });

  it(`Zmień nazwę jednej ze zmiennych, aby pozbyć się buga`, () => {
    var path = require('path');
    function solution() {
      if (true) {
        var path = './';
      }
      path.relative('./', '..');
    }

    expect(() => solution()).not.toThrowError();
  });

  it(`Napraw buga w kodzie`, () => {
    jest.useFakeTimers();

    const solution = jest.fn();
    for (var i = 0; i < 10; ++i) {
      setTimeout(() => solution(i));
    }

    jest.runAllTimers();
    expect(solution).toHaveBeenCalledTimes(10);
    expect(solution).toHaveBeenNthCalledWith(1, 0);
    expect(solution).toHaveBeenNthCalledWith(2, 1);
    expect(solution).toHaveBeenNthCalledWith(3, 2);
    expect(solution).toHaveBeenNthCalledWith(4, 3);
    expect(solution).toHaveBeenNthCalledWith(5, 4);
    expect(solution).toHaveBeenNthCalledWith(6, 5);
    expect(solution).toHaveBeenNthCalledWith(7, 6);
    expect(solution).toHaveBeenNthCalledWith(8, 7);
    expect(solution).toHaveBeenNthCalledWith(9, 8);
    expect(solution).toHaveBeenNthCalledWith(10, 9);
  });
});
