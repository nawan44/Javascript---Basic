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
    goon : function(placex){ return "GOes To"}
};

console.log(car.merk);     // Toyota Innove
console.log(car["tipe"]);  // MPV
console.log(car.starton());
console.log(car["goon"]("Marise"));
