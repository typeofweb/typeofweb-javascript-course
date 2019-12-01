class Observer {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notify(data) {
    this.observers.forEach(observer => {
      observer(data);
    });
  }
}
