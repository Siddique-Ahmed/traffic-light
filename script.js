let car = document.querySelector("#car");
let redLight = document.querySelector("#red");
let yellowLight = document.querySelector("#yellow");
let greenLight = document.querySelector("#green");

function setRedLight() {
  redLight.style.backgroundColor = "red";
  greenLight.style.backgroundColor = "green"; 
  yellowLight.style.backgroundColor = "rgb(180, 180, 7)";
  car.style.animationPlayState = "paused"; 
}

function setYellowLight() {
  redLight.style.backgroundColor = "rgb(168, 14, 14)"; 
  greenLight.style.backgroundColor = "green";
  yellowLight.style.backgroundColor = "yellow";
  car.style.animationPlayState = "paused"; 
}

function setGreenLight() {
  redLight.style.backgroundColor = "rgb(168, 14, 14)";
  greenLight.style.backgroundColor = "rgb(5, 235, 5)"; 
  yellowLight.style.backgroundColor = "rgb(180, 180, 7)"; 
  car.style.animationPlayState = "running";
}

function trafficLightSequence() {
  setGreenLight(); 
  setTimeout(() => {
    setYellowLight();
    setTimeout(() => {
      setRedLight();
      setTimeout(() => {
        trafficLightSequence(); 
      }, 5000);
    }, 2000); 
  }, 5000); 
}


trafficLightSequence();