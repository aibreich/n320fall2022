// grabbing the elements from the html page
let title = document.getElementById("title");
let banner = document.getElementById("banner");
let mediaBox = document.getElementById("media");
let boxItems = document.getElementsByClassName("boxitem");
// setting the last element to null
let lastElement = null;

// tween light animation for the title with no delay so its first on the page
TweenLite.from(title, {
  duration: 1,
  y: "-100",
  alpha: 0,
});

// tween max from animation on hte
TweenMax.from(banner, {
  duration: 1,
  x: "-200",
  alpha: 0,
  delay: 0.5,
});

for (let i = 0; i < boxItems.length; i++) {
  TweenLite.from(boxItems[i], {
    duration: 0.6,
    y: 100,
    alpha: 0,
    delay: (i + 3) * 0.2,
  });
  boxItems[i].addEventListener("click", hover);

  function hover(event) {
    resetAnimation(event.target);

    if (lastElement) {
      resetAnimation(lastElement);
      lastElement.classList.remove("selected");
      lastElement.classList.add("deselected");
      lastElement.removeEventListener("click", hoverOff);
      lastElement.addEventListener("click", hover);
    }
    event.target.classList.remove("deselected");
    event.target.classList.add("selected");
    lastElement = event.target;
    lastElement.removeEventListener("click", hover);
    lastElement.addEventListener("click", hoverOff);
  }
  function hoverOff(event) {
    resetAnimation(lastElement);
    lastElement.classList.remove("selected");
    lastElement.classList.add("deselected");
    lastElement.removeEventListener("click", hoverOff);
    lastElement.addEventListener("click", hover);
  }
}

function resetAnimation(lastElement) {
  lastElement.style.animation = "none";
  // trigger reflow
  lastElement.offsetHeight;
  lastElement.style.animation = null;
}
