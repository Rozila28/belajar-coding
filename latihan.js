/* Soal:
Buatlah sebuah function bernama getFirstStudentName yang menerima sebuah array berisi object siswa (dengan properti name dan age).
 Function harus mengembalikan nama siswa pertama di dalam array.*/
 function getFirstStudentName(students){
    return students[0].name;
 };
 const students =[
    {
        name: "Aisyah",
        age: 12
    },
    {
        name: "Rubi",
        age: 12
    }
 ];
 console.log(getFirstStudentName(students));

// Buatlah sebuah function bernama personDetails yang menerima sebuah object person (dengan properti firstName, LastName, age, dan nationality).
// Function harus mengembalikan sebuah string Halo, nama saya firstName LastName.
function personDetails(person){
    return `Hallo, nama saya ${person.firstName} ${person.lastName}`;
};
const person ={
    firstName: "Reva",
    lastName: "Fidela",
    age: 18,
    nationality: "Indonesia"

};
console.log(personDetails(person));

// Buatlah sebuah function bernama sumNumbers yang menerima numbers kemudian
// Function harus mengembalikan sebuah penjumlahan antara numbers tersebut.
function sumNumbers(a,b){
    return a+b ;
};
console.log(sumNumbers(4,5));