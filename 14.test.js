const host = window;
describe('Ćwiczenie 14 - this', () => {
  {
  }
  it('1', () => {
    `
    Zmień implementację solution tak, aby jego kontekstem był
    undefined
    `;
    // 👇
    function solution() {
      return this;
    }
    // ☝️
    expect(solution()).toBe(undefined);
  });

  it('2', () => {
    `
    Używając wywołania metody wywołaj foo tak, aby zwróciła
    otherO (nie zmieniaj implementacji foo)
    `;
    const o = {
      a: 'o object',
      foo: function () {
        return this;
      },
    };
    const otherO = {
      a: 'otherO object',
    };
    // 👇
    expect(o.foo()).toBe(otherO);
    // ☝️
  });

  it('3', () => {
    `
    Zmień sposób przekazania o.foo do setTimeout tak, aby
    kontekst pozostał taki jak się spodziewasz
    `;
    jest.useFakeTimers();
    const tester = jest.fn();

    const o = {
      a: 'o object',
      foo: function () {
        tester(this);
      },
    };
    // 👇
    setTimeout(o.foo);
    // ☝️

    jest.runAllTimers();
    expect(tester).toBeCalledWith(o);
  });

  it('4', () => {
    `
    Napraw poniższy kod. Są przynajmniej 3 możliwe rozwiązania.
    `;
    // 👇
    const user = {
      id: 1,
      firstName: 'Kasia',
      age: 22,
      sayMyName() {
        return `My name is ${this.firstName} and I'm ${this.age}.`;
      },
    };

    const execute = fn => fn();

    const result = execute(user.sayMyName);
    // ☝️
    expect(result).toEqual(
      `My name is Kasia and I'm 22.`,
    );
  });

  it('5', () => {
    `
    Mamy obiekt "player", który posiada 5 metod:
      "up", "right", "down", "left" i "log"
    Pierwsze cztery odpowiadają one za wirtualny ruch postaci.
    Pozycja gracza jest zapamiętywana i można być zwrócona
    przy pomocy metody "log".
    Zaimplementuj obiekt "player".
    `;
    const player = {
      // 👇
      // ☝️
    };

    expect(player.log()).toEqual({ x: 0, y: 0 });
    expect(player.up().log()).toEqual({ x: 0, y: 1 });
    expect(
      player
        .up()
        .down()
        .log(),
    ).toEqual({ x: 0, y: 1 });
    expect(
      player
        .up()
        .up()
        .log(),
    ).toEqual({ x: 0, y: 3 });
    expect(
      player
        .up()
        .left()
        .left()
        .log(),
    ).toEqual({ x: -2, y: 4 });
    expect(player.right().log()).toEqual({ x: -1, y: 4 });
  });

  it('6', () => {
    `
    Korzystając z poprzedniego zadania, stwórz fabrykę
    obiektów "playerFactory", dzięki której nie będzie
    możliwy bezpośredni dostęp do pól "x" i "y"
    `;
    // 👇

    // ☝️

    const player1 = playerFactory();
    const player2 = playerFactory();

    expect(player1.log()).toEqual({ x: 0, y: 0 });
    expect(player1.up().log()).toEqual({ x: 0, y: 1 });
    expect(
      player1
        .up()
        .down()
        .log(),
    ).toEqual({ x: 0, y: 1 });
    expect(
      player1
        .up()
        .up()
        .log(),
    ).toEqual({ x: 0, y: 3 });
    expect(
      player1
        .up()
        .left()
        .left()
        .log(),
    ).toEqual({ x: -2, y: 4 });
    expect(player1.right().log()).toEqual({
      x: -1,
      y: 4,
    });
    expect(player1.x).not.toBeDefined();
    expect(player1.y).not.toBeDefined();

    expect(player2.log()).toEqual({ x: 0, y: 0 });
    expect(player2.up().log()).toEqual({ x: 0, y: 1 });
    expect(
      player2
        .up()
        .down()
        .log(),
    ).toEqual({ x: 0, y: 1 });
    expect(
      player2
        .up()
        .up()
        .log(),
    ).toEqual({ x: 0, y: 3 });
    expect(
      player2
        .up()
        .left()
        .left()
        .log(),
    ).toEqual({ x: -2, y: 4 });
    expect(player2.right().log()).toEqual({
      x: -1,
      y: 4,
    });
    expect(player2.x).not.toBeDefined();
    expect(player2.y).not.toBeDefined();
  });
});
