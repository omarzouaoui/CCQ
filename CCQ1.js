var countries=[
    {name:"Tunisia",Capital:"Tunis",Random:["Tunis","Noukchot","Tripoli","Khortoum"]},
    {name:"Mauritania",Capital:"Nouakchot",Random:["Cairo","Magadishu","Khartoum","Nouakchot"]},
    {name:"Morocco",Capital:"Rabat",Random:["Sanaa","Djibouti","Rabat","Cairo"]},
    {name:"Algeria",Capital:"Algiers",Random:["Doha","Amman","Algiers","ABu Dhabi"]},
    {name:"Libya",Capital:"Tripoli",Random:["Tripoli","Manama","Sanaa","Damascus"]},
    {name:"Egypt",Capital:"Cairo",Random:["Riadh","Cairo","Beirut","Doha"]},
    {name:"Sudan",Capital:"Khartoum",Random:["Khartoum","Magadishu","Hargesia","Moroni"]},
    {name:"Djibouti",Capital:"Djibouti",Random:["Djibouti","Magadishu","Hargesia","Damascus"]},
    {name:"Soumalia",Capital:"Magadishu",Random:["Magadishu","Moroni","Hargesia","Manama"]},
    {name:"Comoros",Capital:"Moroni",Random:["Amman","Magadishu","Kuwait City","Moroni"]},
    {name:"Palestine",Capital:"Al Qudes",Random:["Al Qudes","Al Qudes","Al Qudes","Al Qudes"]},
    {name:"UAE",Capital:"Abu Dhabi",Random:["Riadh","Baghdad","Doha","Abu Dhabi"]},
    {name:"Jordan",Capital:"Amman",Random:["Tripoli","Manama","Amman","Damascus"]},
    {name:"Irak",Capital:"Baghdad",Random:["Baghdad","Damascus","Doha","Sanaa"]},
    {name:"Lebanon",Capital:"Beirut",Random:["Riadh","Algiers","Moroni","Beirut"]},
    {name:"Syria",Capital:"Damascus",Random:["Tunis","Amman","Damascus","Manama"]},
    {name:"Qatar",Capital:"Doha",Random:["Baghdad","Doha","Sanaa","Riadh"]},
    {name:"Kuwait",Capital:"Kuwait City",Random:["Kuwait City","Cairo","Nouakchot","Rabat"]},
    {name:"Bahrain",Capital:"Manama",Random:["Tunis","Manama","Doha","Cairo","Djiouti"]},
    {name:"Saudi Arabia",Capital:"Riadh",Random:["Tunis","Abu Dhabi","Baghdad","Riadh"]},
    {name:"Yamen",Capital:"Sanaa",Random:["Sanaa","Amman","Rabat","Manama"]},
    {name:"Somalialand",Capital:"Hargesia",Random:["Magadishu","Damascus","Hargesia","Nouakchot"]},
    {name:"Oman",Capital:"Mascate",Random:["Cairo","Mascate","Damascus","Baghdad"]}
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
/*var randomCapital = function(array){
    var randomIndex=[]
    for(i=0;i<3;i++){
        randomIndex.push(Math.floor(Math.random() * array.length))};
        console.log(randomIndex)
        for(i=0;i<array.length;i++){
            var x=array[randomIndex];
        }
        return x
    }*/
var random = function(array){
var randomIndex = Math.floor(Math.random() * array.length);
return array[randomIndex].Random;
};

//var x=document.getElementById('a')
//x=function randomCapital(countries)
//countries r
var run=randomCountries(countries)
//rand name
$('#country').append(run.name)
//Rund of countries
$('#a').append(run.Random[0])
$('#b').append(run.Random[1])
$('#c').append(run.Random[2])
$('#d').append(run.Random[3])

//Click
var counter=0
$('#a').click(function(){
    if(`${run.Random[0]}`===`${run.Capital}`){
        $('#comment').append('Correct , good job!')
    } else{
        $('#comment').append('Sorry , but Nope')
        $('#comment').css('color','red')
    }
})
$('#b').click(function(){
    if(`${run.Random[1]}`===`${run.Capital}`){
        $('#comment').append('Correct , good job!')
    } else{
        $('#comment').append('Sorry , but Nope')
        $('#comment').css('color','red')
    }
})
$('#c').click(function(){
    if(`${run.Random[2]}`===`${run.Capital}`){
        $('#comment').append('Correct , good job!')
    } else{
        $('#comment').append('Sorry , but Nope')
        $('#comment').css('color','red')
    }
})
$('#d').click(function(){
    if(`${run.Random[3]}`===`${run.Capital}`){
        $('#comment').append('Correct , good job!')
   
    } else{
        $('#comment').append('Sorry , but Nope')
        $('#comment').css('color','red')
    }
})

//reapeted f
