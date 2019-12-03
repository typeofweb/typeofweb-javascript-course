describe('Ćwiczenie 8', () => {
  describe('quiz o pętlach', () => {
    it('9', () => {
      `Ile wynosi "i" po zakończeniu pętli?`;
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
    it('12', () => {
      `Używając pętli, wypisz liczby od 3 do 11`;
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

    it('13', () => {
      `Zamień poniższą pętlę do…while na for`;
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

    it('14', () => {
      `Wypisz liczby parzyste od 1 do 99 w pętli`;
      spyOn(console, 'log');

      // 👇
      // console.log
      // ☝️

      expect(console.log).toHaveBeenCalledTimes(49);
      for (let i = 1; i <= 49; ++i)
        expect(console.log).toHaveBeenNthCalledWith(
          i,
          i + i,
        );
    });

    it('15', () => {
      `Zamień poniższy kod na switch`;
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

    it('16', () => {
      `Zamień poniższy kod na if…else`;
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
