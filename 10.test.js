describe('Ćwiczenie 10', () => {
  describe('quiz o tablicach', () => {
    it('1', () => {
      `Przypisywanie przez referencję: Co zawiera "tablica1"?`;
      const tablica1 = ['a', 'b', 'c'];
      const tablica2 = tablica1;
      tablica2.push(123);

      const answers = {
        a: ['a', 'b', 'c'],
        b: ['a', 'b', 'c', 123],
      };

      // swoją odpowiedź wpisz
      //     👇 tutaj
      expect('').toEqualCorrectAnswer('abb1bab');
    });
  });

  describe('Zadania', () => {
    it('2', () => {
      `Zaimplementuj funkcję "getLastElement", która zwraca ostatni element tablicy`;
      // 👇

      // ☝️

      expect(getLastElement([])).toEqual(undefined);
      expect(getLastElement([1])).toEqual(1);
      expect(getLastElement([1, 2, 3, 4, 5])).toEqual(5);
      expect(getLastElement([1, 2, 3, 4, 'dddd'])).toEqual('dddd');
    });

    it('3', () => {
      `Napisz funkcję "sum", która zsumuje wszystkie podane argumenty`;
      // 👇

      // ☝️

      expect(sum(1)).toEqual(1);
      expect(sum(1, 2)).toEqual(3);
      expect(sum(1, 2, 3)).toEqual(6);
      expect(sum(1, 15, 20, 25)).toEqual(61);
    });

    it('4', () => {
      `Napisz funkcję "getNaturalNumbers", która zwróci tablicę o podaje odługości z kolejnymi liczbami naturalnymi`;
      // 👇

      // ☝️

      expect(getNaturalNumbers(1)).toEqual([1]);
      expect(getNaturalNumbers(2)).toEqual([1, 2]);
      expect(getNaturalNumbers(5)).toEqual([1, 2, 3, 4, 5]);
    });

    it('5', () => {
      `Napisz funkcję "max", która zwraca największy element z tablicy`;
      // 👇

      // ☝️

      expect(max([1])).toEqual(1);
      expect(max([1, 2, 3])).toEqual(3);
      expect(max([4, -10, 1])).toEqual(4);
      expect(max([-10, -2])).toEqual(-2);
    });

    it('6', () => {
      `Napisz funkcję "removeElement", która usuwa podany element z tablicy`;
      // 👇

      // ☝️

      let arr;

      arr = [1];
      removeElement('a', arr);
      expect(arr).toEqual([1]);

      arr = [12, 5, 10];
      removeElement(5, arr);
      expect(arr).toEqual([12, 10]);

      arr = ['a'];
      removeElement('a', arr);
      expect(arr).toEqual([]);

      arr = ['d', 'f', 'i'];
      removeElement('i', arr);
      expect(arr).toEqual(['d', 'f']);
    });

    it('7', () => {
      `Napisz funkcję "findUserById", która znajduje użytkownika w tablicy po ID`;
      // 👇

      // ☝️

      const users = [
        { id: 2, name: 'Michał' },
        { id: 1, name: 'Janek' },
        { id: 3, name: 'Kasia' },
      ];
      expect(findUserById(1, [...users])).toEqual({ id: 1, name: 'Janek' });
      expect(findUserById(2, [...users])).toEqual({ id: 2, name: 'Michał' });
      expect(findUserById(3, [...users])).toEqual({ id: 3, name: 'Kasia' });
      expect(findUserById(4, [...users])).toEqual(undefined);
    });

    it('8', () => {
      `Napisz funkcję "getUserIds", która bierze tablicę użytkowników i zwraca tablicę ich ID. Użyj "map".`;
      // 👇

      // ☝️

      expect(getUserIds([
        { id: 2, name: 'Michał' },
        { id: 1, name: 'Janek' },
        { id: 3, name: 'Kasia' },
      ])).toEqual([2, 1, 3]);

      expect(getUserIds([
        { id: 1, name: 'Michał' },
      ])).toEqual([1]);

      expect(getUserIds([
      ])).toEqual([]);
    });

    it('9', () => {
      `Napisz funkcję "sumWithReduce", która zsumuje wszystkie elementy tablicy. Użyj "reduce".`;
      // 👇

      // ☝️

      expect(sumWithReduce([])).toEqual(0);
      expect(sumWithReduce([1, 2, 3])).toEqual(6);
      expect(sumWithReduce([2, 5])).toEqual(7);
      expect(sumWithReduce([1])).toEqual(1);
    });

    it('10', () => {
      `Napisz funkcję "map", która zmapuje elementy w tablicy. Użyj "reduce".`;
      // 👇

      // ☝️

      expect(map([1, 2, 3], x => x * x)).toEqual([1, 4, 9]);
      expect(map([1, 2, 3], x => 2 + x)).toEqual([3, 4, 5]);
      expect(map([], x => 2 + x)).toEqual([]);
    });

    it('11', () => {
      `Napisz funkcję "cssPropToJs", która zamieni nazwy własności CSS na camelCase`;
      // 👇

      // ☝️

      expect(cssPropToJs('background')).toEqual('background');
      expect(cssPropToJs('background-image')).toEqual('backgroundImage');
      expect(cssPropToJs('list-style-type')).toEqual('listStyleType');
    });

    it('12', () => {
      `Posortuj tablicę użytkowników po ID`;
      const users = [
        { id: 2, name: 'Michał' },
        { id: 1, name: 'Janek' },
        { id: 3, name: 'Kasia' },
      ];

      // 👇

      // ☝️

      expect(users).toEqual([
        { id: 1, name: 'Janek' },
        { id: 2, name: 'Michał' },
        { id: 3, name: 'Kasia' },
      ]);
    });

    it('13', () => {
      `Napisz funkcję "getMedian", która zwraca medianę wartości podanych w tablicy`;
      // 👇

      // ☝️

      expect(getMedian([])).toEqual(undefined);
      expect(getMedian([1])).toEqual(1);
      expect(getMedian([2, 4])).toEqual(3);
      expect(getMedian([1, 2, 3])).toEqual(2);
      expect(getMedian([1, 2, 3, 4, 5])).toEqual(3);
    });

    it('14', () => {
      `Napisz funkcję "unique", która zwraca tablicę bez powtarzających się wartości.`;
      // 👇
      function unique(arr) {
        return arr.filter((el, idx, arr) => arr.indexOf(el) === idx);
      }
      // ☝️

      expect(unique([])).toEqual([]);
      expect(unique([1, 2])).toEqual([1, 2]);
      expect(unique([1, 2, 3, 1])).toEqual([1, 2, 3]);
      expect(unique([1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3]);
      expect(unique([1, 2, 3, 3, 3, 3, 4, 1, 2, 3])).toEqual([1, 2, 3, 4]);
    });
  });
});
