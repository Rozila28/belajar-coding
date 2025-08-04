// for loop
for(let i =1;i <=7;i++){
    console.log(i);
}

// for in
let siswa ={
    nama:"Rozila",
    umur:17,
    jurusan:"informatika"
} 
for(let key in siswa){
    console.log(key +": " + siswa[key])
}

// for of
let buah =["pir","mangga","rambutan"];
for(let item of buah){
    console.log(item)
}

// while loop
let i=1;
while(i <=9){
    console.log(i)
    i++
}

// do while
let j=5;
do{
    console.log(j)
    j++
} while(j <=4)