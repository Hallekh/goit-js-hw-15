const textSize = document.getElementById("font-size-control");
const text = document.getElementById("text");
// const minSize = document.getAttribute("min");
text.style.fontSize = textSize.value + "px";
// const maxSize = document.getAttribute('max');
textSize.addEventListener("input", () => {
  const fontSize = textSize.value + "px";
  text.style.fontSize = fontSize;
});
