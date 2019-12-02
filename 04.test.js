describe('Ćwiczenie 4 - Zmienne i stałe w JS', () => {
  it('1', () => {
    `
    Stwórz dwie zmienne: name oraz user.
    Przypisz do name swoje imię.
    Następnie przypisz do user wartość zmiennej name.
    `;
    // 👈
    expect(name).toEqual(user);
  });

  it('2', () => {
    `Przypisz do zmiennej counter kolejne liczby`;
    let counter = 0;
    // 👈
    expect(counter).toEqual(1);
    // 👈
    expect(counter).toEqual(2);
    // 👈
    expect(counter).toEqual(3);
    // 👈
    expect(counter).toEqual(4);
  });
});
