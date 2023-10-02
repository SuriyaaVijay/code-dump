function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
  if (n == 0) {
    return;
  }
  towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
  document.write(
    "Move disk " + n + " from rod " + from_rod + " to rod " + to_rod + "<br/>"
  );
  towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

var N = 3;

towerOfHanoi(N, "A", "C", "B");
