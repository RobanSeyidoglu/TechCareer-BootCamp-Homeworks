// "Tech Career" metnini tersten yazdır

// var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11] bu dizideki SADECE poizitif sayıların toplamını ekrana yaz

// var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11] bu dizideki en büyük sayı hangisidir?

//1-50 arası sayılar içinde 3’e veya 5’e tam bölünebilen sayıları console a yaz ve kaç adet olduğunu console yaz.

// 1

let name1 = "Tech Career";
name1 = name1.split("").reverse().join("");
console.log(name1);

// 2

var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    total += numbers[i];
  }
}
console.log(total);

// 3
var totalLength = [];

for (var j = 1; j <= 50; j++) {
  if (j % 5 === 0 || j % 3 === 0) {
    totalLength.push(j);
  }
}
console.log(totalLength);
console.log(totalLength.length);
