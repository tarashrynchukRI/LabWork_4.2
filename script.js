// Lab_4.2
// Гринчук Тарас
// Лабораторна робота № 4.2
// Табуляція функції, заданої формулою: функція однієї змінної
// Варіант №4

// Ініціалізуємо змінні
let y, x, xp, xk, dx, B, A;

// Отримуємо значення x
xp = parseInt(prompt("xp:"));
xk = parseInt(prompt("xk:"));
dx = parseInt(prompt("dx:"));

console.log("---------------------------");
console.log("|" + "\tx\t" + "|" + "\t\ty\t\t" + "|");
console.log("---------------------------");

x = xp;

while (x <= xk) {
   A = 1 + x;
   if (x <= 4) {
      B = Math.exp(Math.log(2 + 2 * x) + 2 * x);
   } else if (x > 7) {
      B = 1 / Math.tan((1 + x) / 9) + 8 * x;
   } else {
      B = 1 - 7 * x + x ** 2 - 2 * x ** 3;
   }
   y = A + B;
   console.log("|\t" + x + "\t|\t" + y.toFixed(5) + "\t|");
   x += dx;
}
console.log("---------------------------");
