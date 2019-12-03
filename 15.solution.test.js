describe('Ćwiczenie 15 - asynchroniczność', () => {
  describe('Typowy przepływ informacji w appce', () => {
    `
    Wszystkie poniższe zadania rozwiązują ten sam problem
    na różne sposoby:
    1. Callback
    2. Thunk
    3. Promise
    4. Promise + reduce
    5. async/await

    Zadanie:
    Na stronie chcesz wyświetlić wiele części artykułu.
    Twoje API zwraca części pojedyńczo, a więc musisz
    wykonać kilka żądań, aby pobrać je wszystkie.
    Zadanie polega na tym, aby pobrać części artykułu
    i wyświetlić je w *odpowiedniej kolejności*.

    Uwagi:
    - Wyświetlenie sprowadza się na razie tylko do
        wywołania funkcji "render"
    - Dane otrzymasz w odpowiedni sposób, w zależności
        od zadania, w przygotowanej przez nas funkcji "getJSON"
    - Twoje zadanie polega na wywołaniu "render"
        z właściwymi danymi we właściwej kolejności
    - Na koniec wywołaj "done()"
    - Nie ma znaczenia, czy będziesz renderować częście
        w momencie, gdy przyjdą z API, czy dopiero wszystko
        na sam koniec. Liczy się rezultat po wywołaniu "done()"
    `;

    const secretData = require('./15.data.json');

    const render = jest.fn();
    function checkExpectations() {
      expect(render).toHaveBeenCalledTimes(4);
      expect(render).toHaveBeenNthCalledWith(
        1,
        secretData[1],
      );
      expect(render).toHaveBeenNthCalledWith(
        2,
        secretData[2],
      );
      expect(render).toHaveBeenNthCalledWith(
        3,
        secretData[3],
      );
      expect(render).toHaveBeenNthCalledWith(
        4,
        secretData[4],
      );
    }
    const baseDelay = 500;

    afterEach(() => {
      checkExpectations();
      jest.resetAllMocks();
    });

    describe('1. Callback', () => {
      function getJSON(id, cb) {
        const delayMs = Math.random() * baseDelay;
        setTimeout(() => {
          cb(secretData[id]);
        }, delayMs);
      }
      it(`Używając callbacków`, done => {
        // 👇
        getJSON('chapters', chapters => {
          const myData = {};
          for (const id of chapters) {
            getJSON(id, content => {
              myData[id] = content;
              if (
                Object.keys(myData).length ===
                chapters.length
              ) {
                for (const chapter of Object.values(
                  myData,
                )) {
                  render(chapter);
                  done();
                }
              }
            });
          }
        });
        // ☝️
      });
    });

    describe('2. Thunk', () => {
      function getJSON(id) {
        const delayMs = Math.random() * baseDelay;
        let callback;
        let data;

        setTimeout(() => {
          if (callback) {
            callback(secretData[id]);
          } else {
            data = secretData[id];
          }
        }, delayMs);

        return cb => {
          if (data) {
            cb(data);
          } else {
            callback = cb;
          }
        };
      }
      it(`Używając thunków`, done => {
        // 👇
        const chaptersThunk = getJSON('chapters');
        chaptersThunk(chapters => {
          const chaptersThunks = chapters.map(getJSON);

          function next(i = 0) {
            if (chaptersThunks[i]) {
              chaptersThunks[i](content => {
                render(content);
                next(i + 1);
              });
            } else {
              done();
            }
          }
          next();
        });
        // ☝️
      });
    });

    describe('3. Promise', () => {
      function getJSON(id) {
        const delayMs = Math.random() * baseDelay;
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(secretData[id]);
          }, delayMs);
        });
      }
      it(`Używając promisów`, done => {
        // 👇
        getJSON('chapters').then(chapters => {
          const chaptersPromises = chapters.map(getJSON);

          function next(i = 0) {
            if (chaptersPromises[i]) {
              chaptersPromises[i].then(content => {
                render(content);
                next(i + 1);
              });
            } else {
              done();
            }
          }
          next();
        });
        // ☝️
      });
    });

    describe('4. Promise + reduce', () => {
      function getJSON(id) {
        const delayMs = Math.random() * baseDelay;
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(secretData[id]);
          }, delayMs);
        });
      }
      it(`Używając promisów + reduce`, done => {
        // 👇
        getJSON('chapters')
          .then(chapters => {
            const chaptersPromises = chapters.map(
              getJSON,
            );

            return chaptersPromises.reduce(
              (sequence, chapterPromise) => {
                return sequence
                  .then(() => chapterPromise)
                  .then(render);
              },
              Promise.resolve(),
            );
          })
          .then(done);
        // ☝️
      });
    });

    describe('5. async/await', () => {
      function getJSON(id) {
        const delayMs = Math.random() * baseDelay;
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(secretData[id]);
          }, delayMs);
        });
      }

      it(`Używając async/await`, async done => {
        // 👇
        const chapters = await getJSON('chapters');
        const chapterPromises = chapters.map(getJSON);
        for (const chapterPromise of chapterPromises) {
          const content = await chapterPromise;
          render(content);
        }
        done();
        // ☝️
      });
    });
  });
});
