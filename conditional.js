// if statemant
let umur = 19;
if (umur >= 14) {
  console.log("kamu sudah dewasa");
}

// if else statement
let nilai = 60;
if (nilai >= 70) {
  console.log("LULUS");
} else {
  console.log("GAGAL");
}

// else if statement
let suhu = 26;
if (suhu < 20) {
  console.log("DINGIN");
} else if (suhu >= 20 && suhu <= 30) {
  console.log("SEJUK");
} else {
  console.log("PANAS");
}

// switch
let hari = "rabu";
switch (hari) {
  case "senin":
    console.log("Hari Beraktivitas");
    break;
  case "minggu":
    console.log("Hari Libur");
    break;
  default:
    console.log("Hari Santay");
}
let text;
switch (new Date().getDay()) {
  case 4:
  case 5:
    console.log("Soon it is Weekend");
    break;
  case 0:
  case 6:
     console.log("It is Weekend");
    break;
  default:
    console.log("Looking forward to the Weekend");
}
console.log(new Date().getDay())
