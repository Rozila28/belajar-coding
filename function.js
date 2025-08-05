// function tanpa parameter
function sapaNamaSiswa(){
    console.log("Hello Rozila");
};
sapaNamaSiswa();

// function dengan parameter
function sapaNamaSiswi(siswi){
    console.log(`Hello ${siswi}`);
};
sapaNamaSiswi("Erdia");

// function dengan return value
function hitungLuasPersegi(sisi){
    return sisi * sisi;
};
console.log(hitungLuasPersegi(8));

function hitungLuasPersegiPanjang(panjang,lebar){
    return panjang * lebar;
};
console.log(hitungLuasPersegiPanjang(12,6));
