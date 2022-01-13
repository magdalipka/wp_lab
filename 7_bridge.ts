interface DateFormat {
  write(y: string, m: string, d: string): void;
}

class YMD implements DateFormat {
  #fs: FileWriter;
  constructor(fs: FileWriter) {
    this.#fs = fs;
  }
  write(y: string, m: string, d: string) {
    this.#fs.write(`${y}${m}${d}`);
  }
}

class MDY implements DateFormat {
  #fs: FileWriter;
  constructor(fs: FileWriter) {
    this.#fs = fs;
  }
  write(y: string, m: string, d: string) {
    this.#fs.write(`${m}${d}${y}`);
  }
}

class DMY implements DateFormat {
  #fs: FileWriter;
  constructor(fs: FileWriter) {
    this.#fs = fs;
  }
  write(y: string, m: string, d: string) {
    this.#fs.write(`${d}${m}${y[3]}${y[4]}`);
  }
}

interface FileWriter {
  write(input: string): void;
}

class CSVWriter implements FileWriter {
  write(input: string) {
    console.log("writing csv...");
    console.log(input);
  }
}

class XMLWriter implements FileWriter {
  write(input: string) {
    console.log("writing xml...");
    console.log(input);
  }
}

const ymd = new YMD(new CSVWriter());

ymd.write("2021", "12", "02");
