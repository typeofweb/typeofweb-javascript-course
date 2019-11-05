describe('Ćwiczenie 2 - nazwa', () => {
  function sub(a, b) {
    return a - b;
  }
  test('subtracts 1 - 2 to equal -1', () => {
    expect(sub(1, 2)).toBe(-1);
  });
  test('subtracts 3 - 2 to equal 1', () => {
    expect(sub(3, 2)).toBe(1);
  });
});
