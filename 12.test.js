const host = window;
describe('Ćwiczenie 12 - this', () => {
  it(`Zmień implementację solution tak, aby jego kontekstem był undefined`, () => {
    function solution() {
      return this;
    }
    expect(solution()).toBe(undefined);
  });

  it(`Uywając wywołania metody wywołaj foo tak, aby zwróciła otherO (nie zmieniaj implementacji foo)`, () => {
    const o = {
      a: 'o object',
      foo: function() {
        return this;
      },
    };
    const otherO = {
      a: 'otherO object',
    };
    expect(o.foo()).toBe(otherO);
  });

  it(`Zmień sposób przekazania o.foo do setTimeout tak, aby kontekst pozostał taki jak się spodziewasz`, () => {
    jest.useFakeTimers();
    const tester = jest.fn();

    const o = {
      a: 'o object',
      foo: function() {
        tester(this);
      },
    };
    setTimeout(o.foo);

    jest.runAllTimers();
    expect(tester).toBeCalledWith(o);
  });
});
