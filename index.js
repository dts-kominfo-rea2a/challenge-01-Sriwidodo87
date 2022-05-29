// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
// original code
//const firstUser = {};
//const secondUser = {};

const firstUser ={
id :1,
nama :"Monica",//string
gender :"Female",//boolean false
age :17,//number
email:"monica@dingdong.com",//string
favoriteColor : ['Yellow', 'Pink', 'White', 'Purple' ],//array
isHavePet:'Yes',//string
education :[
    {name:"SD01",  city: "Jakarta",  graduate: 2016},
    {name:"SMP02", city: "Jakarta", graduate: 2019 },
    {name:"SMA03", city:"Tangerang",graduate:null },
],//array
favoriteRestaurant:[
'Bento', 'Sushi', "Pancake", "Eggy", "Tempura",  "Padang", "Tteok", "Sushi"
]//array
};
const secondUser = {
    id:2,
nama :"Wendy",//string
gender:"Male",// boolean true(male)
age :23,//number
email:"wendy@dingdong.com",//string
favoriteColor : [ 'Blue', 'Black', 'Grey'],//array
isHavePet:'no',//string
education :[
    {name: "SD 02", city: "Jakarta", graduate: 2010 },
    {name:  "SMP 03", city: "Bogor", graduate: 2013 },
    {name: "SMA 01", city: "Surabaya", graduate: 2016 },
],//array

favoriteRestaurant:[
    'Tempura', 'Bento', 'Sushi', 'Pancake', 'Padang', 'Katsu', 'Geprek','Eggy'
    ]//array
};

// TODO: Masukkan hasil akhir dari kedua user di sini
//original code
//const users = [];
const users=[firstUser,secondUser];


// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};