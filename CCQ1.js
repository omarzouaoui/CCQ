var countries=[
    {name:"Tunisia",Capital:"Tunis",Random:[]},
    {name:"Mauritania",Capital:"Nouakchot",Random:[]},
    {name:"Morocco",Capital:"Rabat",Random:[]},
    {name:"Algeria",Capital:"Algiers",Random:[]},
    {name:"Libya",Capital:"Tripoli",Random:[]},
    {name:"Egypt",Capital:"Cairo",Random:[]},
    {name:"Sudan",Capital:"Khartoum",Random:[]},
    {name:"Djibouti",Capital:"Djibouti",Random:[]},
    {name:"Soumalia",Capital:"Magadishu",Random:[]},
    {name:"Comoros",Capital:"Moroni",Random:[]},
    {name:"Palestine",Capital:"Al Qudes",Random:[]},
    {name:"UAE",Capital:"Abu Dhabi",Random:[]},
    {name:"Jordan",Capital:"Amman",Random:[]},
    {name:"Irak",Capital:"Baghdad",Random:[]},
    {name:"Lebanon",Capital:"Beirut",Random:[]},
    {name:"Syria",Capital:"Damascus",Random:[]},
    {name:"Qatar",Capital:"Doha",Random:[]},
    {name:"Kuwait",Capital:"Kuwait City",Random:[]},
    {name:"Bahrain",Capital:"Manama",Random:["Manama","Doha","Cairo","Djiouti"]},
    {name:"Saudi Arabia",Capital:"Riadh",Random:["Tunis","Abu Dhabi","Baghdad","Riadh"]},
    {name:"Yamen",Capital:"Sanaa",Random:["Sanaa","Amman","Rabat","Manama"]},
    {name:"Somalialand",Capital:"Hargesia",Random:["Magadishu","Damascus","Hargesia","Nouakchot"]},
]
var randomCountries = function(array){
var randomIndex = Math.floor(Math.random() * array.length);
return array[randomIndex];
};
var randomName = function(array){
var randomIndex = Math.floor(Math.random() * array.length);
return array[randomIndex].name;
};
var randomCapital = function(array){
var randomIndex = Math.floor(Math.random() * array.length);
return array[randomIndex].Capital;
};
var random = function(array){
var randomIndex = Math.floor(Math.random() * array.length);
return array[randomIndex].Random;
};
