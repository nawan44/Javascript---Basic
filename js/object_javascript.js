var foo = {};
console.log(typeof foo);     //object

var student = {
    name : "Rachmat ",
    faculty : "Informatics",
    GPA   : 3.79,
    evidence : "PASS"
};


console.log(student.name );         //Rachmat
console.log(student.faculty );      //Informatics
console.log(student["gpa"]);        //*UNDEFINED*
console.log(student["evidence"]);   //PASS

var student1={
    "your fullname" : "Rachmat Gunawan",
    "your faculty" : "Informatics",
    "your gpa" : "3,79",
    "your evidence" : "PASS cumlaude"
};

// console.log(student. name lengkap);   // SyntaxError: missing ) after argument list
console.log(student1["your fullname"]);
console.log(student1["your faculty"]);
console.log(student1["your gpa"]);

var absent = {  1: "Aan",
                "2": "Beta",
                3: "Cici",
                "4": "Dian",
                "5" : "koh"
}

console.log(absent[1]);
console.log(absent[2]);
console.log(absent["3"]);
console.log(absent["4"]);
// console.log(absent.5);// SyntaxError: missing ) after argument list


//ADD OBJECT PROPERTY

var student2 = {};
student2.name = "andi";
student2.faculty = "Biology";
console.log(student2.name);   //andi

var student3 = {};
student3["your name"] = "Rachmat Gunawan";
student3["your faculty"] = "Archeology";
console.log(student3["your name"]);    //Rachmat Gunawan

//CHANGE OBJECT PROPERTY

student2["your name"] = "Ruhendi Saputra";
console.log(student2["your name"]);    //Ruhendi Saputra

//OBJECT METHOD

var car = {
    merk : "Toyota Innova",
    tipe : "MPV",
    price : 2000000000,
    color : "blue",
    starton : function (){return "Engine On"},
    goon : function(placex){ return "GOes To " + placex}
};

console.log(car.merk);     // Toyota Innove
console.log(car["tipe"]);  // MPV
console.log(car.starton());
console.log(car["goon"]("Marise"));    //Goed To Marise

//method object
car.upside = function (Name) {return "Hola " + Name};
console.log(car.upside("Sam"));   //Hola Sam

//CHANGE METHOD
car.upside = "Changed ";
console.log(car.upside);     //Changed

//NESTED OBJECT
var student2 = { name : "Rachmat Gunawan RS",
                 faculty : "Informatics",
                 gpa : {
                        1 : 3.89,
                        semester2 : 3.92,
                        3 : 3.78
                    },
                 semester : 5};
console.log(student2.gpa[1]);         //3.89
console.log(student2.gpa.semester2);  //3.92

//OBJECT REFERENCE
var student3 = "Alex";
var student3New = student3;

console.log(student3);       //Alex
console.log(student3New);    //Alex

student3New = "Joko";
console.log(student3);       //Alex
console.log(student3New);    //Joko

student3 = "Marc";
console.log(student3);       //Marc
console.log(student3New);    //Joko

var student4 = { name : "Ariana",
                 faculty : "informatics"
};
var student4New = student4;
console.log(student4.name);     //Ariana
console.log(student4New.name);  //Ariana

student4.name = "DOvi";
console.log(student4.name);      //Dovi
console.log(student4New.name);   //Dovi

student4.faculty = "Psicology"
console.log(student4.faculty);    //Psicology
console.log(student4New.faculty); //Psicology

// FOR IN
var car3 = { merk : "Toyota Avanza",
             type : "MPV",
             price: 30000000,
             color : "red"
};
var prop;
for (prop in car3){
    console.log(car3[prop]);
}

var car4 ={ merk : "Toyota Innova",
            type : "MPV",
            price : 35000000,
            color : "black",
            starton: function(){return"Engine Start"}};
var prop;
for (prop in car4){
    console.log('Kendaraan ' + prop + car4[prop]);
}

var student5 = ["AA", "BB", "CC", "DD", "EE"];

var key;
for (key in student5){
    console.log('Element ke ' + key +' = '+ student5[key]);
}