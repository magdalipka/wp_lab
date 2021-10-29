const Taxes: Record<string, { lower: number; higher: number }> = {
  Polska: { lower: 18, higher: 32 },
  USA: { lower: 10, higher: 20 },
  Niemcy: { lower: 15, higher: 25 },
};

const SuppPayments: Record<string, { lower: number; higher: number }> = {
  Polska: { lower: 28, higher: 42 },
  USA: { lower: 20, higher: 40 },
  Niemcy: { lower: 25, higher: 45 },
};

interface ITax {
  multiplier: number;
  calculate: (x: number) => number;
}

interface ISupplementaryPayment {
  multiplier: number;
  calculate: (x: number) => number;
}

interface IFactory {
  country: string;
  level: "higher" | "lower";
  createSP: () => ISupplementaryPayment;
  createTax: () => ITax;
}

class Tax implements ITax {
  multiplier: number;

  constructor(value: number) {
    this.multiplier = value;
  }

  calculate(x: number) {
    return (x * this.multiplier) / 100;
  }
}

class SupplementaryPayment implements ISupplementaryPayment {
  multiplier: number;

  constructor(value: number) {
    this.multiplier = value;
  }

  calculate(x: number) {
    return (x * this.multiplier) / 100;
  }
}

class Factory implements IFactory {
  country: string;
  level: "higher" | "lower";

  constructor(country: string, level: "higher" | "lower") {
    this.country = country;
    this.level = level;
  }

  createSP() {
    const multiplier = Taxes[this.country][this.level];
    return new SupplementaryPayment(multiplier);
  }

  createTax() {
    const multiplier = SuppPayments[this.country][this.level];
    return new Tax(multiplier);
  }
}
