const $targetHome = document.getElementById("top");
const $upArrow = document.querySelector(".up-arrow");

$upArrow.style.display = "none";

window.addEventListener("scroll", function (event) {
  const scroll = this.scrollY || this.pageYOffset;
  const heightHomePointScroll = $targetHome.offsetHeight / 2;

  if (scroll <= heightHomePointScroll) {
    $upArrow.style.display = "none";
  } else {
    $upArrow.style.display = "inline";
  }
});
