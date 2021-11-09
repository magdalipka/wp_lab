class Handler {
  successor?: Handler;

  constructor(successor?: Handler) {
    this.successor = successor;
  }

  handle(request: string) {
    console.log("Basic handle");
  }
}

class RightHandler extends Handler {
  handle(request: string) {
    if (request === "right") {
      console.log("Right click handle");
    } else {
      this.successor?.handle(request);
    }
  }
}

class LeftHandler extends Handler {
  handle(request: string) {
    if (request === "left") {
      console.log("Left click handle");
    } else {
      this.successor?.handle(request);
    }
  }
}

class MiddleHandler extends Handler {
  handle(request: string) {
    if (request === "middle") {
      console.log("Middle click handle");
    } else {
      this.successor?.handle(request);
    }
  }
}

const chain = new MiddleHandler(
  new RightHandler(new LeftHandler(new Handler()))
);

const request = "middle";
chain.handle(request);
