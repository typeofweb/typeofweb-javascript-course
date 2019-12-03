describe('Ćwiczenie 9', () => {
  it('1', () => {
    `
    Napisz funkcję "isAdult", która przyjmuje wiek jako
    argument i zwraca informację o tym, czy ktoś jest
    pełnoletni
    `;
    // 👇

    // ☝️

    expect(isAdult(18)).toBe(true);
    expect(isAdult(17.9999)).toBe(false);
    expect(isAdult(0)).toBe(false);
    expect(isAdult(2222)).toBe(true);
  });

  it('2', () => {
    `Napisz funkcję "max", która zwraca większą z dwóch liczb`;
    // 👇

    // ☝️

    expect(max(2, 3)).toBe(3);
    expect(max(3, 2)).toBe(3);
    expect(max(2, -100)).toBe(2);
  });

  it('3', () => {
    `
    Napisz funkcję "isPrimary", która zwróci informację,
    czy podana liczba jest pierwsza
    (Sprawdź, czy liczba jest niepodzielna przez wszystkie
      liczby mniejsze od siebie i większe od 1)
    `;
    // 👇

    // ☝️

    expect(isPrimary(1)).toBe(false);
    expect(isPrimary(2)).toBe(true);
    expect(isPrimary(3)).toBe(true);
    expect(isPrimary(4)).toBe(false);
    expect(isPrimary(5)).toBe(true);
    expect(isPrimary(6)).toBe(false);
    expect(isPrimary(7)).toBe(true);
    expect(isPrimary(8)).toBe(false);
    expect(isPrimary(9)).toBe(false);
    expect(isPrimary(10)).toBe(false);
    expect(isPrimary(11)).toBe(true);
  });

  it('4', () => {
    `
    Napisz funkcję "userFactory"
    - jako argument przyjmie rolę użytkownika: "admin",
      "manager" itp.
    - userFactory ma zwrócić funkcję
    - zwrócona funkcja jako argument ma przyjąć imię
      użytkownika
    - i wyświetlić przez console.log: rolę, imię oraz
      liczbę stworzonych użytkowników o danej roli
    `;
    spyOn(console, 'log');

    // 👇

    // ☝️

    const createAdmin = userFactory('admin');
    const createUser = userFactory('user');
    const createManager = userFactory('manager');

    createAdmin('Michał');
    expect(console.log).toHaveBeenLastCalledWith(
      'admin',
      'Michał',
      1,
    );

    createManager('Martyna');
    expect(console.log).toHaveBeenLastCalledWith(
      'manager',
      'Martyna',
      1,
    );

    createUser('Marcin');
    expect(console.log).toHaveBeenLastCalledWith(
      'user',
      'Marcin',
      1,
    );

    createAdmin('Wojtek');
    expect(console.log).toHaveBeenLastCalledWith(
      'admin',
      'Wojtek',
      2,
    );

    createAdmin('Karolina');
    expect(console.log).toHaveBeenLastCalledWith(
      'admin',
      'Karolina',
      3,
    );

    createAdmin('Asia');
    expect(console.log).toHaveBeenLastCalledWith(
      'admin',
      'Asia',
      4,
    );
  });
});
