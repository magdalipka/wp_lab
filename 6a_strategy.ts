interface SortingAlgorithm {
  sort(input: Array<number>): Array<number>;
}

class BubbleSort implements SortingAlgorithm {
  #swap(arr: Array<unknown>, xp: number, yp: number) {
    [arr[xp], arr[yp]] = [arr[yp], arr[xp]];
  }

  #bubbleSort(arr: Array<number>): Array<number> {
    let i: number, j: number;
    for (i = 0; i < arr.length - 1; i++) {
      for (j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          this.#swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  }

  sort(input: Array<number>): Array<number> {
    const sortedInput = this.#bubbleSort([...input]);
    return sortedInput;
  }
}

class InsertionSort implements SortingAlgorithm {
  #insertionSort(inputArr: Array<number>) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
      let current = inputArr[i];
      let j = i - 1;
      while (j > -1 && current < inputArr[j]) {
        inputArr[j + 1] = inputArr[j];
        j--;
      }
      inputArr[j + 1] = current;
    }
    return inputArr;
  }

  sort(input: Array<number>): Array<number> {
    const sortedInput = this.#insertionSort([...input]);
    return sortedInput;
  }
}

class BogoSort implements SortingAlgorithm {
  #isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  }

  #shuffle(arr) {
    let count = arr.length,
      temp: number,
      index: number;

    while (count > 0) {
      index = Math.floor(Math.random() * count);
      count--;

      temp = arr[count];
      arr[count] = arr[index];
      arr[index] = temp;
    }

    return arr;
  }

  #bogoSort(arr: Array<number>) {
    var sorted = false;
    while (!sorted) {
      arr = this.#shuffle(arr);
      sorted = this.#isSorted(arr);
    }
    return arr;
  }

  sort(input: Array<number>): Array<number> {
    const sortedInput = this.#bogoSort([...input]);
    return sortedInput;
  }
}

class SortingContext {
  #strategy: SortingAlgorithm;
  sort(array: Array<number>) {
    return this.#strategy.sort(array);
  }
}
