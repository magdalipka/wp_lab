class IState {
  txtValidate?(_ctx: IStateMachine, ..._args: Array<unknown>): void | never {}
  txtInvalidate?(_ctx: IStateMachine, ..._args: Array<unknown>): void | never {}
  orphan?(_ctx: IStateMachine, ..._args: Array<unknown>): void | never {}
  includeInNewBlock?(
    _ctx: IStateMachine,
    ..._args: Array<unknown>
  ): void | never {}
  replaceBranch?(_ctx: IStateMachine, ..._args: Array<unknown>): void | never {}
  newBlock?(_ctx: IStateMachine, ..._args: Array<unknown>): void | never {}
  enoughBlocks?(_ctx: IStateMachine, ..._args: Array<unknown>): void | never {}
}

class Created implements IState {
  txtValidate(ctx: IStateMachine) {
    ctx.setState(ctx.possibleStates.Valid);
  }
  txtInvalidate(ctx: IStateMachine) {
    ctx.setState(ctx.possibleStates.Invalid);
  }
}

class Valid implements IState {
  includeInNewBlock(ctx: IStateMachine) {
    ctx.setState(ctx.possibleStates.Mined);
  }
  replaceBranch(ctx: IStateMachine) {
    ctx.setState(ctx.possibleStates.Invalid);
  }
}

class Mined implements IState {
  newBlock(ctx: IStateMachine) {
    ctx.setState(ctx.possibleStates.Mined);
  }
  enoughBlocks(ctx: IStateMachine) {
    ctx.setState(ctx.possibleStates.DurablyCommitted);
  }
}

class DurablyCommitted implements IState {}

class Invalid implements IState {}

interface IStateMachine {
  possibleStates: Record<
    "Created" | "Valid" | "Mined" | "DurablyCommitted" | "Invalid",
    IState
  >;
  setState(s: IState): void;
}

class StateMachine implements IStateMachine {
  #state: IState;
  possibleStates: Record<
    "Created" | "Valid" | "Mined" | "DurablyCommitted" | "Invalid",
    IState
  >;

  constructor() {
    this.possibleStates = {
      Created: new Created(),
      Valid: new Valid(),
      Mined: new Mined(),
      DurablyCommitted: new DurablyCommitted(),
      Invalid: new Invalid(),
    };
    this.#state = this.possibleStates.Created;
  }

  setState(state: IState) {
    this.#state = state;
  }
}
