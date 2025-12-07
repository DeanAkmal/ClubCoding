const input = require('readline-sync');

const nama = input.question();
const umur = Number(input.question());


if (umur < 21){
    console.log(`Maaf ${nama}, umur kamu kurang ` + (21 - umur) + " tahun lagi")
}

if (umur >= 21){
    const uang = Number(input.question());
    if(uang < 500000){
        console.log(`Maaf ${nama}, uang kamu cuma ` + (uang / 1000) + " ribu," + " datang lagi lain kali");
    }
    else if (uang > 500000) {
        console.log(`Selamat datang ${nama}`);
    }
}

