class Observer {
  update(request: string) {
    console.log("Basic handle");
  }
}

class MouseController {
  observers: Set<Observer>;

  constructor() {
    this.observers = new Set();
  }

  addObserver(observer: Observer) {
    this.observers.add(observer);
  }
  removeObserver(observer: Observer) {
    this.observers.delete(observer);
  }

  onClick(type: string) {
    this.observers.forEach((observer) => observer.update(type));
  }
}

class RightObserver implements Observer {
  update(request: string) {
    if (request === "right") {
      console.log("Right click handle");
    }
  }
}

class LeftObserver implements Observer {
  update(request: string) {
    if (request === "left") {
      console.log("Left click handle");
    }
  }
}

class MiddleObserver implements Observer {
  update(request: string) {
    if (request === "middle") {
      console.log("Middle click handle");
    }
  }
}

const mouse = new MouseController();

mouse.addObserver(new RightObserver());
mouse.addObserver(new LeftObserver());
mouse.addObserver(new MiddleObserver());

mouse.onClick("right");
