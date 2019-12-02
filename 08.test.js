describe('Ćwiczenie 8', () => {
  describe('quiz o operatorach logicznych', () => {
    it('1', () => {
      `OR`;
      const value = null || 1 || undefined;
      const answers = {
        a: 1,
        b: null,
        c: undefined,
        d: 'Błąd',
      };

      // swoją odpowiedź wpisz
      //     👇 tutaj
      expect('').toBeCorrectAnswer('def1ab2');
    });

    it('2', () => {
      `AND`;
      const value = 2 && null && 3;
      const answers = {
        a: 2,
        b: 3,
        c: null,
        d: 'Błąd',
      };

      // swoją odpowiedź wpisz
      //     👇 tutaj
      expect('').toBeCorrectAnswer('d5cefac');
    });

    it('3', () => {
      `OR + AND`;
      const value = null || (42 && 420) || 123;
      const answers = {
        a: null,
        b: 42,
        c: 420,
        d: 123,
      };

      // swoją odpowiedź wpisz
      //     👇 tutaj
      expect('').toBeCorrectAnswer('1c3bfac');
    });
  });

  describe('Warunki - zadania', () => {
    it('4', () => {
      `Napisz warunek, aby sprawdzić, czy liczba jest mniejsza od 3 lub większa od 5`;
      function solution(num) {
        return false; // 👈
      }

      expect(solution(1)).toBe(true);
      expect(solution(2)).toBe(true);
      expect(solution(3)).toBe(false);
      expect(solution(4)).toBe(false);
      expect(solution(5)).toBe(false);
      expect(solution(6)).toBe(true);
      expect(solution(7)).toBe(true);
    });

    it('5', () => {
      `Napisz warunek, aby sprawdzić, czy podana liczba jest oceną szkolną`;
      function solution(num) {
        return false; // 👈
      }

      expect(solution(0)).toBe(false);
      expect(solution(1)).toBe(true);
      expect(solution(2)).toBe(true);
      expect(solution(3)).toBe(true);
      expect(solution(4)).toBe(true);
      expect(solution(5)).toBe(true);
      expect(solution(6)).toBe(true);
      expect(solution(7)).toBe(false);
    });

    it('6', () => {
      `Napraw poniższy kod używając operatora &&`;
      function solution(obj) {
        return obj.a.b.c; // 👈
      }

      expect(solution({ a: { b: { c: 123 } } })).toBe(123);
      expect(solution({ a: { b: {} } })).toBe(undefined);
      expect(solution({ a: {} })).toBe(undefined);
      expect(solution({})).toBe(undefined);
    });

    it('7', () => {
      `Zwróć poprawną wiadomość używając zagnieżdżonych operatorów trójargumentowych`;
      function solution(age) {
        const answer = age < 0 ? '?' : '!'; // 👈
        return answer;
      }

      expect(solution(1)).toEqual('Niemowlę');
      expect(solution(10)).toEqual('Dziecko');
      expect(solution(15)).toEqual('Młodzież');
      expect(solution(18)).toEqual('Pełnoletni');
    });

    it('8', () => {
      `
      Napisz warunki potrzebne do przeprowadzenia procesu logowania zgodnie ze schematem:
      1. Poniższe ma zastosowanie tylko, jeśli dany endpoint wymaga logowania.
      2. Sprawdź, czy jest ciastko.
      3. Sprawdź, czy token jest ważny.
      4. Jeśli zasób ma pole userId, to sprawdź, czy użytkownik jest administratorem lub resource.userId równa się userId.
      `;
      function authFlow(
        routeRequiresLogin,
        hasCookie,
        isTokenValid,
        resource,
        isAdmin,
        userId,
      ) {
        // 👇

        return false;

        // ☝️
      }

      expect(authFlow(false, undefined, undefined, undefined, undefined, undefined)).toBe(true);
      expect(authFlow(true, undefined, undefined, undefined, undefined, undefined)).toBe(false);
      expect(authFlow(true, true, undefined, undefined, undefined, undefined)).toBe(false);
      expect(authFlow(true, false, undefined, undefined, undefined, undefined)).toBe(false);
      expect(authFlow(true, true, true, undefined, undefined, undefined)).toBe(true);
      expect(authFlow(true, true, false, undefined, undefined, undefined)).toBe(false);
      expect(authFlow(true, true, true, {}, undefined, undefined)).toBe(true);
      expect(authFlow(true, true, true, { userId: 123 }, undefined, undefined)).toBe(false);
      expect(authFlow(true, true, true, { userId: 123 }, true, undefined)).toBe(true);
      expect(authFlow(true, true, true, { userId: 123 }, false, undefined)).toBe(false);
      expect(authFlow(true, true, true, { userId: 123 }, false, 123)).toBe(true);
      expect(authFlow(true, true, true, { userId: 123 }, false, 42)).toBe(false);
    });
  });

  describe('quiz o pętlach', () => {
    it('9', () => {
      `
    pętla while
    Ile wynosi "i" po zakończeniu pętli?
    `;
      let i = 3;

      while (i) {
        i--;
      }

      const answers = {
        a: 3,
        b: 0,
        c: undefined,
        d: 1,
      };

      // swoją odpowiedź wpisz
      //     👇 tutaj
      expect('').toBeCorrectAnswer('da3bcad');
    });
    it('10', () => {
      `Ile razy wykona się pętla?`;
      let i = 3;
      do {
        console.log(i);
      } while (--i > 0);

      const answers = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      };

      // swoją odpowiedź wpisz
      //     👇 tutaj
      expect('').toBeCorrectAnswer('abcd3ca');
    });
    it('11', () => {
      `Ile razy wykona się pętla?`;
      let i = 3;
      do {
        console.log(i);
      } while (i-- > 0);

      const answers = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      };

      // swoją odpowiedź wpisz
      //     👇 tutaj
      expect('').toBeCorrectAnswer('ab2ddcb');
    });
  });

  describe('Pętle i switch - zadania', () => {
    it('12 Używając pętli, wypisz liczby od 3 do 11', () => {
      spyOn(console, 'log');
      // użyj console.log
      // 👇

      // ☝️

      expect(console.log).toHaveBeenCalledTimes(9);
      expect(console.log).toHaveBeenNthCalledWith(1, 3);
      expect(console.log).toHaveBeenNthCalledWith(2, 4);
      expect(console.log).toHaveBeenNthCalledWith(3, 5);
      expect(console.log).toHaveBeenNthCalledWith(4, 6);
      expect(console.log).toHaveBeenNthCalledWith(5, 7);
      expect(console.log).toHaveBeenNthCalledWith(6, 8);
      expect(console.log).toHaveBeenNthCalledWith(7, 9);
      expect(console.log).toHaveBeenNthCalledWith(8, 10);
      expect(console.log).toHaveBeenNthCalledWith(9, 11);
    });

    it('13 Zamień poniższą pętlę do…while na for', () => {
      spyOn(console, 'log');

      // 👇
      let i = 12;
      do {
        console.log(i);
      } while (i-- >= -2);
      // ☝️

      expect(console.log).toHaveBeenCalledTimes(16);
      expect(console.log).toHaveBeenNthCalledWith(1, 12);
      expect(console.log).toHaveBeenNthCalledWith(2, 11);
      expect(console.log).toHaveBeenNthCalledWith(3, 10);
      expect(console.log).toHaveBeenNthCalledWith(4, 9);
      expect(console.log).toHaveBeenNthCalledWith(5, 8);
      expect(console.log).toHaveBeenNthCalledWith(6, 7);
      expect(console.log).toHaveBeenNthCalledWith(7, 6);
      expect(console.log).toHaveBeenNthCalledWith(8, 5);
      expect(console.log).toHaveBeenNthCalledWith(9, 4);
      expect(console.log).toHaveBeenNthCalledWith(10, 3);
      expect(console.log).toHaveBeenNthCalledWith(11, 2);
      expect(console.log).toHaveBeenNthCalledWith(12, 1);
      expect(console.log).toHaveBeenNthCalledWith(13, 0);
      expect(console.log).toHaveBeenNthCalledWith(14, -1);
      expect(console.log).toHaveBeenNthCalledWith(15, -2);
      expect(console.log).toHaveBeenNthCalledWith(16, -3);
    });

    it('14 Wypisz liczby parzyste od 1 do 100 w pętli', () => {
      spyOn(console, 'log');

      // 👇
      // console.log
      // ☝️

      expect(console.log).toHaveBeenCalledTimes(49);
      for (let i = 1; i <= 49; ++i) expect(console.log).toHaveBeenNthCalledWith(i, i + i);
    })

    it('15 Zamień poniższy kod na switch', () => {
      function solution(x) {
        // 👇
        if (x === 1) {
          return 'one';
        }
        if (x === 2) {
          return 'two';
        }

        if (x === 3 || x === 4) {
          return 'three or four';
        }
        return 'ERROR';
        // ☝️
      }

      expect(solution(0)).toEqual('ERROR');
      expect(solution(1)).toEqual('one');
      expect(solution(2)).toEqual('two');
      expect(solution(3)).toEqual('three or four');
      expect(solution(4)).toEqual('three or four');
      expect(solution(5)).toEqual('ERROR');
    });

    it('16 Zamień poniższy kod na if…else', () => {
      function solution(month) {
        // 👇
        switch (month) {
          case 'Jan':
          case 'Feb':
            return 'Freezing';
          case 'May':
          case 'Jun':
          case 'Oct':
            return 'So so';
          case 'Jul':
          case 'Aug':
          case 'Sep':
            return 'Hot!';
          default:
            return 'Cold';
        }
        // ☝️
      }

      expect(solution('Jan')).toEqual('Freezing');
      expect(solution('Feb')).toEqual('Freezing');
      expect(solution('Mar')).toEqual('Cold');
      expect(solution('Apr')).toEqual('Cold');
      expect(solution('May')).toEqual('So so');
      expect(solution('Jun')).toEqual('So so');
      expect(solution('Jul')).toEqual('Hot!');
      expect(solution('Aug')).toEqual('Hot!');
      expect(solution('Sept')).toEqual('Cold');
      expect(solution('Oct')).toEqual('So so');
      expect(solution('Nov')).toEqual('Cold');
      expect(solution('Dev')).toEqual('Cold');
    });
  });
});
