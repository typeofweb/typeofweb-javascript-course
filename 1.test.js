describe('Ćwiczenie 1 - Hello, world!', () => {
  function solution() {
    // 👇 tutaj wstaw rozwiązanie zadania 1
    //
    //
    // ☝️
  }

  it('says Hello, world!', () => {
    const spy = jest.spyOn(console, 'log');
    solution();
    expect(spy).toHaveBeenCalledWith('Hello, world!');
  });
});
