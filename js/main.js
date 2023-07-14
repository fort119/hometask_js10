let arr = [];

let setAmountOfElements = prompt("Введіть довжину масиву");

for (i = 0; i < setAmountOfElements; i++) {
  let element = prompt("Введіть елемент №" + (i + 1));
  arr.push(element);
}
alert("Наразі масив має такий вигляд: " + arr);

arr.sort((a, b) => a - b);
alert("Масив відсортовано за зростанням: " + arr);

arr.splice(2, 3);
alert("Масив із видаленими елементами із 2 по 4 (включно): " + arr);