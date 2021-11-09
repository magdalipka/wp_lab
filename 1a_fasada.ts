class ManagementSystem {
  clients: Set<Client>;
  constructor() {
    this.clients = new Set();
  }
  addClient: <T extends Array<unknown>>(...args: T) => Client = () => {
    const client = new Client();
    this.clients.add(client);
    return client;
  };
  removeClient: (client: Client) => void = (client) => {
    this.clients.delete(client);
  };
  printClientsInstruments: (client: Client) => void = (client) => {
    console.log(client.instruments);
  };
}

class Client {
  instruments: Set<Instrument>;
  buyInstrument(instrument: Instrument) {
    this.instruments.add(instrument);
  }
  sellInstrument(instrument: Instrument) {
    this.instruments.delete(instrument);
  }
}

class Instrument {
  registered: boolean;
  register: <T extends Array<unknown>>(...args: T) => void;
  unregister: <T extends Array<unknown>>(...args: T) => void;
}

class API {
  managementSystem: ManagementSystem;
  client: Client;
  instrument: Instrument;

  constructor() {
    this.managementSystem = new ManagementSystem();
    this.client = new Client();
    this.instrument = new Instrument();
  }

  addClient(
    ...args: Parameters<InstanceType<typeof ManagementSystem>["addClient"]>
  ) {
    return this.managementSystem.addClient(...args);
  }
  removeClient(
    ...args: Parameters<InstanceType<typeof ManagementSystem>["removeClient"]>
  ) {
    return this.managementSystem.removeClient(...args);
  }
  printClientsInstruments(
    ...args: Parameters<
      InstanceType<typeof ManagementSystem>["printClientsInstruments"]
    >
  ) {
    return this.managementSystem.printClientsInstruments(...args);
  }
  buyInstrument(
    ...args: Parameters<InstanceType<typeof Client>["buyInstrument"]>
  ) {
    return this.client.buyInstrument(...args);
  }
  sellInstrument(
    ...args: Parameters<InstanceType<typeof Client>["sellInstrument"]>
  ) {
    return this.client.sellInstrument(...args);
  }
  register(...args: Parameters<InstanceType<typeof Instrument>["register"]>) {
    return this.instrument.register(...args);
  }
  unregister(
    ...args: Parameters<InstanceType<typeof Instrument>["unregister"]>
  ) {
    return this.instrument.unregister(...args);
  }
}
