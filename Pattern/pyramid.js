let n = 3;
for (let i = 1; i <= n; i++) {
  let row = "";

  // spaces
  for (let s = 1; s <= n - i; s++) {
    row += " ";
  }

  // stars
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += "*";
  }

  console.log(row);
}