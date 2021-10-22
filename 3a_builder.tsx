class Buttons {
  buttons: Array<string>;
  constructor(buttons: Array<string>) {
    this.buttons = (
      <div>
        {buttons.map((button) => (
          <button>{button}</button>
        ))}
      </div>
    );
  }
}

interface ButtonsBuilder {
  addButtons<T extends Array<unknown>>(...args: T): Buttons;
}

class StudentsButtonBuilder implements ButtonsBuilder {
  addButtons() {
    return new Buttons(["Plan zajęć", "Wyloguj"]);
  }
}

class AdminButtonBuilder implements ButtonsBuilder {
  addButtons() {
    return new Buttons(["Edytuj plan zajęć", "Wyloguj"]);
  }
}

class WelcomePage {
  text: string;
  constructor(text: string) {
    this.text = (
      <div>
        <p>{text}</p>
      </div>
    );
  }
}

interface WelcomeMessageBuilder {
  printWM(): WelcomePage;
}

class StudentsWMBuilder implements WelcomeMessageBuilder {
  printWM() {
    return (
      <div>
        <p>This is student's welcome page.</p>
      </div>
    );
  }
}

class AdminWMBuilder implements WelcomeMessageBuilder {
  printWM() {
    return (
      <div>
        <p>This is admin's welcome page.</p>
      </div>
    );
  }
}

class Form {
  buttons: Buttons;
  welcomePage: WelcomePage;
  constructor(buttons: Buttons, welcomePage: WelcomePage) {
    this.buttons = buttons;
    this.welcomePage = welcomePage;
  }
}

class FormBuilder {
  constructForm(user: "admin" | "student") {
    let welcomeBuilder: WelcomeMessageBuilder;
    let buttonsBuilder: ButtonsBuilder;

    if (user == "admin") {
      welcomeBuilder = new AdminWMBuilder();
      buttonsBuilder = new AdminButtonBuilder();
    } else {
      welcomeBuilder = new StudentsWMBuilder();
      buttonsBuilder = new StudentsButtonBuilder();
    }

    const welcomeMessage = welcomeBuilder.printWM();
    const buttons = buttonsBuilder.addButtons();

    const form = new Form(buttons, welcomeMessage);

    return form;
  }
}
