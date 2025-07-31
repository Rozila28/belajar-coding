// operator aritmatika
let a = 7;
let b =3;
console.log("penjumlahan:", a+b);
console.log("modulus:", a%b);

// operaror perbandingan
let e = 9;
console.log("perbandingan:", e > a); //true
console.log(e == "9"); //true
console.log(e === "9"); //false
console.log(e != b); //true
console.log(e !== "9"); //true

// operator logika
let umur = 12;
console.log(umur >= 8 && umur <= 15); //true
console.log(umur < 9 || umur > 13); //false
console.log(!(umur <16)); //false

// operator penugasan
let k = 14;
console.log(k += 3); //k = k+3 =k=17
console.log(k *= 2); //k = k *3 = 17 *2= k=34

// operator string
let nama = "ayam";
console.log("Hello " + nama); //Hello ayam
console.log(nama += " jago"); //ayam jago

// operator decrement & increment
let num = 6;
num++;
console.log(num); //7

// operator ternary
let usia = 17;
let sstatus = (usia <= 25) ? "anak-anak" : "dewasa";
console.log(sstatus); //anak-anak