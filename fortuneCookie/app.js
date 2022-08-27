// creating a random fortune class
class randomFortune {
  // list of all items to be selected from randomly
  items;

  constructor(items) {
    // store the use of set items
    this.items = items;
  }

  // returns a random entry from the array
  pickRandom() {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }
}
// creating the fortune cookie class to allow me to store the fortunes and it extends into my random fortune class

class fortuneCookie extends randomFortune {
  outputElement;
  constructor(element) {
    // array of possible fortunes
    super([
      "A beautiful, smart, and loving person will be coming into your life.",
      "A dubious friend may be an enemy in camouflage.",
      "A faithful friend is a strong defense.",
      "A feather in the hand is better than a bird in the air.",
      "A fresh start will put you on your way.",
      "A friend asks only for your time not your money.",
      "A friend is a present you give yourself.",
      "A gambler not only will lose what he has, but also will lose what he doesn't have.",
      "A golden egg of opportunity falls into your lap this month.",
      "A good friendship is often more important than a passionate romance.",
    ]);
    this.outputElement = element;
  }

  // open function that randomly picks the answer
  open() {
    let reply = this.pickRandom();
    this.outputElement.innerHTML = reply;
  }
  // clear function to clear the answer and reset the prompt
  clear() {
    let reply2 = "Please Open Your Cookie";
    this.outputElement.innerHTML = reply2;
  }
}

let myFortune = new fortuneCookie(document.getElementById("magicResponse"));
console.log(myFortune.pickRandom());
