//class that contains the logic for the game
class Game {
  //class properties
  foundCircles = 0;
  totalCircles = 0;
  searchColor = "#99ff00";
  normalColor = "#7700AA";
  gameZone = document.getElementById("gameZone");
  foundBar = new FoundBar();

  constructor() {
    //make the circles here
    for (var i = 0; i < 25; i++) {
      let newCirc = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

      //add circle style class
      newCirc.classList.add("gameCirc");
      newCirc.setAttribute("cx", Math.random() * 500);
      newCirc.setAttribute("cy", Math.random() * 500);

      //randomly choose what reveal color the circle is
      if (Math.random() < 0.3) {
        //set to be looking circles
        newCirc.dataset.hiddenColor = this.searchColor;
        this.totalCircles++;
      } else {
        newCirc.dataset.hiddenColor = this.normalColor;
      }

      //mouse events
      newCirc.addEventListener("mouseover", (event) => {
        //on mouse over show hidden color
        event.target.style.fill = event.target.dataset.hiddenColor;
      });

      newCirc.addEventListener("mouseout", (event) => {
        //on mouse out to return circles to black
        event.target.style.fill = "#000";
      });

      newCirc.addEventListener("click", (event) => {
        //grabbing the search color clicked circle
        if (event.target.dataset.hiddenColor == this.searchColor) {
          event.target.remove();

          //store how many have been clicked on
          this.foundCircles++;

          //update the found UI
          this.foundBar.setPercent(this.foundCircles / this.totalCircles);
        }
      });

      //add circle to screen
      this.gameZone.appendChild(newCirc);
    }
  }
}

class FoundBar {
  element = document.getElementById("foundBar");
  maxSize = 130;
  percent = 0;

  setPercent(percent) {
    this.percent = percent;
    this.element.setAttribute("width", this.percent * this.maxSize);
  }
}

let g = new Game();
