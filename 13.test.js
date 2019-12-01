describe('Ćwiczenie 13', () => {
  it(`
  Mamy klasę "Player", której instnacje posiadają 5 metod: "up", "right", "down", "left" i "log"
  Pierwsze cztery odpowiadają one za wirtualny ruch postaci.
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
