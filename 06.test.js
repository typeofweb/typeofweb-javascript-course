describe('Ćwiczenie 6 - Typy proste', () => {
  describe('number', () => {
    it('1', () => {
      `
      Zapisz podane obliczenia tak, aby wynik został
      obliczony w JS
      `;
      // 4 razy 8 dzielone przez 2 dodać 12;
      expect(4 + 8 + 2 + 12).toEqual(28);
    });

    it('2', () => {
      `Zaokrąglij podane liczby używając metody toFixed`;
      expect(3.1415).toEqual('3');
      expect(22.123456).toEqual('22.1235');
      expect(42).toEqual('42.00');
    });

    it('3', () => {
      `
      Wylosuj liczbę całkowitą pomiędzy min i max.
      Użyj funkcji Math.random() i innych.
      Możesz sobie pomóc StackOverflow :)
      `;

      function solution(min, max) {
        const result = 0; // 👈
        return result;
      }
      expect(solution(50, 60)).toBeGreaterThanOrEqual(50);
      expect(solution(50, 60)).toBeLessThan(60);
      expect(solution(0, 100)).toBeGreaterThanOrEqual(0);
      expect(solution(0, 100)).toBeLessThan(100);
    });
  });

  describe('string', () => {
    it('4', () => {
      `Przypisz do stałej odpowiednią wartość`;
      const name = ''; //
      expect(`Witaj, ${name}`).toEqual('Witaj, świecie!');
    });

    it('5', () => {
      `Użyj trzech stałych i dowolnej notacji`;
      const name1 = 'Type';
      const name2 = 'of';
      const name3 = 'Web';
      expect().toEqual('Type of Web');
    });

    it('6', () => {
      `Co zawiera stała solution?`;
      const a = 'aaa';
      const b = 'bbb';
      const solution = `${a + b}`;

      const answers = {
        a: 'aaabbb',
        b: 'aaa bbb',
      };
      expect('').toBeCorrectAnswer('1a55555');
    });

    it('7', () => {
      `Jaki jest wynik?`;
      const a = 'aaa';
      const b = 'bbb';
      const solution = `${a} ${b}`;

      const answers = {
        a: 'aaabbb',
        b: 'aaa bbb',
      };
      expect('').toBeCorrectAnswer('5baab2f');
    });

    it('8', () => {
      `
      Zwróć podaną wartość WIELKIMI LITERAMI.
      Użyj toUpperCase.
      `;

      function solution(str) {
        const solution = str; // 👈
        return solution;
      }

      expect(solution('blaBladsadsa')).toEqual(
        'BLABLADSADSA',
      );
    });

    it('9', () => {
      `
      Powtórz podany ciąg znaków 10 razy.
      Użyj repeat.
      `;

      function solution(str) {
        const solution = str; // 👈
        return solution;
      }

      expect(solution('abc')).toEqual(
        'abcabcabcabcabcabcabcabcabcabc',
      );
    });

    it('10', () => {
      `
      Przytnij podany tekst do maksymalnej długości i dodaj
      na końcu elipsę ('...'). Zignoruj przypadek, gdy
      tekst jest krótszy niż maksymalna długość.
      Użyj slice.
      `;
      const MAX_LENGTH = 10;
      function solution(str) {
        const solution = str; // 👈
        return solution;
      }

      expect(
        solution('Lorem ipsum dolor sit amet'),
      ).toEqual('Lorem ipsu...');
      expect(
        solution('Sit amet ipsum dolor sit amet'),
      ).toEqual('Sit amet i...');
    });

    it('11', () => {
      `
      Zwróć podaną wartość z pierszą wielką literą.
      Użyj slice i toUpperCase.
      `;

      function solution(str) {
        const solution = str + str; // 👈
        return solution;
      }

      expect(solution('witaj, świecie')).toEqual(
        'Witaj, świecie',
      );
    });

    it('12', () => {
      `
      Zwróć informację, czy podany mail jest ważny.
      Mail jest ważny, jeśli temat zawiera słowo "Staples".
      Użyj includes.
      `;

      function isEmailImportant(topic) {
        const solution = topic; // 👈
        return solution;
      }

      expect(
        isEmailImportant('Szkolenie Staples!'),
      ).toEqual(true);
      expect(isEmailImportant('Śmieszne kotki')).toEqual(
        false,
      );
      expect(isEmailImportant('Staples urlop')).toEqual(
        true,
      );
      expect(isEmailImportant('Śmieszne pieski')).toEqual(
        false,
      );
    });

    it('13', () => {
      `
      Zwróć informację, czy podany mail jest ważny.
      Mail jest ważny, jeśli email kończy się na '@staples.com'
      Użyj endsWith.
      `;

      function isEmailImportant(topic) {
        const solution = topic; // 👈
        return solution;
      }

      expect(
        isEmailImportant('karolina@staples.com'),
      ).toEqual(true);
      expect(
        isEmailImportant('wojtek@typeofweb.com'),
      ).toEqual(false);
      expect(
        isEmailImportant('anatol@staples.com'),
      ).toEqual(true);
      expect(
        isEmailImportant('michal@typeofweb.com'),
      ).toEqual(false);
      expect(
        isEmailImportant('michal@typeofweb.staples.com'),
      ).toEqual(false);
    });
  });
});
