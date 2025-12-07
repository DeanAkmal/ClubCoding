const input = require('readline-sync');

const nama = input.question();
const umur = input.question();


if (umur < 21){
    console.log(`Maaf ${nama}, umur kamu kurang ` + (21 - umur) + " tahun lagi")
}
