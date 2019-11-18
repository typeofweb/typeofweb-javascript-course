describe('Ćwiczenie 8', () => {
  describe('quiz o operatorach logicznych', () => {
    it(`OR`, () => {
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

    it(`AND`, () => {
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

    it(`OR + AND`, () => {
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
    it(`Napisz warunek, aby sprawdzić, czy liczba jest mniejsza od 3 lub większa od 5`, () => {
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

    it(`Napisz warunek, aby sprawdzić, czy podana liczba jest oceną szkolną`, () => {
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

    it(`Napraw poniższy kod używając operatora &&`, () => {
      function solution(obj) {
        return obj.a.b.c; // 👈
      }

      expect(solution({ a: { b: { c: 123 } } })).toBe(123);
      expect(solution({ a: { b: {} } })).toBe(undefined);
      expect(solution({ a: {} })).toBe(undefined);
      expect(solution({})).toBe(undefined);
    });

    it(`Zwróć poprawną wiadomość używając zagnieżdżonych operatorów trójargumentowych`, () => {
      function solution(age) {
        const answer = age < 0 ? '?' : '!'; // 👈
        return answer;
      }

      expect(solution(1)).toEqual('Niemowle');
      expect(solution(10)).toEqual('Dziecko');
      expect(solution(15)).toEqual('Młodzież');
      expect(solution(18)).toEqual('Pełnoletni');
    })

    it(`
    Napisz warunki potrzebne do przeprowadzenia procesu logowania zgodnie ze schematem:
    1. Poniższe ma zastosowanie tylko, jeśli dany endpoint wymaga logowania.
    2. Sprawdź, czy jest ciastko.
    3. Sprawdź, czy token jest ważny.
    4. Jeśli zasób ma pole userId, to sprawdź, czy użytkownik jest administratorem lub resource.userId równa się userId.
    `, () => {
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
});
