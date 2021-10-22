interface Multimedia {
  name: string;
  type: string;
  items: Array<string>;

  clone(): Multimedia;
  toString(): string;
}

class Picture implements Multimedia {
  name: string;
  type: "picture" = "picture";
  items: Array<string>;

  constructor(name: string) {
    this.name = name;
    this.items = [];
  }
  clone(): Picture {
    const newPicture = new Picture(this.name);
    newPicture.items = [...this.items];
    return newPicture;
  }
  toString() {
    return JSON.stringify({
      name: this.name,
      type: this.type,
      items: this.items,
    });
  }
}

class Music implements Multimedia {
  name: string;
  type: "music" = "music";
  items: Array<string>;

  constructor(name: string) {
    this.name = name;
    this.items = [];
  }
  clone(): Music {
    const newMusic = new Music(this.name);
    newMusic.items = [...this.items];
    return newMusic;
  }
  toString() {
    return JSON.stringify({
      name: this.name,
      type: this.type,
      items: this.items,
    });
  }
}

class Movie implements Multimedia {
  name: string;
  type: "movie" = "movie";
  items: Array<string>;

  constructor(name: string) {
    this.name = name;
    this.items = [];
  }
  clone(): Movie {
    const newMovie = new Movie(this.name);
    newMovie.items = [...this.items];
    return newMovie;
  }
  toString() {
    return JSON.stringify({
      name: this.name,
      type: this.type,
      items: this.items,
    });
  }
}

function main() {
  const multimedia: Array<Multimedia> = [];
  multimedia.push(new Picture("pi1"));
  multimedia.push(new Music("mu1"));
  multimedia.push(new Movie("mo1"));

  const multimediaCopy: Array<Multimedia> = multimedia.map((item) => {
    return item.clone();
  });

  multimediaCopy.map((item) => {
    console.log(item.toString());
  });
}

main();
