const button = document.getElementById("btn");

button.addEventListener("click", () => {
button.textContent = "Are You Sure?";
});
  
const swordimg = document.getElementById("swordimg");
swordimg.addEventListener("mouseover", () => {
  swordimg.src = "assetpinksword2.png";
});
swordimg.addEventListener("mouseout", () => {
  swordimg.src = "assetredsword2.png";
});
