import { orang } from "./object.js"

// template literal
const nama ="spri";  //global variabel
const umur = 23;  // global variabel
console.log(`Hallo, nama saya ${nama}, umur saya ${umur} tahun`);

// let & const di function scop
const hewan = (nama = "sapi",jumlahKaki = 4) =>{
    let warna = "hitam";
    return `${nama} berkaki ${jumlahKaki} berwarna ${warna}`
};
console.log(hewan("ikan",0));

// let & const di block scop
if (3<5) {
    let hasil = "benar";
    console.log(hasil);
} else {
    console.log("salah");
}

// ternary operator
const hasil = (3<5) ? "benar" : "salah";
console.log(hasil);

// destructuring
const ikan ={
    name :"nila",
    habitat :"air tawar"
}
const {name,habitat} = ikan;
console.log(name,habitat);

const hobi = ["memancing","bersepeda","badminton"];
const [satu,dua,tiga] = hobi ;
console.log(satu,dua,tiga);

// high order function
const animal =[
    {
        nama: "singa",
        warna: "coklat"
    },
    {
        nama: "Harimau",
        warna: "kuning"
    }
];
const data = animal.map(hewan => hewan.nama);
console.log(data);
animal.map((hewan,index) => {
    console.log(`${index} ${hewan.nama} ${hewan.warna}`);
})
const dataFilter =animal.filter(warnaHewan => warnaHewan.warna == "kuning");
console.log(dataFilter);
const dataFind =animal.find(warnaHewan => warnaHewan.warna == "kuning");
console.log(dataFind);

// spread operator & rest parameter 
// arr1 = [1,2,3];
// arr2 = [...arr1,4,5,6];
// console.log(arr2);
const ikanLagi = {...ikan,warna : "abu-abu"};
console.log(ikanLagi);

const tambah = (...numbers) => {
   return numbers.reduce((a,b)=> a+b,0); 

}
console.log(tambah(1,2,3,4));

const nelayan = new orang("santoso",46,"budha");
console.log(nelayan)