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
