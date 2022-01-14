interface Command {
  execute: (...args: Array<never>) => void;
}

type Minimizable = {
  minimize: () => void;
};

type Maximizable = {
  maximize: () => void;
};

type Refreshable = {
  refresh: () => void;
};

type Colorable = {
  changeColor: (color: string) => void;
};

class MinimizeCommand implements Command {
  #item: Minimizable;

  constructor(item: Minimizable) {
    this.#item = item;
  }

  execute() {
    this.#item.minimize();
  }
}

class MaximizeCommand implements Command {
  #item: Maximizable;

  constructor(item: Maximizable) {
    this.#item = item;
  }

  execute() {
    this.#item.maximize();
  }
}

class ColorCommand implements Command {
  #item: Colorable;

  constructor(item: Colorable) {
    this.#item = item;
  }

  execute(color: string) {
    this.#item.changeColor(color);
  }
}

class RefreshCommand implements Command {
  #item: Refreshable;

  constructor(item: Refreshable) {
    this.#item = item;
  }

  execute() {
    this.#item.refresh();
  }
}

interface ControlBox {
  refresh: Refreshable["refresh"];
  changeColor: Colorable["changeColor"];
  minimize: Minimizable["minimize"];
  maximize: Maximizable["maximize"];
}

class PictureControl implements ControlBox {
  #minimize: MinimizeCommand;
  #maximize: MaximizeCommand;
  #changeColor: ColorCommand;
  #refresh: RefreshCommand;

  constructor(
    minimize: MinimizeCommand,
    maximize: MaximizeCommand,
    refresh: RefreshCommand,
    changeColor: ColorCommand
  ) {
    this.#minimize = minimize;
    this.#maximize = maximize;
    this.#refresh = refresh;
    this.#changeColor = changeColor;
  }

  minimize() {
    this.#maximize.execute();
  }

  maximize() {
    this.#maximize.execute();
  }

  refresh() {
    this.#refresh.execute();
  }

  changeColor(...args: Parameters<ColorCommand["execute"]>) {
    this.#changeColor.execute(...args);
  }
}

type PictureState = {
  color: string;
  minimized: boolean;
  baseUrl: string;
  pictureId: string;
};

interface IMemento<T> {
  getState: () => T;
  setState: (arg: T) => void;
}

class Memento<T> {
  #state: T;

  setState(arg: T) {
    this.#state = arg;
  }

  getState() {
    return this.#state;
  }
}

class Picture {
  #state: PictureState;
  #history: Array<Memento<PictureState>>;

  constructor() {
    this.#state = {
      color: "#ff0000",
      minimized: false,
      baseUrl: "https://avatars.githubusercontent.com/u/",
      pictureId: "0",
    };
    const memento = new Memento<PictureState>();
    memento.setState(this.#state);

    this.#history = new Array();
    this.#history.push(memento);
  }

  minimize() {
    this.#state.minimized = true;
    const memento = new Memento<PictureState>();
    memento.setState(this.#state);
    this.#history.push(memento);
  }

  maximize() {
    this.#state.minimized = false;
    const memento = new Memento<PictureState>();
    memento.setState(this.#state);
    this.#history.push(memento);
  }

  refresh() {
    this.#state.pictureId = String(Math.floor(Math.random() * 10_000_000));
    const memento = new Memento<PictureState>();
    memento.setState(this.#state);
    this.#history.push(memento);
  }

  changeColor(color: string) {
    this.#state.color = color;
    const memento = new Memento<PictureState>();
    memento.setState(this.#state);
    this.#history.push(memento);
  }

  undo() {
    this.#state = this.#history.pop().getState();
  }
}

const picture = new Picture();

const controlPanel = new PictureControl(
  new MinimizeCommand(picture),
  new MaximizeCommand(picture),
  new RefreshCommand(picture),
  new ColorCommand(picture)
);
