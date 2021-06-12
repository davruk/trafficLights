const lightController = document.querySelector(".lights");  //Variables defined with const cannot be reassigned
const lights = document.querySelectorAll(".change-light");

function clearLights() {
  lightController.className = "lights off";
}

function handleClick() {
  // Clear lights on any button click
  clearLights();

  /* One function handles all the lights by listening for a
     class name within each button */
  if (this.classList.contains("stop")) {
    lightController.classList.add("stop");
  } else if (this.classList.contains("slow")) {
    lightController.classList.add("slow");
  } else if (this.classList.contains("go")) {
    lightController.classList.add("go");
  }
}
// Loop through each light and bind a click event
lights.forEach(light => {
  light.addEventListener("click", handleClick);
});