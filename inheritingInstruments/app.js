// create array for instruments
let Instruments = [];
// create a synth and connect it to the main output (your speakers)
let synthApp = {
  synth: new Tone.Synth().toDestination(),
  notes: ["F4", "A4", "D4"],
  // creating a counter to go through instruments
  currentInstrument: 0,
  playSound() {
    // console.log(this)
    this.synth.triggerAttackRelease(this.notes[this.currentInstrument], "8n");
    this.currentInstrument++;
    // a timeout function to have the sound continually play over and over
    setTimeout(this.playSound.bind(this), 500);

    // if/else statement to get our instrument to loop through the instruments array
    if (this.currentInstrument == 1) {
      // invoking a new instrument and making the instrument play
      Instruments[0] = new woodwind("Gently");
      Instruments[0].playInstrument();
    } else if (this.currentInstrument == 2) {
      // this is the percussion else if statement
      Instruments[1] = new percussion("Viciously");
      Instruments[1].playInstrument();
    } else if (this.currentInstrument == 3) {
      // to prevent the note from getting off the array
      this.currentInstrument = this.currentInstrument - this.currentInstrument;
      // the else if statement for the strings class
      Instruments[2] = new string("Methodically");
      Instruments[2].playInstrument();
    }
    console.log(this.currentInstrument);
  },
};
// main class that plays the instrument and hass the loudness, family and verb
class Instrument {
  constructor(loudness, family, verb) {
    this.loudness = loudness;
    this.family = family;
    this.verb = verb;
  }
  playInstrument() {
    console.log(this.loudness + "  The  " + this.family + "  " + this.verb);
  }
}
// the woodwind class that passes the loudness on to the instrument class
class woodwind extends Instrument {
  constructor(loudness) {
    // input the family and verb while passing on the loudness
    super(loudness, "Woodwinds", "Blow");
  }
}
// the same thing as the woodwind class just passed on to percussion
class percussion extends Instrument {
  constructor(loudness) {
    // input the family and verb while passing on the loudness
    super(loudness, "Percussion", "Beat");
  }
}
// making another class named string to pass on loudness to the instrument class
class string extends Instrument {
  constructor(loudness) {
    // input the family and verb while passing on the loudness
    super(loudness, "String", "Strum");
  }
}
