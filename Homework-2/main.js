// 1) "  Çağatay Yıldız" isimli metindeki boşlukları kaldır.    (REPLACE)
// 2) "cagatay yildiz" kelimesindeki boşlukları temizle ve tüm harfleri büyült ( REPLACE ve UPPER)
// 3) "******Çağatay Yıldız" isimli metindeki yıldızları kaldır (REPLACE)
// 4) "Çağatay  Yıldız" metnindeki kelimeler arasında 2 boşluk var bunu bir boşluk yap (REPLACE)
// 5) "**Tech Career**" isimli metindeki yıldızları kaldır (REPLACE)
// 6) "Tech Career" isimli metnin soluna ve sağına 3 yıldız koy. "***Tech Career***" ( Normal toplama operatörü)
// 7) "Tech Career Bilişim teknolojileri" metnindeki son kelimeyi büyült (SUBSTRING)
// 8) "Tech bilişim" kelimelerin ilk harflerini büyült (Substring ve upper)

// 1

let Name1 = "         Çağatay Yıldız";
Name1 = Name1.trim();
console.log(Name1);

// 2

let Name2 = "         Çağatay Yıldız";
Name2 = Name2.trim().toLocaleUpperCase();
console.log(Name2);

// 3

let Name3 = "******Çağatay Yıldız";
Name3 = Name3.replaceAll("*", "");
console.log(Name3);

// 4

let Name4 = "Çağatay  Yıldız";
Name4 = Name4.replace(" ", "");
console.log(Name4);

// 5

let Name5 = "**Tech Career**";
Name5 = Name5.replaceAll("*", "");
console.log(Name5);

// 6

let Name6 = "Tech Career";
Name6 = "**" + Name6 + "**";
console.log(Name6);

// 7

let Name7 = "Tech Career Bilişim teknolojileri";
Name7 = Name7.substring(Name7.length - 13).toUpperCase();
console.log(Name7);

// 8

let Name8 = "Tech bilişim";
let words = Name8.split(" ");
for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
words = words.join(" ");
console.log(words);
