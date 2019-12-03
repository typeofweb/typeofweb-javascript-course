expect.extend({
  /**
   *
   * @param {string} answer
   * @param {string} encryptedAnswer
   */
  toBeCorrectAnswer(answer, encryptedAnswer) {
    const index = encryptedAnswer
      ? encryptedAnswer
          .split('')
          .findIndex(val => /\d/.test(val))
      : -1;
    const pass = Boolean(
      encryptedAnswer &&
        answer &&
        encryptedAnswer[index + 1] === answer,
    );
    return {
      pass,
      message: () =>
        'Nieprawidłowa odpowiedź! Jeszcze raz 👏',
    };
  },
});
