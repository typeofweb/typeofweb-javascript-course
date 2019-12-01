describe('Ćwiczenie 13', () => {
  it(`Zastąp funkcję w prototypie tak, zamiast "hello" wyświetlany był napis "cześć". Nie modyfikuj klasy!`, () => {
    const spy = spyOn(console, 'log');

    class X {
      sayHello() {
        console.log('hello');
      }
    }

    const a = new X();
    const b = new X();
    const c = new X();

    // 👇

    // ☝️

    a.sayHello();
    b.sayHello();
    c.sayHello();
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenNthCalledWith(1, 'cześć');
    expect(spy).toHaveBeenNthCalledWith(2, 'cześć');
    expect(spy).toHaveBeenNthCalledWith(3, 'cześć');
  });

  it(`
  Mamy klasę "Player", której instancje posiadają 5 metod: "up", "right", "down", "left" i "log"
  Pierwsze cztery odpowiadają za wirtualny ruch postaci.
  Pozycja gracza jest zapamiętywana i można być zwrócona przy pomocy metody "log".
  Zaimplementuj klasę "Player".
  `, () => {
    // 👇

    // ☝️

    const player = new Player();

    expect(player.log()).toEqual({ x: 0, y: 0 });
    expect(player.up().log()).toEqual({ x: 0, y: 1 });
    expect(player.up().down().log()).toEqual({ x: 0, y: 1 });
    expect(player.up().up().log()).toEqual({ x: 0, y: 3 });
    expect(player.up().left().left().log()).toEqual({ x: -2, y: 4 });
    expect(player.right().log()).toEqual({ x: -1, y: 4 });
  });
});
