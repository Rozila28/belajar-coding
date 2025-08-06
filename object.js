// cara buat object
const mobil = {
    merek: "BMW",
    warna: "Biru",
    seri: "M3"
};
console.log(mobil.warna);
console.log(mobil["seri"]);

// cara hapus properti
delete mobil.seri;
console.log(mobil);

// nested object
const siswa ={
    nama: "Bilal",
    umur: 3,
    hoby:{
        hoby1: "Makan",
        hoby2: "bermain",
        hoby3: "menonton"
    }
};
console.log(siswa.hoby.hoby3);
console.log(siswa.hoby["hoby2"]);
console.log(siswa["hoby"]["hoby1"]);

// array dalam object
const ikan ={
    nama: "Nila",
    warna: "silver",
    ukuran: ["Kecil","Sedang","Besar"]
};
console.log(ikan.ukuran[1]);

// object dalam array
const hewan =[
    {
        nama: "singa",
        warna: "coklat"
    },
    {
        nama: "Harimau",
        warna: "kuning"
    }
];
console.log(hewan[1].nama);

// object method
const binatang ={
    nama: "zebra",
    warna: "Belang",
    ukuran: function (){
        return this.nama + " besar";
    }
};
console.log(binatang.ukuran());

// object constructor
function orang(nama,umur,agama){
    this.namaDepan =nama;
    this.umur =umur;
    this.agama =agama;
};
const polisi = new orang("Anto",34,"islam");
const petani = new orang("Rambo",30,"hindu");
console.log("detail polisi",polisi);
console.log(`nama polisi adalah ${polisi.namaDepan}`);