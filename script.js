let car = document.querySelector("#car");
let greenLight = document.querySelector("#green");
let yellowLight = document.querySelector("#yellow");
let redLight = document.querySelector("#red");


function setgreenLight() {
  greenLight.style.backgroundColor = "rgb(5, 235, 5)";
  yellowLight.style.backgroundColor = "rgb(180, 180, 7)";
  redLight.style.backgroundColor = "rgb(168, 14, 14)";
  car.style.animationPlayState = "running";
}
function setyellowLight() {
  greenLight.style.backgroundColor = "green";
  yellowLight.style.backgroundColor = "yellow";
  redLight.style.backgroundColor = "rgb(168, 14, 14)";
  car.style.animationPlayState = "paused";
}
function setredLight() {
  greenLight.style.backgroundColor = "green";
  yellowLight.style.backgroundColor = "rgb(180, 180, 7)";
  redLight.style.backgroundColor = "red";
  car.style.animationPlayState = "paused";
}


function lightSequence() {
  setgreenLight();
  setTimeout(() => {
    setyellowLight();
    setTimeout(() => {
      setredLight();
      setTimeout(() => {
        setyellowLight();
        setTimeout(() => {
          setgreenLight();
          setTimeout(() => {
            lightSequence()
          }, 5000);
        }, 2000);
      }, 5000);
    }, 2000);
  }, 5000);
}

lightSequence()