const button = document.getElementById("btn");

button.addEventListener("click", () => {
button.textContent = "Are You Sure?";
});
  
const swordimg = document.getElementById("swordimg");

swordimg.addEventListener("mouseover", () => {
  swordimg.src = "/path2/assetsword2.png";
});
swordimg.addEventListener("mouseout", () => {
  swordimg.src = "/path2/assetredsword2.png";
});
