btn = document.querySelector(".button");
btn.onclick = () => {
  console.log("started!");
  for (a = 0; a < 1000; a++) {
    for (b = 0; b > -1000; b--) {
      console.log(
        "Every time you see this message, I have checked 1 pair of tuple."
      );
      applyRules(a, b);
    }
  }
};

function applyRules(x, y) {
  if ((x - y) / (x + y) != 9) return;
  if ((x * y) / (x + y) != -60) return;
  console.log(`(${x}, ${y})`);
}
