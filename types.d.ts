declare global {
  namespace jest {
    interface Matchers<R> {
      toBeCorrectAnswer(answer: string, question: string, allAnswers: Record<'a' | 'b' | 'c' | 'd', string>): R;
    }
  }
}
