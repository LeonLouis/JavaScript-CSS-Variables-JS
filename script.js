var controls = document.querySelectorAll('.controls .input-wrap input');

function handleValue() {
  var suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

controls.forEach(control => control.addEventListener("change", handleValue));
controls.forEach(control => control.addEventListener("mousemove", handleValue));